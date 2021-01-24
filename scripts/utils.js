import { getFolder, getServerPrefix } from 'import_aevum.js';

export async function server_value(ns, server) {
  var securityWeight = 100;
  return server[3] * (securityWeight / server[5]);
}
