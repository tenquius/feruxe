let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.DATABASE.data.users)
	if(!args || !args[0]) {
		var lim = 10
	} else {
		var lim = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*restablecido con éxito ${lim} / user*`, m)
}
handler.help = ['']
handler.tags = ['']
handler.command = /^(resetlimit)$/i
handler.rowner = true
handler.exp = 0
handler.fail = null
module.exports = handler
