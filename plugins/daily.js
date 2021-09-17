let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 3000
    m.reply('*Reclamado* +3000 puntos')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('Ya has reclamado hoy:)')
}
handler.help = ['daily', 'reclamar']
handler.tags = ['xp']
handler.command = /^(daily|reclamar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

