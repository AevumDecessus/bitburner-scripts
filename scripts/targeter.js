import { getFolder, getServerPrefix, serverValue } from 'import_aevum.js';

export async function main(ns) {
  await ns.disableLog('ALL');
  let servers = await ns.read('allServers.txt');
  servers = servers.split(';');
  var doLoop = true;

  var lastTarget = [];
  while (doLoop) {
    for (var i = 0; i < servers.length; i++) {
      var server = servers[i].split(',');
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
          ns.tprint(`Switching Targets. New Target ${server[0]}`);
          ns.print(`Switching Targets. New Target ${server[0]}`);
          // Run Hack/Etc script here
          lastTarget = server;
        }
        ns.print(`Removing ${server[0]} from target list`);
        servers.splice(i, 1);
      }
    }
    doLoop = (servers.length > 0);
    await ns.sleep(1000);
  }
}
