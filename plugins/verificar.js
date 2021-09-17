let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Ingrese su ID y nombre completo \n Ejemplo\n .verificar Martin Sanchez 654321 Kwai o tiktok ', m)
    if (text > 300) return conn.reply(m.chat, 'Lo siento, texto demasiado largo, máximo 300 caracteres!', m)
    const laporan = `*「 Premium verificación 」*\nNumero : ${m.sender.split`@`[0]}\ndatos : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) 
    conn.reply(m.chat, 'Listo verificando ..\n puede demorar hasta 24 hrs\nchekea en .listprem\n más info .infoprem', m)
}
handler.help = ['']
handler.tags = []
handler.command = /^(verify|verificar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
