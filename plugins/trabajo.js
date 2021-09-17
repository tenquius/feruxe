let handler = async m => m.reply(`
▫️👉[empleo 1]
LABURA desde CASA
Regístrate y gana de 100 a 300 pesos
reales mirando vídeos. 
▫️OPORTUNIDAD de ganar 
hasta 8 mil pesos semanale$$
▫️Registrate con el codigo
https://s.kwai.app/s/odEMde9C
*Luego cuando finalizes de registrarte*
*pone .verificar*
*para ganar premium en InsaneBOT*
_______________________________

`.trim()) 
handler.help = ['trabajo','premium']
handler.tags = ['xp']
handler.command = /^(trabajo|trabajos|premium|hacermepremium)$/i
handler.private = true

module.exports = handler
