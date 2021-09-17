let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, `es .pagar @mension cantidad`, m)
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) return conn.reply(m.chat, `etiquete uno`, m)
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let xp = parseInt(txt)
  if (isNaN(xp)) return conn.reply(m.chat, `es .pagar @mension cantidad`, m)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 26) return conn.reply(m.chat, `minimo 26`, m)
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) return conn.reply(m.chat, `no tenes esa exp`, m)
  users[m.sender].exp -= exp
  users[who].exp += xp
  
  m.reply(`Más impuestos gastaste  *${-exp} XP*`)
  conn.fakeReply(m.chat, `te enviaron *+${xp} XP*`, who, m.text)
}
handler.help = ['pagar @user <amount>']
handler.tags = ['xp']
handler.command = /^pagar$/
handler.rowner = false
handler.group = true
handler.limit = true

module.exports = handler
