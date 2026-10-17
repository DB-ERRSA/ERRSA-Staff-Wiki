
/* ERRSA Minecraft Staff Troubleshooting Decision Trees */
(() => {
  const TREES = {
    registration: {
      start: {
        q: 'Where is the player stuck?',
        a: [
          ['Cannot connect to ERRSA Minecraft', 'edition'],
          ['Cannot accept rules or submit university email', 'b_start'],
          ['Submitted email; verification is not progressing', 'c_start'],
          ['Verified but still cannot play normally', 'd_start'],
          ['Needs to switch Java / Bedrock accounts', 'account_swap']
        ]
      },

      // ====================================================
      // SECTION A — CONNECTION TROUBLESHOOTING
      // ====================================================

      edition: {
        q: 'What Minecraft edition are they using?',
        a: [
          ['Java Edition', 'java_connect'],
          ['Bedrock Edition', 'bedrock_connect']
        ]
      },

      // A1 — JAVA EDITION

      java_connect: {
        q: 'What happens when they connect?',
        a: [
          ['Outdated or incompatible version', 'java_version'],
          ['Connection timed out', 'java_timeout'],
          ['Other error', 'java_other']
        ]
      },

      java_version: {
        q: 'What Java version is the player using?',
        a: [
          ['Older than 1.21.4', 'java_old'],
          ['Exactly 1.21.4', 'java_exact'],
          ['Newer than 1.21.4', 'java_new'],
          ["Player doesn't know", 'java_unknown']
        ]
      },

      java_old: {
        result: 'Update to a supported Java version',
        steps: [
          'Open the Minecraft Launcher and select a supported Java release (at least 1.21.4).',
          'Launch that version and try connecting once.',
          'If it still fails, record the new error and return to connection troubleshooting.'
        ],
        owner: 'Moderator'
      },

      java_exact: {
        result: 'Investigate an error on 1.21.4',
        steps: [
          'Record the exact connection error and time.',
          'Confirm the official ERRSA address.',
          'Select the relevant timeout or other-error route if the problem persists.'
        ],
        owner: 'Moderator'
      },

      java_new: {
        result: 'Check ViaVersion compatibility',
        steps: [
          'Record the exact Minecraft Java version.',
          'Check #staff-logs for ViaVersion compatibility notifications.',
          'A Developer should confirm that the ViaVersion plugin loaded on Velocity supports that client version; a downloaded update may require a restart to load.',
          'Escalate required updates to a Developer or Server Lead.'
        ],
        owner: 'Moderator → Developer / Server Lead'
      },

      java_unknown: {
        result: 'Find the Java version',
        steps: [
          'Open the Minecraft Launcher and check the selected Java installation/version before pressing Play.',
          'If already in Minecraft, the Java version is usually displayed on the main menu.',
          'Return to the version question once identified.'
        ],
        owner: 'Moderator'
      },

      // A1B — JAVA CONNECTION TIMEOUT

      java_timeout: {
        q: 'Can other players connect to ERRSA Minecraft?',
        a: [
          ['Yes', 'java_other_servers'],
          ['No, multiple players cannot connect', 'java_scope'],
          ['Not sure', 'java_scope_unknown']
        ]
      },

      java_other_servers: {
        q: 'Can this player connect to other Java multiplayer servers?',
        a: [
          ['Yes, other servers work', 'java_when'],
          ['No, other servers also fail', 'java_client'],
          ['They have not tested', 'java_test']
        ]
      },

      java_when: {
        q: 'When does the connection fail?',
        a: [
          ['Before reaching ERRSA', 'java_before'],
          ['During login or loading terrain', 'java_login'],
          ['After joining a world', 'java_after']
        ]
      },

      java_before: {
        result: 'Connection fails before joining',
        steps: [
          'Verify the official Java server address.',
          'Confirm the player is using Java Edition.',
          'Restart Minecraft and attempt one reconnect.',
          'If ERRSA alone fails, record the full error and time for a Developer to check proxy logs.'
        ],
        owner: 'Moderator → Developer'
      },

      java_login: {
        result: 'Connection fails during login',
        steps: [
          'Record the exact error, client version, and timestamp.',
          'Ask whether the player has connected successfully before.',
          'Restart Minecraft and try once.',
          'If registration is involved, open Section B or C; otherwise escalate persistent errors for live console or historical log review.'
        ],
        owner: 'Moderator → Admin (live console) → Developer'
      },

      java_after: {
        result: 'Disconnect after joining',
        steps: [
          'Identify the world/server and how long the player stayed connected.',
          'Record the kick/disconnect message and last action.',
          'If repeatable, ask an Admin to watch the live console during one attempt and escalate for Developer investigation.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      java_client: {
        result: 'Possible player client or campus-network issue',
        steps: [
          'Ask whether the internet works outside Minecraft.',
          'Restart Minecraft and verify a supported client version.',
          'Check whether the same error occurs on multiple Java multiplayer servers.',
          'If all servers remain inaccessible, suggest contacting campus IT or official Minecraft support as appropriate.'
        ],
        owner: 'Moderator'
      },

      java_test: {
        result: 'Check another trusted Java server',
        steps: [
          'Ask the player to test another trusted Java multiplayer server.',
          'If it works, return and choose that other servers work.',
          'If it fails, follow the general client/network troubleshooting route.'
        ],
        owner: 'Moderator'
      },

      java_scope: {
        q: 'Is the whole ERRSA network affected or just one backend?',
        a: [
          ['Cannot reach ERRSA at all', 'proxy_outage'],
          ['Can join ERRSA but cannot reach one server', 'backend_outage'],
          ['Unknown', 'java_scope_unknown']
        ]
      },

      java_scope_unknown: {
        result: 'Determine outage scope',
        steps: [
          'Ask another player or staff member to test the connection.',
          'Determine whether Java and Bedrock are both affected and whether the failure is tied to a specific backend.',
          'Check #staff-logs and gather timestamps; return to the appropriate branch.'
        ],
        owner: 'Moderator'
      },

      proxy_outage: {
        result: 'Possible Velocity proxy outage',
        steps: [
          'Record the first failure time and affected editions.',
          'Check existing staff reports and #staff-logs.',
          'Ask an Admin to inspect current console messages; Developers can inspect historical logs and proxy status.'
        ],
        owner: 'Moderator → Admin → Developer / Server Lead'
      },

      backend_outage: {
        result: 'Possible backend outage',
        steps: [
          'Identify the affected server and whether other backends work.',
          'Record errors and times.',
          'Ask an Admin to inspect current backend console messages and escalate for technical review.'
        ],
        owner: 'Moderator → Admin → Developer / Server Lead'
      },

      // A1C — OTHER JAVA ERRORS

      java_other: {
        q: 'What other Java connection error appears?',
        a: [
          ['Connection refused / cannot reach server', 'java_refused'],
          ['Failed to verify username / invalid session', 'java_session'],
          ['Disconnected or kicked', 'java_kick'],
          ['Unknown host / hostname resolution', 'java_host'],
          ['Different or unclear error', 'java_diagnostics']
        ]
      },

      java_refused: {
        result: 'Connection refused',
        steps: [
          'Verify the official ERRSA address.',
          'Check whether other players can connect.',
          'Restart Minecraft and try once.',
          'If several players are affected, use the outage path; otherwise record the full error and time and escalate.'
        ],
        owner: 'Moderator → Developer'
      },

      java_session: {
        result: 'Minecraft account authentication error',
        steps: [
          'Close Minecraft and the launcher fully.',
          'Sign in through the official launcher using the correct Minecraft account.',
          'Retry once; if multiple servers fail, direct the player to official Minecraft account support.',
          'If ERRSA alone fails, record the error and time for technical review.'
        ],
        owner: 'Moderator → Developer'
      },

      java_kick: {
        q: 'When does the player get kicked?',
        a: [
          ['Immediately during login', 'java_kick_early'],
          ['After joining a world or switching servers', 'java_kick_late']
        ]
      },

      java_kick_early: {
        result: 'Kicked during login',
        steps: [
          'Record the full kick message, client version, and time.',
          'If it refers to registration, open Section B or C.',
          'Otherwise request live-console review if repeatable.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      java_kick_late: {
        result: 'Kicked after joining',
        steps: [
          'Record the affected server/world, last action, and kick message.',
          'Ask an Admin to check the live console during a repeatable attempt.',
          'Escalate persistent issues with timestamp.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      java_host: {
        result: 'Unknown host or DNS error',
        steps: [
          'Compare the saved entry with the official Java address.',
          'Correct typos and remove old server entries.',
          'If still failing while others connect using that address, record the full error for escalation.'
        ],
        owner: 'Moderator → Developer'
      },

      java_diagnostics: {
        result: 'Collect Java connection details',
        steps: [
          'Record exact error/screenshot, client version, and time.',
          'Ask whether failure occurs before login, during login, or after joining.',
          'Check whether anyone else is affected and escalate unresolved issues.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      // A2 — BEDROCK EDITION

      bedrock_connect: {
        q: 'What happens when the Bedrock player connects?',
        a: [
          ['Outdated server / incompatible version', 'bedrock_version'],
          ['Connection timed out', 'bedrock_timeout'],
          ['Other error', 'bedrock_other']
        ]
      },

      bedrock_version: {
        q: 'What Bedrock version is the player using?',
        a: [
          ['Older than currently supported', 'bedrock_old'],
          ['A supported version', 'bedrock_supported'],
          ['Newer than currently supported', 'bedrock_new'],
          ["Player doesn't know", 'bedrock_unknown']
        ]
      },

      bedrock_old: {
        result: 'Update the Bedrock client',
        steps: [
          'Confirm the versions supported by the running Geyser build.',
          'Update Bedrock through the official platform app store/launcher.',
          'Reconnect once after updating.'
        ],
        owner: 'Moderator'
      },

      bedrock_supported: {
        result: 'Investigate connection despite supported version',
        steps: [
          'Record the full error and Bedrock version.',
          'Confirm the official ERRSA Bedrock address and port.',
          'Escalate persistent errors for Geyser/Floodgate live-console or historical-log review.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      bedrock_new: {
        result: 'Review Geyser compatibility',
        steps: [
          'Check #staff-logs for outdated Geyser or Floodgate notifications.',
          'A Developer should confirm the running proxy build supports the newer Bedrock version.',
          'If an update is downloaded but not loaded, notify Developers to follow the approved restart/update procedure.'
        ],
        owner: 'Moderator → Developer / Server Lead'
      },

      bedrock_unknown: {
        result: 'Find Bedrock client version',
        steps: [
          'Open Minecraft Bedrock and locate the version displayed on its main menu or settings.',
          'Compare against versions currently supported by Geyser.',
          'Return to the version question.'
        ],
        owner: 'Moderator'
      },

      // A2B — BEDROCK TIMEOUT

      bedrock_timeout: {
        q: 'Who else can connect?',
        a: [
          ['Other Bedrock players can connect', 'bedrock_other_servers'],
          ['Several Bedrock players cannot connect', 'bedrock_multi'],
          ['Neither Java nor Bedrock can connect', 'proxy_outage'],
          ['Not sure', 'bedrock_scope_unknown']
        ]
      },

      bedrock_other_servers: {
        q: 'Can the player connect to other Bedrock servers?',
        a: [
          ['Yes', 'bedrock_when'],
          ['No', 'bedrock_client'],
          ['Have not tested', 'bedrock_test']
        ]
      },

      bedrock_when: {
        q: 'When does their connection fail?',
        a: [
          ['Before joining', 'bedrock_before'],
          ['During login/loading', 'bedrock_login'],
          ['After joining or transferring', 'bedrock_after']
        ]
      },

      bedrock_before: {
        result: 'Bedrock connection fails before joining',
        steps: [
          'Confirm official address and port.',
          'Check Geyser compatibility with the client version.',
          'Restart Minecraft and try once.',
          'Escalate persistent ERRSA-only failures with exact error and timestamp.'
        ],
        owner: 'Moderator → Developer'
      },

      bedrock_login: {
        result: 'Bedrock login failure',
        steps: [
          'Record exact error, version, and time.',
          'Check whether registration is involved; if so, use Section B or C.',
          'Escalate repeatable issues for Geyser/Floodgate and proxy log review.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      bedrock_after: {
        result: 'Bedrock disconnect after joining',
        steps: [
          'Record affected server/world and last action.',
          'Check whether Java players can access the same backend.',
          'Have an Admin watch the live console during a repeatable attempt, then escalate.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      bedrock_client: {
        result: 'Possible Bedrock client / campus-network issue',
        steps: [
          'Confirm internet connectivity and restart Minecraft.',
          'Check the client is up to date.',
          'Check device or platform multiplayer restrictions.',
          'If multiple multiplayer servers fail, suggest official Minecraft or campus IT support as appropriate.'
        ],
        owner: 'Moderator'
      },

      bedrock_test: {
        result: 'Test another trusted Bedrock server',
        steps: [
          'Ask the player to try another trusted multiplayer server.',
          'If it works, return and choose ERRSA-only failure.',
          'If it also fails, use client/network troubleshooting.'
        ],
        owner: 'Moderator'
      },

      bedrock_multi: {
        result: 'Possible Bedrock proxy compatibility issue',
        steps: [
          'Check whether Java users can connect.',
          'Check #staff-logs for Geyser/Floodgate compatibility notifications.',
          'Ask an Admin to inspect live console errors; Developers should review plugin versions, loaded updates, and historical logs.'
        ],
        owner: 'Moderator → Admin → Developer / Server Lead'
      },

      bedrock_scope_unknown: {
        result: 'Determine affected editions',
        steps: [
          'Ask another Bedrock player and a Java player to test.',
          'Check staff reports and record times.',
          'Return to the scope question when known.'
        ],
        owner: 'Moderator'
      },

      // A2C — OTHER BEDROCK ERRORS

      bedrock_other: {
        q: 'What other Bedrock connection error appears?',
        a: [
          ['Unable to connect to world', 'bedrock_world'],
          ['Microsoft account / authentication error', 'bedrock_auth'],
          ['Disconnected or kicked', 'bedrock_kick'],
          ['Incorrect server address or port', 'bedrock_address'],
          ['Platform multiplayer restrictions', 'bedrock_restrict'],
          ['Different or unknown error', 'bedrock_diag']
        ]
      },

      bedrock_world: {
        q: 'Can other Bedrock players connect?',
        a: [
          ['Yes, only this player is affected', 'bedrock_world_single'],
          ['No, several are affected', 'bedrock_multi']
        ]
      },

      bedrock_world_single: {
        result: 'Investigate an individual Bedrock connection failure',
        steps: [
          'Check client compatibility, official address, and port.',
          'Restart Minecraft and reconnect once.',
          'Record full error and time if unresolved for Developer review.'
        ],
        owner: 'Moderator → Developer'
      },

      bedrock_auth: {
        result: 'Microsoft / Bedrock authentication issue',
        steps: [
          'Confirm the player is signed into their Microsoft account.',
          'Restart Minecraft; sign back in through the normal device interface if necessary.',
          'Check whether other Bedrock servers work.',
          'If only ERRSA fails, escalate for Floodgate/Geyser review.'
        ],
        owner: 'Moderator → Developer'
      },

      bedrock_kick: {
        q: 'When does the player get kicked?',
        a: [
          ['Immediately during login', 'bedrock_kick_login'],
          ['After joining or switching servers', 'bedrock_kick_world']
        ]
      },

      bedrock_kick_login: {
        result: 'Kicked during Bedrock login',
        steps: [
          'Record full kick message, version, and time.',
          'If registration-related, open Section B or C.',
          'If repeatable, ask an Admin to check live console messages and escalate.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      bedrock_kick_world: {
        result: 'Kicked after joining Bedrock',
        steps: [
          'Record the server/world and last action.',
          'Check whether Java players experience the same issue.',
          'Ask an Admin to review current console errors and escalate repeatable failures.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      bedrock_address: {
        result: 'Check Bedrock server entry',
        steps: [
          'Compare address and port against official ERRSA Bedrock instructions.',
          'Correct typos or obsolete saved entries and reconnect once.',
          'Escalate if the correct entry still fails.'
        ],
        owner: 'Moderator → Developer'
      },

      bedrock_restrict: {
        result: 'Investigate platform multiplayer restrictions',
        steps: [
          'Ask whether the player can join other Bedrock servers.',
          'Have the player check Microsoft/Xbox privacy and multiplayer permissions.',
          'For consoles, verify the documented joining method is supported.',
          'Do not request account credentials; direct unresolved account restrictions to platform support.'
        ],
        owner: 'Moderator'
      },

      bedrock_diag: {
        result: 'Collect Bedrock connection details',
        steps: [
          'Record the error, version, device/platform, and time.',
          'Identify whether the problem occurs before login, during login, or after joining.',
          'Check whether other Bedrock players are affected; escalate if unresolved.'
        ],
        owner: 'Moderator → Developer'
      },

      // ====================================================
      // SECTION B — RULES AND EMAIL REGISTRATION
      // ====================================================

      b_start: {
        q: 'Where is the player stuck during registration?',
        a: [
          ['Have not accepted server rules', 'b_rules'],
          ['Cannot submit ERAU email', 'b_email'],
          ['Submitted email but received nothing', 'c_start'],
          ['Disconnected during registration', 'b_disconnect']
        ]
      },

      b_rules: {
        q: 'What happens when the player tries to accept the rules?',
        a: [
          ['Haven’t used Agree or /agree', 'b_rules_not'],
          ['Agree or /agree does not respond', 'b_rules_fail'],
          ['Accepted, but did not advance', 'b_rules_noadvance']
        ]
      },

      b_rules_not: {
        result: 'Accept the server rules',
        steps: [
          'Ask the player to read the displayed rules.',
          'Have them select Agree or use /agree.',
          'Confirm they advance to university email entry; if not, follow the interaction-failure path.'
        ],
        owner: 'Moderator'
      },

      b_rules_fail: {
        result: 'Rules interaction is unresponsive',
        steps: [
          'Record whether they used Agree or /agree and the exact error.',
          'Confirm they remain in initialization.',
          'Escalate persistent failures for PlayerInitialization investigation.'
        ],
        owner: 'Moderator → Developer'
      },

      b_rules_noadvance: {
        result: 'Rules accepted but no progress',
        steps: [
          'Ask whether the player saw confirmation.',
          'Determine whether the email prompt appeared.',
          'Escalate if the registration stage never changes; include username and time.'
        ],
        owner: 'Moderator → Developer'
      },

      b_email: {
        q: 'What happens when they enter their ERAU email?',
        a: [
          ['Email rejected as invalid', 'b_invalid'],
          ['Already registered', 'b_duplicate'],
          ['No response after submission', 'c_start'],
          ['Not sure which address to use', 'b_which']
        ]
      },

      b_invalid: {
        result: 'Correct university email',
        steps: [
          'The plugin accepts @erau.edu or @my.erau.edu.',
          'Ask the player to check spelling and extra spaces privately.',
          'Have them retry through the normal prompt; escalate if a valid address is rejected.'
        ],
        owner: 'Moderator → Developer'
      },

      b_duplicate: {
        result: 'Existing email registration',
        steps: [
          'Explain ERRSA normally permits one Minecraft account per player.',
          'Collect previous/current Minecraft usernames through an approved staff channel.',
          'Refer changes or conflicts to the Server Lead.'
        ],
        owner: 'Moderator → Server Lead'
      },

      b_which: {
        result: 'Use an eligible ERAU email',
        steps: [
          'Explain that registration requires the player’s own eligible university account.',
          'The plugin accepts @erau.edu and @my.erau.edu addresses.',
          'Refer unusual eligibility cases to the Server Lead.'
        ],
        owner: 'Moderator → Server Lead'
      },

      b_disconnect: {
        result: 'Registration interrupted by disconnection',
        steps: [
          'Ask when the player disconnected.',
          'PlayerInitialization stops polling when the player leaves; depending on state, a pending registration may be marked DENIED.',
          'Have the player reconnect and follow the normal registration prompts again.',
          'If it does not resume or fails repeatedly, collect the error and time and escalate for SQL/plugin review.'
        ],
        owner: 'Moderator → Developer'
      },

      // ====================================================
      // SECTION C — EMAIL VERIFICATION
      // ====================================================

      c_start: {
        q: 'What happened after the player submitted their ERAU email?',
        a: [
          ['No verification email arrived', 'c_noemail'],
          ['Email arrived; approval is pending', 'c_pending'],
          ['Denied, invalid, or timed out', 'c_failure'],
          ['Approval succeeded but player is stuck', 'd_start']
        ]
      },

      c_noemail: {
        q: 'Did an error appear in Minecraft chat?',
        a: [
          ['Yes', 'c_error'],
          ['No', 'c_stayed']
        ]
      },

      c_error: {
        result: 'Investigate chat error',
        steps: [
          'Record the exact error and submission time.',
          'For invalid/duplicate email, follow Section B.',
          'Escalate unexplained errors with the username and time.'
        ],
        owner: 'Moderator → Developer'
      },

      c_stayed: {
        q: 'Did the player remain connected after submitting?',
        a: [
          ['Yes', 'c_inbox'],
          ['No, disconnected', 'b_disconnect'],
          ['Not sure', 'c_uncertain']
        ]
      },

      c_uncertain: {
        result: 'Determine whether registration was interrupted',
        steps: [
          'Ask whether the game returned to the server list or showed a disconnect.',
          'If disconnected, have them reconnect and retry registration.',
          'If continuously connected, proceed to the missing-email workflow check.'
        ],
        owner: 'Moderator'
      },

      c_inbox: {
        q: 'Have they checked their university inbox and spam/junk folder?',
        a: [
          ['Yes, still no email', 'c_workflow'],
          ['Not yet', 'c_checkinbox']
        ]
      },

      c_checkinbox: {
        result: 'Check email delivery',
        steps: [
          'Ask the player to check ERAU inbox and spam/junk.',
          'Confirm they submitted the correct address privately.',
          'Allow the workflow time to run; if none arrives, follow the Developer workflow-review path.'
        ],
        owner: 'Moderator'
      },

      c_workflow: {
        result: 'Review Power Automate and MySQL',
        steps: [
          'Moderator: record username, submission time, and any visible error.',
          'Developer: find the corresponding MySQL registration record and Power Automate run.',
          'Developer: check Microsoft 365 profile retrieval, validation, approval outcome, and any WAITING1/WAITING2 intermediate state.',
          'Developer: compare workflow result with plugin-facing PENDING/APPROVED/DENIED/TIMEOUT/INVALID status.',
          'Escalate repeated mismatches to the Server Lead; do not change records without authorization.'
        ],
        owner: 'Moderator (details) → Developer (MySQL/Power Automate) → Server Lead'
      },

      c_pending: {
        q: 'Is the approval still within the configured verification window?',
        a: [
          ['Yes', 'c_wait'],
          ['No, the window passed', 'c_pendingreview'],
          ['Not sure', 'c_pendingreview']
        ]
      },

      c_wait: {
        result: 'Verification still awaiting approval',
        steps: [
          'Have the player remain connected while registration is still processing.',
          'Do not submit repeatedly or trigger duplicate requests.',
          'If it exceeds the configured window, escalate for workflow review.'
        ],
        owner: 'Moderator'
      },

      c_pendingreview: {
        result: 'Review pending approval',
        steps: [
          'Moderator: record submission time and whether the player disconnected.',
          'Developer: review SQL status and corresponding Power Automate run to see whether approval is still waiting, failed, or timed out.',
          'Refer unresolved workflow/database mismatches to the Server Lead.'
        ],
        owner: 'Moderator → Developer / Server Lead'
      },

      c_failure: {
        q: 'Which verification result appeared?',
        a: [
          ['Denied', 'c_denied'],
          ['Invalid', 'c_invalid'],
          ['Timed out', 'c_timeout'],
          ['Different or unclear error', 'c_unknown']
        ]
      },

      c_denied: {
        result: 'Review denied verification',
        steps: [
          'Record the exact rejection and time.',
          'A disconnect during PENDING registration may cause the plugin to mark it DENIED; do not assume the reason without review.',
          'Have the player reconnect and retry the normal process if appropriate.',
          'If repeated, Developers compare MySQL state and Power Automate approval; Server Lead handles eligibility decisions.'
        ],
        owner: 'Moderator → Developer / Server Lead'
      },

      c_invalid: {
        result: 'Investigate invalid verification',
        steps: [
          'Check email spelling and accepted ERAU domain with the player.',
          'If correct, Developers check Microsoft 365 profile retrieval and invalid-email logic.',
          'Developers compare the flow result with SQL status.'
        ],
        owner: 'Moderator → Developer'
      },

      c_timeout: {
        result: 'Verification timed out',
        steps: [
          'Record the submission time and timeout message.',
          'Ask whether the player disconnected; have them reconnect and retry normally.',
          'If repeated, Developers review approval duration, SQL registration status, and flow history.'
        ],
        owner: 'Moderator → Developer'
      },

      c_unknown: {
        result: 'Collect verification diagnostics',
        steps: [
          'Record exact error, time, and last successful stage.',
          'Ask whether a disconnect occurred.',
          'Escalate unexplained failures with username and details.'
        ],
        owner: 'Moderator → Developer'
      },

      // ====================================================
      // SECTION D — POST-APPROVAL ACCESS
      // ====================================================

      d_start: {
        q: 'What happens after the player completes verification?',
        a: [
          ['Still stuck in initialization', 'd_stuck'],
          ['Cannot access Survival or another server', 'd_server'],
          ['Can play, but commands/features are restricted', 'd_permissions'],
          ['Everything works normally', 'd_done']
        ]
      },

      d_stuck: {
        q: 'Was there a clear verification success message?',
        a: [
          ['Yes', 'd_reconnected'],
          ['No', 'd_unconfirmed'],
          ['Not sure', 'd_unconfirmed']
        ]
      },

      d_unconfirmed: {
        result: 'Verify that approval actually finished',
        steps: [
          'Ask what the last success/error message said and whether the player stayed connected.',
          'If approval cannot be confirmed, go to Section C rather than assuming post-approval failure.'
        ],
        owner: 'Moderator'
      },

      d_reconnected: {
        q: 'Did the player reconnect after approval?',
        a: [
          ['Yes, still stuck', 'd_stuck_scope'],
          ['No', 'd_retry']
        ]
      },

      d_retry: {
        result: 'Reconnect after completed verification',
        steps: [
          'Confirm approval is fully finished.',
          'Have the player disconnect and reconnect once.',
          'If still stuck, return and select that they already reconnected.'
        ],
        owner: 'Moderator'
      },

      d_stuck_scope: {
        q: 'Are other verified players also stuck?',
        a: [
          ['Only this player', 'd_stuck_single'],
          ['Several players', 'd_stuck_multi']
        ]
      },

      d_stuck_single: {
        result: 'Verified player remains in initialization',
        steps: [
          'Record username, edition, and approval time.',
          'Admin: inspect the live console during one controlled reconnect.',
          'Developer: compare SQL approval with initialization state and LuckPerms permissions; do not bypass the registration process.'
        ],
        owner: 'Moderator → Admin (live console) → Developer'
      },

      d_stuck_multi: {
        result: 'Possible initialization system failure',
        steps: [
          'Identify affected users, editions, and start time.',
          'Admin: inspect current console output.',
          'Developer: review plugin behavior, database connectivity, workflow, and historical logs.'
        ],
        owner: 'Admin → Developer / Server Lead'
      },

      d_server: {
        q: 'What happens when accessing another server?',
        a: [
          ['Server unavailable / connection fails', 'd_backend'],
          ['Access or permission denied', 'd_server_denied'],
          ['Returned to previous server', 'd_server_return'],
          ['One specific world cannot be accessed', 'd_world_denied']
        ]
      },

      d_backend: {
        result: 'Investigate backend availability',
        steps: [
          'Record affected server and exact error.',
          'Check whether others can enter that backend.',
          'Admin: inspect live console; Developer: historical logs, proxy/backend status, and configuration.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      d_server_denied: {
        result: 'Investigate server access denial',
        steps: [
          'Record exact rejection and server; confirm completed registration.',
          'Check whether EventBridge intentionally makes the server closed, private, or access-only.',
          'Admin: check current console if an error is produced; Developer: investigate unexpected EventBridge or permissions behavior.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      d_server_return: {
        result: 'Player returned after server transfer',
        steps: [
          'Record source/destination servers and exact error/time.',
          'Ask whether others have the same issue.',
          'Admin: inspect current console during one attempt; Developer: review routing, backend status, and EventBridge.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      d_world_denied: {
        result: 'Specific world inaccessible',
        steps: [
          'Record server/world and access message.',
          'Check whether EventBridge intentionally restricts that world.',
          'Escalate unexpected world restrictions for Developer permission/context review.'
        ],
        owner: 'Moderator → Developer'
      },

      d_permissions: {
        q: 'What type of access is restricted?',
        a: [
          ['Command says no permission', 'd_command'],
          ['GUI or feature unavailable', 'd_feature'],
          ['Inventory/rank/player data incorrect', 'd_data'],
          ['Different access in different worlds', 'd_context']
        ]
      },

      d_command: {
        result: 'Use Commands & Permissions guide',
        steps: [
          'Record exact command, error, and world/server.',
          'Check whether command is intended for regular players.',
          'Open the separate Commands & Permissions troubleshooting guide; Developers inspect LuckPerms assignments/contexts if needed.'
        ],
        owner: 'Moderator → Developer'
      },

      d_feature: {
        result: 'Gameplay feature unavailable',
        steps: [
          'Record feature, exact action, server/world, and whether others can use it.',
          'Admin: inspect live console if the action generates an error.',
          'Developer: investigate repeatable plugin failures.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      d_data: {
        result: 'Player data or inventory incorrect',
        steps: [
          'Record missing/incorrect data, last known good time, and world/server.',
          'Collect evidence without replacing items or editing player data.',
          'Escalate for authorized technical investigation and Server Lead approval of corrections.'
        ],
        owner: 'Moderator → Developer / Server Lead'
      },

      d_context: {
        result: 'World-specific access mismatch',
        steps: [
          'Record where the action works and fails, plus exact error.',
          'Admin: check any relevant live-console messages.',
          'Developer: review LuckPerms contexts and plugin/world configuration; see Commands & Permissions guide.'
        ],
        owner: 'Moderator → Admin → Developer'
      },

      d_done: {
        result: 'Player access appears normal',
        steps: [
          'Confirm the player can reach expected gameplay areas and use normal commands/features.',
          'Close the support request.'
        ],
        owner: 'Moderator'
      },

      account_swap: {
        result: 'Review Minecraft account swap',
        steps: [
          'ERRSA normally allows one Minecraft account per player; Java/Bedrock migrations require a one-time approved swap.',
          'Collect previous and new usernames through an approved staff channel.',
          'Refer approval and any data transfer to the Server Lead and authorized technical staff.'
        ],
        owner: 'Moderator → Server Lead'
      }
    },

    // ====================================================
    // COMMON ISSUES
    // ====================================================

    common: {
      start: {
        q: 'What kind of problem does the player have?',
        a: [
          ['Cannot connect or keeps disconnecting', 'connection'],
          ['Lag, freezing, or low performance', 'performance'],
          ['Cannot use a gameplay feature', 'feature'],
          ['Something else', 'other']
        ]
      },

      connection: {
        q: 'What exactly happens?',
        a: [
          ['Connection fails before joining', 'connectfail'],
          ['Player joins but disconnects later', 'disconnect'],
          ['They are blocked during first-time verification', 'regredirect']
        ]
      },

      performance: {
        q: 'Who is affected?',
        a: [
          ['Only this player', 'clientlag'],
          ['Several players', 'serverlag'],
          ['Not sure', 'lagunknown']
        ]
      },

      feature: {
        q: 'Which kind of feature?',
        a: [
          ['Command says no permission', 'permissionredirect'],
          ['Shop, guild, quest, or another feature does not work', 'featurefail'],
          ['Missing inventory or items', 'items']
        ]
      },

      connectfail: {
        result: 'Connection error before joining',
        steps: [
          'Ask for the exact error and whether the player uses Java or Bedrock.',
          'Have them compare their server address and client version with the official joining instructions.',
          'If it persists, report the error, time and edition to a Developer or Server Lead.'
        ],
        owner: 'Moderator gathers details; Developer / Server Lead investigates proxy or server issues.'
      },

      disconnect: {
        result: 'Player disconnects after joining',
        steps: [
          'Note the exact kick message and when the disconnect occurs.',
          'Ask whether they can reconnect without repeating attempts excessively.',
          'If it continues, escalate with timestamps and which server they were on.'
        ],
        owner: 'Developer / Server Lead.'
      },

      regredirect: {
        result: 'Registration-related access',
        steps: [
          'Open the Player registration & verification guide from the Troubleshooting homepage.',
          'Choose the option matching the exact error message.',
          'Do not bypass verification or whitelist the account manually.'
        ],
        owner: 'Use the registration guide; escalate to Developer / Server Lead if unresolved.'
      },

      clientlag: {
        result: 'Possible player-side performance issue',
        steps: [
          'Ask whether other games or servers work normally, without requesting access to their computer.',
          'Suggest checking their own connection and lowering in-game video settings.',
          'If ERRSA alone remains affected, report their client edition/version and what they were doing.'
        ],
        owner: 'First-line staff; Developer if a server-specific issue is suspected.'
      },

      serverlag: {
        result: 'Possible wider server performance issue',
        steps: [
          'Record which world/server is affected and approximately when it began.',
          'Ask another staff member whether they see the same problem.',
          'Notify the Server Lead; do not restart servers or remove builds without approval.'
        ],
        owner: 'Developer / Server Lead.'
      },

      lagunknown: {
        result: 'Determine whether the problem is widespread',
        steps: [
          'Ask the player for the world, time and what was happening.',
          'Check whether another staff member or player reports the same symptoms.',
          'Select the appropriate performance route or escalate with these observations.'
        ],
        owner: 'First-line staff collects reports.'
      },

      permissionredirect: {
        result: 'Likely command or permission issue',
        steps: [
          'Open Commands & permissions from the Troubleshooting homepage.',
          'Capture the full command and error before making changes.'
        ],
        owner: 'Use the permissions guide.'
      },

      featurefail: {
        result: 'Feature-specific failure',
        steps: [
          'Record the feature, exact action, world/server and any error.',
          'Check the relevant plugin documentation before changing anything.',
          'Escalate reproducible failures to a Developer or Server Lead.'
        ],
        owner: 'Developer / Server Lead.'
      },

      items: {
        result: 'Missing items or inventory',
        steps: [
          'Record the player, world/server, approximate time and last action before the items went missing.',
          'Do not replace items or edit inventory before reviewing evidence and policy.',
          'Refer to authorized staff for logs and investigation.'
        ],
        owner: 'Admin / Developer / Server Lead as permitted.'
      },

      other: {
        result: 'Issue not yet classified',
        steps: [
          'Record what the player expected and what happened instead.',
          'Ask for the exact message, world/server, edition and approximate time.',
          'Send the details to the appropriate staff member without guessing at a fix.'
        ],
        owner: 'First-line staff triages; technical staff investigate.'
      }
    },

    // ====================================================
    // COMMANDS & PERMISSIONS
    // ====================================================

    permissions: {
      start: {
        q: 'What is failing?',
        a: [
          ['A command says no permission', 'command'],
          ['A player can do something they should not', 'excess'],
          ['A command is unknown or missing', 'unknown'],
          ['Access works in one world/server but not another', 'context']
        ]
      },

      command: {
        q: 'Who is getting the error?',
        a: [
          ['Regular player', 'playerdenied'],
          ['Staff member', 'staffdenied'],
          ['Not sure', 'collect']
        ]
      },

      playerdenied: {
        result: 'Player command denied',
        steps: [
          'Record the exact command, error and server/world.',
          'Confirm from the documented player features whether the command is intended for regular players.',
          'If it should be allowed, escalate with expected role; do not grant a broad permission node.'
        ],
        owner: 'Authorized Admin / Developer / Server Lead.'
      },

      staffdenied: {
        result: 'Staff command denied',
        steps: [
          'Record command, role, server/world and exact error.',
          'Compare with the staff role permissions documentation.',
          'If the role should have access, ask an authorized staff member to check LuckPerms context and assignments.'
        ],
        owner: 'Authorized Admin / Developer / Server Lead.'
      },

      excess: {
        result: 'Possible excessive access',
        steps: [
          'Identify the exact action, player, world and approximate time.',
          'Avoid testing dangerous actions on the live server.',
          'Immediately report the suspected access gap to a Server Lead; preserve any relevant evidence.'
        ],
        owner: 'Server Lead / authorized Developer.'
      },

      unknown: {
        result: 'Unknown command or unavailable feature',
        steps: [
          'Capture the exact command spelling and where it was entered.',
          'Check whether that command exists on the current backend server and is documented.',
          'Escalate if an expected command is missing; an unknown command is not automatically a permissions issue.'
        ],
        owner: 'Developer / Server Lead if unexpected.'
      },

      context: {
        result: 'World or server-specific access',
        steps: [
          'Record both the working and failing worlds/servers.',
          'Note the username, staff role, exact command/action and errors.',
          'Refer to authorized staff to inspect permission contexts and plugin configuration; do not copy permissions blindly.'
        ],
        owner: 'Authorized Admin / Developer / Server Lead.'
      },

      collect: {
        result: 'Collect enough detail to review access',
        steps: [
          'Ask for username, staff role (if any), command/action, exact error, world/server and timestamp.',
          'Look up the expected access level in the staff documentation.',
          'Refer the mismatch to an authorized staff member.'
        ],
        owner: 'Admin / Developer / Server Lead.'
      }
    },

    // ====================================================
    // PLUGINS & INTEGRATIONS
    // ====================================================

    plugins: {
      start: {
        q: 'What kind of technical problem is happening?',
        a: [
          ['A plugin command or GUI fails', 'feature'],
          ['A feature stopped working after a change/restart', 'change'],
          ['Discord, email, database, or another integration fails', 'integration'],
          ['Server console shows an error or crash', 'console'],
          ['Several players report an unexplained issue', 'multi']
        ]
      },

      feature: {
        result: 'Plugin feature failure',
        steps: [
          'Record the plugin/feature (if known), exact steps, world/server and expected versus actual result.',
          'Check for related reports and the plugin documentation.',
          'If authorized, provide relevant redacted logs to the Developer or Server Lead; do not trial random configuration changes.'
        ],
        owner: 'Developer / Server Lead.'
      },

      change: {
        result: 'Possible regression after a change',
        steps: [
          'Record the last known working time and the change/restart time, if known.',
          'Identify the affected worlds/servers and reproduce safely without altering data.',
          'Escalate with logs and the change history; any rollback requires Server Lead approval.'
        ],
        owner: 'Developer / Server Lead.'
      },

      integration: {
        q: 'Which service appears affected?',
        a: [
          ['Discord bot or commands', 'bot'],
          ['Email/verification/Power Automate', 'automation'],
          ['Website, database or another service', 'external']
        ]
      },

      bot: {
        result: 'Discord bot issue',
        steps: [
          'Record the slash command, time, response/error and whether it affects multiple users.',
          'Check existing incident reports before retrying sensitive actions.',
          'Ask an authorized Developer or Server Lead to review bot/hosting logs without exposing credentials.'
        ],
        owner: 'Developer / Server Lead.'
      },

      automation: {
        result: 'Automation or verification integration issue',
        steps: [
          'Record the workflow step, approximate time and visible failure (without verification secrets).',
          'For player registration, use the dedicated Player registration guide.',
          'Escalate for authorized workflow/history review; do not repeatedly trigger player initialization.'
        ],
        owner: 'Developer / Server Lead.'
      },

      external: {
        result: 'External service / database issue',
        steps: [
          'Record the affected service, exact error, timestamps and scope.',
          'Check existing reports or service status through approved access.',
          'Escalate; do not change database records, credentials or live configuration without approval.'
        ],
        owner: 'Developer / Server Lead.'
      },

      console: {
        result: 'Console error or crash',
        steps: [
          'Capture the exact message, time and affected server; redact tokens, IPs and private data.',
          'Check whether the issue is continuing and whether players are affected.',
          'Notify a Server Lead and share logs in the approved staff-restricted location; do not restart repeatedly.'
        ],
        owner: 'Developer / Server Lead.'
      },

      multi: {
        result: 'Possible widespread issue',
        steps: [
          'List affected players and which servers/worlds are involved.',
          'Record first reported time and a reproducible example.',
          'Notify Developer / Server Lead and avoid unapproved server restarts or configuration changes.'
        ],
        owner: 'Developer / Server Lead.'
      }
    }
  };

  // ======================================================
  // DECISION TREE RENDERER
  // ======================================================

  function init(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = '1';

    const content = root.querySelector('.trouble-wizard__content');
    const progress = root.querySelector('.trouble-wizard__progress');
    const back = root.querySelector('.trouble-wizard__back');
    const restart = root.querySelector('.trouble-wizard__restart');

    const history = [];
    let current = 'start';
    const T = TREES[root.dataset.troubleshoot];

    if (!T) return;

    function el(tag, cls, value) {
      const x = document.createElement(tag);
      if (cls) x.className = cls;
      if (value) x.textContent = value;
      return x;
    }

    function render() {
      const node = T[current];
      if (!node) return;

      content.replaceChildren();

      progress.textContent = node.result
        ? 'Suggested next steps'
        : 'Question ' + (history.length + 1);

      back.disabled = !history.length;
      restart.disabled = !history.length;

      if (node.result) {
        const box = el('div', 'trouble-result');

        box.append(
          el('span', 'trouble-result__label', 'What this means'),
          el('h2', '', node.result)
        );

        const ol = el('ol');
        node.steps.forEach(step => {
          ol.append(el('li', '', step));
        });

        box.append(
          ol,
          el('div', 'trouble-result__owner', 'Who handles this: ' + node.owner)
        );

        const footer = el('p');
        const a = el('a', '', 'See escalation / handoff checklist ↓');
        a.href = '#when-to-escalate';

        footer.append(a);
        box.append(footer);
        content.append(box);

      } else {
        content.append(
          el('h2', '', node.q),
          el(
            'p',
            '',
            node.help || 'Choose the answer that best describes what the player reports.'
          )
        );

        const options = el('div', 'trouble-answers');

        node.a.forEach(([label, next]) => {
          const button = el('button', 'trouble-answer', label);
          button.type = 'button';

          button.addEventListener('click', () => {
            history.push(current);
            current = next;
            render();
          });

          options.append(button);
        });

        content.append(options);
      }
    }

    back.addEventListener('click', () => {
      if (history.length) {
        current = history.pop();
        render();
      }
    });

    restart.addEventListener('click', () => {
      history.length = 0;
      current = 'start';
      render();
    });

    render();
  }

  function scan() {
    document.querySelectorAll('[data-troubleshoot]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scan);
  } else {
    scan();
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(scan);
  }
})();
