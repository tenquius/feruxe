let handler = async (m, { conn, text }) => {

    let who = text
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : ''
    else who = m.chat
    if (global.prems.includes(who)) throw 'no es user premium!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `Hai, @${text.split('@')[0]}. Masa premium kamu sudah berakhir!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['delprem *@user*']
handler.tags = ['owner']

handler.command = /^(delprem)$/i

handler.owner = true

module.exports = handler
