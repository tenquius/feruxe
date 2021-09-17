let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.reply(m.chat, `no hay votaciones! para crear una votacion pone .votar`, m)

    let [reason, si, no] = conn.vote[id]
    let mentionedJid = [...si, ...no]
    m.reply(`
      *「 VOTACION 」* \n\n
*Razon:* ${reason} \n
*SI*
_Total: ${si.length}_
${si.map(u => '@' + u.split('@')[0]).join('\n')}
\n
*NO*
_Total: ${no.length}_
${no.map(u => '@' + u.split('@')[0]).join('\n')}
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['chekear']
handler.tags = ['vote']
handler.command = /^(che|chec)kear$/i
handler.group = true
module.exports = handler
