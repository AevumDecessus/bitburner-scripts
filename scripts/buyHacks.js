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
    doLoop = killLoop();
  }
}

function killLoop() {
  var kill = ns.fileExists('brutessh.exe', 'home');
  kill = (kill && ns.fileExists('ftpcrack.exe', 'home'));
  kill = (kill && ns.fileExists('httpworm.exe', 'home'));
  kill = (kill && ns.fileExists('relaysmtp.exe', 'home'));
  kill = (kill && ns.fileExists('sqlinject.exe', 'home'));
  return kill;
}
