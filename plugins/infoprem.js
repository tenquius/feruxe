
let handler = async m => m.reply(`
▫️Con premium es mejor!
Sin costos de Limites☑️
comando .cancel disponible☑️
comando .atencion  disponible☑️
comando .llamartodos disponible☑️

Podes verificar si sos premium en .listprem
                                        
`.trim()) 
handler.command = /^infoprem$/i

module.exports = handler
