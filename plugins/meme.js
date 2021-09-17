let fetch = require('node-fetch')
let Rimage = require('../lib/image.js')
//plugin by Samu330
let handler  = async (m, { conn }) => {
if (new Date - global.DATABASE._data.users[m.sender].lastme > 5400) {
let url = await fetch('https://insanebott.000webhostapp.com/meme')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]
            await conn.sendFile(m.chat, erest, '', 'MEME', m)
global.DATABASE._data.users[m.sender].lastme = new Date * 1
  } else m.reply('Cargando..')
}
handler.help = ['meme','memes']
handler.tags = ['images']
handler.command = /^(meme|memes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
