global.owner = ['5491127640079'] // Put your number here
global.mods = ['5491127640079'] // Want some help?
global.prems = ['5493782511210','5491161685666','5491127640079','5493412651417','5491160421156','5492645068890','5491125200816','642776797777','17817501861','5492964625346','5491133012139','5491136910923','5491125958955','33677755490','13019735945','34655357416','641777500052','5492644861964','5492235946039','5491155709938','5491133374641','5492314577661'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = ' Insane BOT '
global.author = 'segui a @insanebot.oficial '

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
