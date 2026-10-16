/* Decision-tree renderer. Future guides can reuse this UI by adding a tree and data-troubleshoot ID. */
(() => {
  const TREES = {

registration: {
  start: {
    q: "Where is the player stuck?",
    a: [
      ["Cannot connect to ERRSA Minecraft", "edition"],
      ["Inside registration / cannot accept rules", "rules"],
      ["Accepted rules but no verification email", "email_missing"],
      ["Email submitted but verification is not progressing", "verify"],
      ["Verified but normal access is blocked", "access"],
      ["Changing Java / Bedrock accounts", "accounts"]
    ]
  },

  // A. CONNECTION TROUBLESHOOTING

  edition: {
    q: "What Minecraft edition are they using?",
    a: [
      ["Java Edition", "java_connect"],
      ["Bedrock Edition", "bedrock_connect"]
    ]
  },

  java_connect: {
    q: "What happens when they connect?",
    a: [
      ["Outdated or incompatible version", "java_version"],
      ["Connection timed out", "timeout_scope"],
      ["Other error", "diagnostics"]
    ]
  },

  bedrock_connect: {
    q: "What error appears?",
    a: [
      ["Outdated server / unable to connect", "bedrock_version"],
      ["Connection timed out", "timeout_scope"],
      ["Other error", "diagnostics"]
    ]
  },

  java_version: {
    result: "Check Java and ViaVersion compatibility",
    steps: [
      "Confirm the player's exact Java version. If older than 1.21.4, update to 1.21.4 or newer.",
      "For newer versions, check which versions the currently installed ViaVersion plugin on Velocity supports.",
      "Check #staff-logs for outdated ViaVersion notifications.",
      "If an update is necessary, notify a Developer or Server Lead to follow the approved update and restart procedure."
    ],
    owner: "Moderator checks compatibility; Developer / Server Lead handles updates."
  },

  bedrock_version: {
    result: "Check Geyser / Floodgate compatibility",
    steps: [
      "Record the player's exact Bedrock version and connection error.",
      "Compare the client version against the supported Geyser versions.",
      "Check #staff-logs for outdated Geyser or Floodgate notifications.",
      "Remember that an update may have downloaded but not yet loaded into the running proxy.",
      "If an update is needed, notify a Developer or Server Lead to follow the approved update and restart procedure."
    ],
    owner: "Moderator investigates; Developer / Server Lead handles proxy updates."
  },

  timeout_scope: {
    q: "Can other players connect?",
    a: [
      ["Yes, only this player is affected", "timeout_client"],
      ["No, several players cannot connect", "timeout_server"],
      ["Not sure", "timeout_unknown"]
    ]
  },

  timeout_client: {
    result: "Investigate player-specific timeout",
    steps: [
      "Record the exact error, timestamp, Minecraft edition and version.",
      "Confirm the player is using the official ERRSA server address.",
      "Have them attempt one reconnect and restart Minecraft.",
      "If the issue persists, have them check their own internet connection.",
      "If ERRSA alone remains inaccessible, escalate with the collected information."
    ],
    owner: "Moderator; Developer if unresolved."
  },

  timeout_server: {
    result: "Possible server-side outage",
    steps: [
      "Record the error, timestamp, and affected editions.",
      "Check whether staff have already reported an outage.",
      "Confirm the issue with another player or staff member.",
      "Escalate to a Developer or Server Lead. Do not perform an unauthorized restart."
    ],
    owner: "Developer / Server Lead."
  },

  timeout_unknown: {
    result: "Determine the scope of the timeout",
    steps: [
      "Ask another player or staff member to test connecting.",
      "Record the original player's error and time.",
      "Return to the previous question once the scope is known.",
      "Escalate if the scope cannot be determined."
    ],
    owner: "Moderator."
  },

  diagnostics: {
    result: "Collect connection diagnostics",
    steps: [
      "Record the exact error, Minecraft edition, client version, and timestamp.",
      "Verify the player followed the official joining instructions.",
      "Request a screenshot with private information hidden.",
      "Refer the issue to technical staff if unresolved."
    ],
    owner: "Moderator; Developer / Server Lead if unresolved."
  },

  // B. RULES AND EMAIL REGISTRATION

  rules: {
    q: "What happens at the server rules step?",
    a: [
      ["Player has not accepted the rules", "rules_notaccepted"],
      ["/agree or the Agree button does not work", "rules_fail"],
      ["Rules accepted; player must enter email", "email_entry"],
      ["Player disconnected during registration", "quit"]
    ]
  },

  rules_notaccepted: {
    result: "Complete server rules acceptance",
    steps: [
      "Direct the player to read the server rules.",
      "Have them select Agree or use /agree.",
      "Explain that accepting the rules is required to continue.",
      "If the interaction fails, follow the rules interaction failure route."
    ],
    owner: "Moderator."
  },

  rules_fail: {
    result: "Rules interaction is not advancing",
    steps: [
      "Ask what appears after the player selects Agree or runs /agree.",
      "Confirm they are still in the registration stage.",
      "Record the exact error, edition, username, and timestamp.",
      "Escalate without bypassing initialization permissions."
    ],
    owner: "Developer / Server Lead."
  },

  email_entry: {
    result: "Check ERAU email entry",
    steps: [
      "Confirm the player entered their university email into the registration prompt.",
      "The plugin accepts @erau.edu and @my.erau.edu addresses.",
      "Ask the player to check spelling privately. Do not collect their full email in public chat.",
      "If the email is already associated with an approved account, refer to the Server Lead.",
      "If the address was accepted but no email arrived, follow the missing-email route."
    ],
    owner: "Moderator; Server Lead for account conflicts."
  },

  email_missing: {
    q: "Did an error appear in Minecraft chat after email submission?",
    a: [
      ["Yes, there is a chat error", "chat_error"],
      ["No chat error appeared", "no_chat_error"],
      ["Player never submitted an email", "email_entry"]
    ]
  },

  // C. VERIFICATION TROUBLESHOOTING

  verify: {
    q: "What best describes the verification problem?",
    a: [
      ["A chat error appeared", "chat_error"],
      ["No error, but email or approval is missing", "no_chat_error"],
      ["Approval was denied or timed out", "approval_issue"],
      ["Player disconnected during verification", "quit"],
      ["Approved but still restricted", "access"]
    ]
  },

  chat_error: {
    q: "What does the chat error indicate?",
    a: [
      ["Invalid or unsupported email", "invalid_email"],
      ["Email already used or approved", "duplicate_email"],
      ["Verification denied or timed out", "approval_issue"],
      ["Different or unclear error", "chat_unknown"]
    ]
  },

  invalid_email: {
    result: "Correct the email address",
    steps: [
      "Have the player check the spelling of their email.",
      "Confirm the address ends in @erau.edu or @my.erau.edu.",
      "Have them retry through the normal registration prompt when available.",
      "If a valid address is rejected, escalate with the exact error and timestamp."
    ],
    owner: "Moderator; Developer if unresolved."
  },

  duplicate_email: {
    result: "Email already associated with an account",
    steps: [
      "Do not encourage registration of a second Minecraft account.",
      "Collect the original and current Minecraft usernames through an appropriate staff channel.",
      "Refer the situation to the Server Lead for account policy review.",
      "Do not manually edit registration records without authorization."
    ],
    owner: "Server Lead."
  },

  chat_unknown: {
    result: "Investigate the chat error",
    steps: [
      "Record the exact error and timestamp.",
      "Identify whether PlayerInitialization or another component generated the message.",
      "Do not automatically assume the problem is player-side.",
      "Escalate with the username, edition, and registration stage."
    ],
    owner: "Moderator; Developer / Server Lead."
  },

  no_chat_error: {
    q: "Did the player disconnect or time out after submitting their email?",
    a: [
      ["Yes, they disconnected or timed out", "quit"],
      ["No, they remained connected", "workflow_review"],
      ["Not sure", "connection_unclear"]
    ]
  },

  quit: {
    result: "Registration interrupted by disconnection",
    steps: [
      "Ask when the player disconnected and whether they have rejoined.",
      "PlayerInitialization stops its active approval polling when a player quits.",
      "If the SQL status was PENDING, missing, or empty, the quit handler attempts to change it to DENIED.",
      "Have the player rejoin and follow the normal registration prompt.",
      "If registration cannot restart normally, escalate with the exact error and timestamp."
    ],
    owner: "Moderator assists; Developer / Server Lead reviews registration state."
  },

  connection_unclear: {
    result: "Confirm whether registration was interrupted",
    steps: [
      "Ask whether Minecraft returned to the server list or displayed a disconnect message.",
      "Determine whether the player stayed connected after email submission.",
      "If disconnected, follow the interrupted-registration path.",
      "If continuously connected, follow the workflow-review path."
    ],
    owner: "Moderator."
  },

  workflow_review: {
    result: "Check email delivery and approval workflow",
    steps: [
      "Have the player check their ERAU inbox and spam/junk folder.",
      "Do not request passwords, approval links, or verification codes.",
      "Ask an authorized Developer or Server Lead to inspect the player's registration record in MySQL.",
      "Compare the registration status and submission time with the relevant Power Automate run.",
      "The item-created flow uses WAITING1; the item-modified flow uses WAITING2.",
      "Check whether Microsoft 365 profile retrieval succeeded and whether the invalid-email check was triggered.",
      "Determine whether the approval is still pending or reached APPROVED, DENIED, INVALID, or TIMEOUT.",
      "Investigate any mismatch between the database status, Power Automate result, and plugin polling state.",
      "Do not manually approve accounts or edit SQL records without authorization."
    ],
    owner: "Developer / Server Lead."
  },

  approval_issue: {
    result: "Review denial, invalid status, or timeout",
    steps: [
      "Record the exact visible result and timestamp.",
      "INVALID may indicate an email or Microsoft 365 profile validation failure.",
      "DENIED may indicate rejection or an interrupted registration path.",
      "TIMEOUT means the approval process did not finish within the configured time.",
      "Do not assume the exact cause from the status alone.",
      "Have authorized technical staff compare the MySQL record with the Power Automate run history."
    ],
    owner: "Developer / Server Lead."
  },

  // D. POST-APPROVAL ACCESS

  access: {
    q: "What is blocked after verification?",
    a: [
      ["Still in initialization area", "access_stuck"],
      ["Joined but normal features are restricted", "access_restricted"],
      ["Has not reconnected after approval", "access_retry"],
      ["Everything works normally", "done"]
    ]
  },

  access_stuck: {
    result: "Approved player still in registration",
    steps: [
      "Confirm the player received a successful approval indication.",
      "Have the player reconnect once after approval completes.",
      "If still blocked, compare the SQL APPROVED status with the plugin registration state.",
      "Review relevant LuckPerms status if necessary.",
      "Do not teleport the player around registration."
    ],
    owner: "Developer / Server Lead."
  },

  access_restricted: {
    result: "Review post-approval permissions",
    steps: [
      "Record the world/server, blocked command or feature, and exact error.",
      "Try one reconnect after approval.",
      "If restrictions persist, have authorized staff review LuckPerms permissions, tracks, and contexts.",
      "Do not grant broad permissions as a workaround."
    ],
    owner: "Authorized Admin / Developer / Server Lead."
  },

  access_retry: {
    result: "Confirm registration completion",
    steps: [
      "Have the player reconnect once after verification clearly finishes.",
      "Confirm they reach normal gameplay.",
      "Check that expected player commands and features work.",
      "If access remains blocked, select the appropriate post-approval issue."
    ],
    owner: "Moderator."
  },

  done: {
    result: "Registration complete",
    steps: [
      "Confirm normal gameplay and player permissions work.",
      "No technical changes are needed.",
      "Close the support request."
    ],
    owner: "Moderator."
  },

  accounts: {
    result: "Account changes require policy review",
    steps: [
      "ERRSA normally permits one Minecraft account per player.",
      "Java / Bedrock migration is a one-time approved swap rather than routine dual-account access.",
      "Collect the old and new usernames through the appropriate staff channel.",
      "Refer the request to the Server Lead before changing player or registration data."
    ],
    owner: "Server Lead and authorized technical staff."
  }
},

common: {
 start:{q:'What kind of problem does the player have?',a:[['Cannot connect or keeps disconnecting','connection'],['Lag, freezing, or low performance','performance'],['Cannot use a gameplay feature','feature'],['Something else','other']]},
 connection:{q:'What exactly happens?',a:[['Connection fails before joining','connectfail'],['Player joins but disconnects later','disconnect'],['They are blocked during first-time verification','regredirect']]},
 performance:{q:'Who is affected?',a:[['Only this player','clientlag'],['Several players','serverlag'],['Not sure','lagunknown']]},
 feature:{q:'Which kind of feature?',a:[['Command says no permission','permissionredirect'],['Shop, guild, quest, or another feature does not work','featurefail'],['Missing inventory or items','items']]},
 connectfail:{result:'Connection error before joining',steps:['Ask for the exact error and whether the player uses Java or Bedrock.','Have them compare their server address and client version with the official joining instructions.','If it persists, report the error, time and edition to a Developer or Server Lead.'],owner:'Moderator gathers details; Developer / Server Lead investigates proxy or server issues.'},
 disconnect:{result:'Player disconnects after joining',steps:['Note the exact kick message and when the disconnect occurs.','Ask whether they can reconnect without repeating attempts excessively.','If it continues, escalate with timestamps and which server they were on.'],owner:'Developer / Server Lead.'},
 regredirect:{result:'Registration-related access',steps:['Open the Player registration & verification guide from the Troubleshooting homepage.','Choose the option matching the exact error message.','Do not bypass verification or whitelist the account manually.'],owner:'Use the registration guide; escalate to Developer / Server Lead if unresolved.'},
 clientlag:{result:'Possible player-side performance issue',steps:['Ask whether other games or servers work normally, without requesting access to their computer.','Suggest checking their own connection and lowering in-game video settings.','If ERRSA alone remains affected, report their client edition/version and what they were doing.'],owner:'First-line staff; Developer if a server-specific issue is suspected.'},
 serverlag:{result:'Possible wider server performance issue',steps:['Record which world/server is affected and approximately when it began.','Ask another staff member whether they see the same problem.','Notify the Server Lead; do not restart servers or remove builds without approval.'],owner:'Developer / Server Lead.'},
 lagunknown:{result:'Determine whether the problem is widespread',steps:['Ask the player for the world, time and what was happening.','Check whether another staff member or player reports the same symptoms.','Select the appropriate performance route or escalate with these observations.'],owner:'First-line staff collects reports.'},
 permissionredirect:{result:'Likely command or permission issue',steps:['Open Commands & permissions from the Troubleshooting homepage.','Capture the full command and error before making changes.'],owner:'Use the permissions guide.'},
 featurefail:{result:'Feature-specific failure',steps:['Record the feature, exact action, world/server and any error.','Check the relevant plugin documentation before changing anything.','Escalate reproducible failures to a Developer or Server Lead.'],owner:'Developer / Server Lead.'},
 items:{result:'Missing items or inventory',steps:['Record the player, world/server, approximate time and last action before the items went missing.','Do not replace items or edit inventory before reviewing evidence and policy.','Refer to authorized staff for logs and investigation.'],owner:'Admin / Developer / Server Lead as permitted.'},
 other:{result:'Issue not yet classified',steps:['Record what the player expected and what happened instead.','Ask for the exact message, world/server, edition and approximate time.','Send the details to the appropriate staff member without guessing at a fix.'],owner:'First-line staff triages; technical staff investigate.'}
},
permissions: {
 start:{q:'What is failing?',a:[['A command says no permission','command'],['A player can do something they should not','excess'],['A command is unknown or missing','unknown'],['Access works in one world/server but not another','context']]},
 command:{q:'Who is getting the error?',a:[['Regular player','playerdenied'],['Staff member','staffdenied'],['Not sure','collect']]},
 playerdenied:{result:'Player command denied',steps:['Record the exact command, error and server/world.','Confirm from the documented player features whether the command is intended for regular players.','If it should be allowed, escalate with expected role; do not grant a broad permission node.'],owner:'Authorized Admin / Developer / Server Lead.'},
 staffdenied:{result:'Staff command denied',steps:['Record command, role, server/world and exact error.','Compare with the staff role permissions documentation.','If the role should have access, ask an authorized staff member to check LuckPerms context and assignments.'],owner:'Authorized Admin / Developer / Server Lead.'},
 excess:{result:'Possible excessive access',steps:['Identify the exact action, player, world and approximate time.','Avoid testing dangerous actions on the live server.','Immediately report the suspected access gap to a Server Lead; preserve any relevant evidence.'],owner:'Server Lead / authorized Developer.'},
 unknown:{result:'Unknown command or unavailable feature',steps:['Capture the exact command spelling and where it was entered.','Check whether that command exists on the current backend server and is documented.','Escalate if an expected command is missing; an unknown command is not automatically a permissions issue.'],owner:'Developer / Server Lead if unexpected.'},
 context:{result:'World or server-specific access',steps:['Record both the working and failing worlds/servers.','Note the username, staff role, exact command/action and errors.','Refer to authorized staff to inspect permission contexts and plugin configuration; do not copy permissions blindly.'],owner:'Authorized Admin / Developer / Server Lead.'},
 collect:{result:'Collect enough detail to review access',steps:['Ask for username, staff role (if any), command/action, exact error, world/server and timestamp.','Look up the expected access level in the staff documentation.','Refer the mismatch to an authorized staff member.'],owner:'Admin / Developer / Server Lead.'}
},
plugins: {
 start:{q:'What kind of technical problem is happening?',a:[['A plugin command or GUI fails','feature'],['A feature stopped working after a change/restart','change'],['Discord, email, database, or another integration fails','integration'],['Server console shows an error or crash','console'],['Several players report an unexplained issue','multi']]},
 feature:{result:'Plugin feature failure',steps:['Record the plugin/feature (if known), exact steps, world/server and expected versus actual result.','Check for related reports and the plugin documentation.','If authorized, provide relevant redacted logs to the Developer or Server Lead; do not trial random configuration changes.'],owner:'Developer / Server Lead.'},
 change:{result:'Possible regression after a change',steps:['Record the last known working time and the change/restart time, if known.','Identify the affected worlds/servers and reproduce safely without altering data.','Escalate with logs and the change history; any rollback requires Server Lead approval.'],owner:'Developer / Server Lead.'},
 integration:{q:'Which service appears affected?',a:[['Discord bot or commands','bot'],['Email/verification/Power Automate','automation'],['Website, database or another service','external']]},
 bot:{result:'Discord bot issue',steps:['Record the slash command, time, response/error and whether it affects multiple users.','Check existing incident reports before retrying sensitive actions.','Ask an authorized Developer or Server Lead to review bot/hosting logs without exposing credentials.'],owner:'Developer / Server Lead.'},
 automation:{result:'Automation or verification integration issue',steps:['Record the workflow step, approximate time and visible failure (without verification secrets).','For player registration, use the dedicated Player registration guide.','Escalate for authorized workflow/history review; do not repeatedly trigger player initialization.'],owner:'Developer / Server Lead.'},
 external:{result:'External service / database issue',steps:['Record the affected service, exact error, timestamps and scope.','Check existing reports or service status through approved access.','Escalate; do not change database records, credentials or live configuration without approval.'],owner:'Developer / Server Lead.'},
 console:{result:'Console error or crash',steps:['Capture the exact message, time and affected server; redact tokens, IPs and private data.','Check whether the issue is continuing and whether players are affected.','Notify a Server Lead and share logs in the approved staff-restricted location; do not restart repeatedly.'],owner:'Developer / Server Lead.'},
 multi:{result:'Possible widespread issue',steps:['List affected players and which servers/worlds are involved.','Record first reported time and a reproducible example.','Notify Developer / Server Lead and avoid unapproved server restarts or configuration changes.'],owner:'Developer / Server Lead.'}
}
};
  function init(root) {
    if (root.dataset.ready) return; root.dataset.ready='1';
    const content=root.querySelector('.trouble-wizard__content'), progress=root.querySelector('.trouble-wizard__progress'), back=root.querySelector('.trouble-wizard__back'), restart=root.querySelector('.trouble-wizard__restart');
    const history=[]; let current='start'; const T=TREES[root.dataset.troubleshoot]; if(!T)return;
    function el(tag,cls,value){const x=document.createElement(tag);if(cls)x.className=cls;if(value)x.textContent=value;return x;}
    function render(){const node=T[current];if(!node)return;content.replaceChildren();progress.textContent=node.result?'Suggested next steps':'Question '+(history.length+1);back.disabled=!history.length;restart.disabled=!history.length;
      if(node.result){const box=el('div','trouble-result');box.append(el('span','trouble-result__label','What this means'),el('h2','',node.result));const ol=el('ol');node.steps.forEach(step=>ol.append(el('li','',step)));box.append(ol,el('div','trouble-result__owner','Who handles this: '+node.owner));const footer=el('p');const a=el('a','','See escalation / handoff checklist ↓');a.href='#when-to-escalate';footer.append(a);box.append(footer);content.append(box);}else{content.append(el('h2','',node.q),el('p','',node.help||'Choose the answer that best describes what the player reports.'));const options=el('div','trouble-answers');node.a.forEach(([label,next])=>{const button=el('button','trouble-answer',label);button.type='button';button.addEventListener('click',()=>{history.push(current);current=next;render();});options.append(button);});content.append(options);}
    }
    back.addEventListener('click',()=>{if(history.length){current=history.pop();render();}});
    restart.addEventListener('click',()=>{history.length=0;current='start';render();});render();
  }
  function scan(){document.querySelectorAll('[data-troubleshoot]').forEach(init);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan);else scan();
  if(typeof document$!=='undefined')document$.subscribe(scan);
})();
