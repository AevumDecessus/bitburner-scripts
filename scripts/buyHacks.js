import { getFolder } from 'import_aevum.js';
import { node_four_level } from 'aevum_bitnode_config.js';

export async function main(ns) {
  if (node_four_level < 1) {
    break;
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
    sleep(1000);
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
