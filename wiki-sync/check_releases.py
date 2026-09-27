#!/usr/bin/env python3
"""Refresh verified Modrinth releases only. Never guesses project IDs from plugin names."""
import json
import os
import pathlib
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone

ROOT = pathlib.Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'docs/assets/wiki-sync'
CONFIG = ROOT / 'wiki-sync/release-sources.json'
OUTPUT = ASSETS / 'latest.json'

def get_json(url):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'ERRSA-Staff-Wiki-Release-Checker/1.0 (GitHub Actions)',
        'Accept': 'application/json',
    })
    with urllib.request.urlopen(req, timeout=18) as response:
        return json.load(response)

def main():
    config = json.loads(CONFIG.read_text(encoding='utf-8'))
    old = json.loads(OUTPUT.read_text(encoding='utf-8')) if OUTPUT.exists() else {'plugins': {}}
    survival = json.loads((ASSETS/'survival.json').read_text(encoding='utf-8'))
    game = survival.get('minecraftVersion')
    result = {'schema': 1, 'checkedAt': datetime.now(timezone.utc).isoformat(), 'plugins': {'survival': {}, 'velocity': {}}}
    failed = 0
    for item in config['sources']:
        server = item['server']
        key = ''.join(ch for ch in item['plugin'].lower() if ch.isalnum())
        if server == 'survival' and not game:
            print(f'Skip {key}: no Minecraft version in snapshot')
            continue
        if item['provider'] != 'modrinth':
            raise ValueError('Unsupported provider: '+str(item['provider']))
        params = {'loaders': json.dumps([item['loader']]), 'include_changelog': 'false'}
        if server == 'survival': params['game_versions'] = json.dumps([game])
        url = 'https://api.modrinth.com/v2/project/'+urllib.parse.quote(item['project'],safe='')+'/version?'+urllib.parse.urlencode(params)
        try:
            versions = get_json(url)
            if not isinstance(versions,list): raise ValueError('Unexpected Modrinth response')
            versions = [v for v in versions if v.get('status') in ('listed', None) and v.get('version_type') in ('release','beta') and v.get('version_number') and v.get('date_published')]
            if not versions: print(f'No compatible release listed for {server}/{key}'); continue
            latest = max(versions,key=lambda v:v['date_published'])
            result['plugins'][server][key] = {'version':latest['version_number'], 'url':'https://modrinth.com/plugin/'+item['project']+'/version/'+latest['id'], 'source':'Modrinth', 'gameVersion':game if server=='survival' else None}
            print(f'{server}/{key}: {latest["version_number"]}')
        except (OSError, ValueError, KeyError, TypeError) as exc:
            failed += 1
            print(f'Warning: could not check {server}/{key}: {exc}')
            # Preserve last known verified match, but never create a made-up version.
            saved = old.get('plugins',{}).get(server,{}).get(key)
            if saved and saved.get('version') and saved.get('url') and (server != 'survival' or saved.get('gameVersion') == game): result['plugins'][server][key] = saved
    OUTPUT.write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    print(f'Checked {len(config["sources"])} known projects; {failed} provider failures. No checks from Paper, Velocity or the browser.')

if __name__ == '__main__': main()
