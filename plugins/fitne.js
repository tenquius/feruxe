let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Ingrese la cantidad de exp que se dará'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiqueta a uno'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  let xp = parseInt(txt)
  if (isNaN(xp)) throw 'Solo números'
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 26) throw 'Minimo 26'
  let users = global.DATABASE._data.users
  users[who].exp += xp
  
  conn.fakeReply(m.chat, `*+${xp} XP*`, who, m.text)
}
handler.help = ['pinterrgh @user <amount>']
handler.tags = ['owner']
handler.command = /^pinterrgh$/
handler.rowner = true

module.exports = handler
