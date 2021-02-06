import { node_four_level } from 'aevum_bitnode_config.js';

export async function main(ns) {
  if (node_four_level() < 1) {
    ns.tprint('Singularity functions not available');
    ns.exit();
  }
  var doLoop = true;
  var hasTor = false;
  while (doLoop) {
    let myMoney = ns.getServerMoneyAvailable('home');
    if (!hasTor && myMoney >= 200000) {
      await ns.purchaseTor();
      myMoney -= 200000;
      hasTor = true;
    }
    if (!ns.fileExists('brutessh.exe', 'home') && myMoney > 500000) {
      await ns.purchaseProgram('brutessh.exe');
      myMoney -= 500000;
    }
    if (!ns.fileExists('ftpcrack.exe', 'home') && myMoney > 1500000) {
      await ns.purchaseProgram('ftpcrack.exe');
      myMoney -= 1500000;
    }
    if (!ns.fileExists('relaysmtp.exe', 'home') && myMoney > 5000000) {
      await ns.purchaseProgram('relaysmtp.exe');
      myMoney -= 5000000;
    }
    if (!ns.fileExists('httpworm.exe', 'home') && myMoney > 30000000) {
      await ns.purchaseProgram('httpworm.exe');
      myMoney -= 3000000;
    }
    if (!ns.fileExists('sqlinject.exe', 'home') && myMoney > 25000000) {
      await ns.purchaseProgram('sqlinject.exe');
      myMoney -= 25000000;
    }
    await ns.sleep(1000);
    doLoop = await killLoop();
  }
}

async function killLoop() {
  var ssh = await ns.fileExists('brutessh.exe', 'home');
  var ftp =  await ns.fileExists('ftpcrack.exe', 'home');
  var http = await ns.fileExists('httpworm.exe', 'home');
  var relay = await ns.fileExists('relaysmtp.exe', 'home');
  var sql = await ns.fileExists('sqlinject.exe', 'home');
  return !(ssh && ftp && http && relay && sql);
}
