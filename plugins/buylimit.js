const xpperlimit = 500 
let handler = async (m, { conn, command, args }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastrob > 7000) {
  let count = command.replace(/^buy/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE._data.users[m.sender].exp >= xpperlimit * count) {
    global.DATABASE._data.users[m.sender].exp -= xpperlimit * count
    global.DATABASE._data.users[m.sender].limit += count
    conn.reply(m.chat, `-${xpperlimit * count} XP\n+ ${count} Limit`, m)
  } else conn.reply(m.chat, `XP no es suficiente para comprar ${count} limit`, m)
} else m.reply('recien robaste..\ntodavia no puedes comprar')
}
handler.help = ['buy <limit>', 'buy <limit>', 'buyall']
handler.tags = ['xp']
handler.command = /^buy([0-9]+)|buy|buyall$/i
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
