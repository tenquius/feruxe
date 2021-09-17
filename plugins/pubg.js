let fetch = require('node-fetch')
//plugin by Samu330

let handler  = async (m, { conn, text }) => {
//let text = args.join` `
let [to, samu] = text.split`|`
if (!to) return conn.reply(m.chat, `no es asi ! es\n.pubg algo|algo`, m)
if (!samu) return conn.reply(m.chat, `no es asi !\n ejemplo .pubg rodri|220`, m)

if (!text) return conn.reply(m.chat, 'No hay texto para crear logo', m)
let url = 'https://videfikri.com/api/textmaker/pubgmlogo/?text1=' + `${to}` + '&text2=' + `${samu}`

conn.sendFile(m.chat, url, '', '', m)

}
handler.help = ['pubg']
handler.tags = ['images']
handler.command = /^pubg?$/i
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
