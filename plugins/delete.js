let handler = function (m) {
  if (!m.quoted) return conn.reply(m.chat, `etiquete un mensaje del bot`, m)
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) return conn.reply(m.chat, `solo puedo borrar mensajes mios`, m)
  if (!isBaileys) return conn.reply(m.chat, `el mensaje no es enviado por un bot`, m)
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']
handler.owner = false
handler.premium = false
handler.command = /^del(ete)?$/i
handler.admin = true
module.exports = handler
