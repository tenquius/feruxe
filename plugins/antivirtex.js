let handler = m => m

handler.before = function(m, { text }) {

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let users = m.sender

    if (m.text > 53773838386483873738373738738383847747000) {
  this.reply(m.chat, 'Que haces salchicha. una mas y te vas ban', m)
  }
}
handler.group = true

module.exports = handler
