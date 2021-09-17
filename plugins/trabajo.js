let handler = async m => m.reply(`
▫️👉[empleo 1]
ACTUALMENTE NO DISPONIBLE

`.trim()) 
handler.help = ['trabajo','premium']
handler.tags = ['xp']
handler.command = /^(trabajo|trabajos|premium|hacermepremium)$/i
handler.private = true

module.exports = handler
