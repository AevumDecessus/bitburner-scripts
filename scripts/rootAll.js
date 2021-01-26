import { getFolder, getServerPrefix } from 'import_aevum.js';

export async function main(ns) {
  await ns.disableLog('ALL');
  var programs = ['BruteSSH.exe', 'FTPCrack.exe', 'relaySMTP.exe', 'HTTPWorm.exe', 'SQLInject.exe']
  var allServers = await ns.read('allServers.txt');
  allServers = allServers.split(';');
  var doLoop = true;
  while (doLoop) {
    var currentHackLevel = await ns.getHackingLevel();
    var currentOpenPortSoftware = 0;
    for (var i = 0; i < programs.length; i++) {
      if (await ns.fileExists(programs[i], 'home')) {
        ++currentOpenPortSoftware;
      }
    }
    for (var n = 0; n < allServers.length; n++) {
      //hostName, numPorts, hackingLevel, maxMoney, growthRate, minSecurity, RAM
      //    //0         1         2             3         4           5            6
      var server = allServers[n].split(',');
      if (server[2] <= currentHackLevel && server[1] <= currentOpenPortSoftware) {
        if (!await ns.hasRootAccess(server[0])) {
          for (var j = 0; j < programs.length; j++) {
            if (await ns.fileExists(programs[j], 'home')) {
              if (j === 0) { await ns.brutessh(server[0]); }
              if (j === 1) { await ns.ftpcrack(server[0]); }
              if (j === 2) { await ns.relaysmtp(server[0]); }
              if (j === 3) { await ns.httpworm(server[0]); }
              if (j === 4) { await ns.sqlinject(server[0]); }
            }
          }
          await ns.nuke(server[0]);
          ns.print(`Rooted server ${server[0]}`); 
          allServers.splice(n, 1);
        } else {
          ns.print(`Server ${server[0]} already rooted, no longer iterating`);
          allServers.splice(n, 1);
        }
      }
    }
    doLoop = (allServers.length > 0);
    await ns.sleep(1000);
  }
}
