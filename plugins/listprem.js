/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '')  + '@s.whatsapp.net').filter(v => v != conn.user.jid)
conn.sendMessage(m.chat, `「 Lista de usuarios Premium 」` + `\n` + prem.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, MessageType.extendedText, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['listprem']
handler.tags = ['xp']
handler.command = /^(listprem)$/i
handler.owner = false

module.exports = handler
