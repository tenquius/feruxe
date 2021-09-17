let handler = async m => m.reply(`
INGRESA a https://www.insanebot.com.ar/
segui a @insanebot.oficial en ig
www.instagram.com/insanebot.oficial
programadores del bot
helxer - blaim - chusky
                                        
`.trim()) 
handler.help = ['creditos']
handler.tags = ['info']
handler.command = /^(creditos|créditos|crédito|credito)$/i

module.exports = handler
