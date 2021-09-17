let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: users } })
}
handler.help = ['atencion','llamartodos'].map(v => v + ' [texto]')
handler.tags = ['group']
handler.command = /^(atencion|llamartodos)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

