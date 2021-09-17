let handler = async m => m.reply(`
Hola para usar el bot
tenes que usar los comando poniendo un 
puntito ante cada palabra
ejemplo .hola
para saber los comandos pone .comandos

y listo fijate todos los comandos
que puedas usar
                                        
`.trim()) 
handler.help = ['comousar']
handler.tags = ['info']
handler.command = /^(help|comousar)$/i

module.exports = handler
