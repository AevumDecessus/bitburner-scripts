let config = {
  folder: 'aevum',
  rootUrl: 'https://raw.githubusercontent.com/AevumDecessus/bitburner-scripts/main/',
  serverPrefix: 'AevumPwns',
};
/* 
 * Imports all files from github $rootUrl, stores them in $folder
 */
export async function main(ns) {
  await ns.wget(`${config.rootUrl}import_aevum.js`, 'import_aevum.js');
  let filesImported = await importFiles(ns);
  if (filesImported) {
    ns.tprint('Successfully Imported Files');
  } else {
    ns.tprint('Something failed, check files and paths');
  }
}

async function importFiles(ns) {
  let files = [
    'aevumGrow.js',
    'aevumHack.js',
    'aevumWeaken.js',
    'rootAll.js',
    'spider.js',
    'targeter.js',
    ];
  let filesImported = true;
  for (let file of files) {
    let remoteFileName = `${config.rootUrl}scripts/${file}`;
    let result = await ns.wget(remoteFileName, `/${getFolder()}/${file}`);
    filesImported = filesImported && result;
    ns.tprint(`File: ${file}: ${result ? '✔️' : '❌'}`);
  }
  return filesImported;
}

export function getFolder() {
  return config.folder;
}
export function getServerPrefix() {
  return config.serverPrefix;
}

export function serverValue(server) {
  var securityWeight = 100;
  return server[3] * (securityWeight / server[5]);
}

