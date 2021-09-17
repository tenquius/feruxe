let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let Rimage = require('../lib/image')
let handler  = async (m, { conn, args, text }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastmp > 7400) {
  if (!text) return conn.reply(m.chat, `que estas buscando?`, m)
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return conn.reply(m.chat, `imagen no encontrado`, m)
  if (!gis) console.error(e)
  conn.sendFile(m.chat, url, 'gimage', `
${text}
`.trim(), m)
 global.DATABASE._data.users[m.sender].lastmp = new Date * 1
 } else m.reply('Cargando...')
}
handler.help = ['imagen <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(image|imagen)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
