let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'SUBI UN VIDEO EN YOUTUBE USANDO A INSANEBOT \n\n Y GANA 30.000 PUNTOS DE EXP!! \n Ejemplo\n .video  URL DE YOUTUBE ', m)
    if (text > 400) return conn.reply(m.chat, 'Lo siento, texto demasiado largo, máximo 300 caracteres!', m)
    const laporan = `*「 PROMO VIDEO DE YOUTUBE verificación 」*\nNumero : ${m.sender.split`@`[0]}\nURL DE VIDEO : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    conn.reply(m.chat, 'Listo verificando ..\n puede demorar hasta 24 hrs\n', m)
}
handler.help = ['']
handler.tags = []
handler.command = /^(video|promo)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
