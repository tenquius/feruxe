let fetch = require('node-fetch')
//plugin by Samu330
let Rimage = require('../lib/image')

  
let handler  = async (m, { conn }) => {
if (new Date - global.DATABASE._data.users[m.sender].yugi > 3000000) {
let url = await fetch('https://insanebott.000webhostapp.com/yugio')
//let url = await fetch('https://api.fdci.se/sosmed/rep.php?gambar=' + encodeURIComponent(text))
let samu = await url.json()
let erest = samu[Math.floor(Math.random() * samu.length)]

            await
            await
  await conn.sendFile(m.chat, erest, '', 'YUGI HO', m)
  global.DATABASE._data.users[m.sender].yugi = new Date * 1
  } else m.reply('Todavia no puedes cartear')
}
handler.help = ['carta','yugi']
handler.tags = ['game']
handler.command = /^(carta|yugi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

