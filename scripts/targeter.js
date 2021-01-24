import { getFolder, getServerPrefix } from 'import_aevum.js';

export async function main(ns) {
  let servers = await ns.read('allServers.txt');
  servers = servers.split(';');
  var doLoop = true;
}
