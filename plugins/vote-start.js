let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        return conn.reply(m.chat, `TODAVIA HAY VOTACIONES!\n para eliminar pone .borrarvotacion \n para ver las votaciones .checkear`, m)
    }
    m.reply(`¡La votación comienza!\n*${usedPrefix}si* - para si\n*${usedPrefix}no* - para no\n*${usedPrefix}chekear* - para chekear el voto\n*${usedPrefix}borrarvotacion* - para eliminar`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['votar (pregunta)']
handler.tags = ['vote']
handler.command = /^(start|v)otar$/i
handler.limit = true
handler.group = true
handler.admin = false
module.exports = handler
