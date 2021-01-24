import { getFolder, getServerPrefix } from 'import_aevum.js';

var doLoop = true;
var servers = [];
var scanArray = ['home'];
var currentScanLength = 0;

export async function main(ns) {
  while (doLoop) {
    var previousScanLength = currentScanLength;
    currentScanLength = scanArray.length;
    for (var i = previousScanLength; i < currentScanLength; i++) {
      var currentHost = scanArray[i];
      //hostName, numPorts, hackingLevel, maxMoney, growthRate, minSecurity, RAM
      //0         1         2             3         4           5            6
      var server = [
        currentHost,
        await ns.getServerNumPortsRequired(currentHost),
        await ns.getServerRequiredHackingLevel(currentHost),
        await ns.getServerMaxMoney(currentHost),
        await ns.getServerGrowth(currentHost),
        await ns.getServerMinSecurityLevel(currentHost),
        await ns.getServerRam(currentHost)[0]
          ];
      if (server[0] != 'home' && !server[0].includes(`${getServerPrefix()}`)) {
        servers.push(server.join(','));
      }
      var newScan = await ns.scan(currentHost);
      for (var host of newScan) {
        if (!scanArray.includes(host) && !host.includes(`${getServerPrefix()}`)) {
          scanArray.push(host);
        }
      }
    }
    if (currentScanLength == scanArray.length) {
      doLoop = false;
    }
  }
  await ns.write('allServers.txt', servers.join(';'), 'w');
}
