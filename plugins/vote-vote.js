let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) return conn.reply(m.chat, `no hay votaciones! para crear una votacion pone .votar`, m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) return conn.reply(m.chat, `Ya tienes un voto`, m)
    if (/si/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/no/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Listo!\n\n*${usedPrefix}chekear* - para chekear los votos`)
}
handler.help = ['si', 'no']
handler.tags = ['vote']
handler.command = /^(si|no)$/i
handler.group = true
module.exports = handler
