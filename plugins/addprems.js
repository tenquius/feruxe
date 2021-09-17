let handler = async (m, { conn, text }) => {
  
    let who = text
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(text.split`@`[0])) throw 'ya es premium!'
    global.prems.push(`${text.split`@`[0]}`)
    conn.reply(m.chat, `listo, @${text.split`@`[0]}. agrrgado a premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(addprem)$/i
handler.rowner = true
module.exports = handler
