import { getFolder, getServerPrefix, serverValue } from 'import_aevum.js';

export async function main(ns) {
  let servers = await ns.read('allServers.txt');
  servers = servers.split(';');
  var doLoop = true;

  var minSecWeight = 100;
  var lastTarget = [];
  while (doLoop) {
    for (var server of servers) {
      server = server.split(',');
      // Only consider targets we have root on first
      if (await ns.hasRootAccess(server[0])) {
        var target = server[0];
        var hasRun = false;
        var shouldSwitchTargets = false;
        var numPorts = server[1];
        var hackingLevel = server[2];
        var maxMoney = server[3];
        var minSecurity = server[5];
        if (lastTarget.length == 0) {
          shouldSwitchTargets = true;
        } else {
          shouldSwitchTargets = serverValue(lastTarget) < serverValue(server);
        }
        if (shouldSwitchTargets) {
          ns.tprint('Switching Targets');
        }
      }
    }
    doLoop = (servers.length > 0);
  }
}
