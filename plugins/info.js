let handler = async m => m.reply(`
@insanebot.oficial 
www.insanebot.com.ar
instagram.com/insanebot.oficial
                                        
`.trim()) 
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i

module.exports = handler
