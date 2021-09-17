let handler = async m => m.reply(`
    📍🄻🄾🅂 🄲🄾🄼🄰🄽🄳🄾🅂 🅂🄾🄽 
_.menu_
_.perfil_
_.ranking_
_.comandos_
_.Buy_ (comprar exp)
_.buyall_ (comprar toda la exp)
_.reclamar_
_.pagar_ @mension <cantidad de exp>
_.robar_ @mension <cantidad de exp>
_.ping_
_.politica_
_.creditos_
*___________________________________*
      📌🄰🄲🅃🄸🅅🄸🄳🄰🄳🄴🅂  
_.attp_ Texto
_.ttp_ Texto 
_.ttpd_ Texto
_.style_ texto
_.sticker_ (seleccionando imagen)
_.imagen_ texto
_.cartelera_ (selec imagen)
_.frases_
_.memes_
_.wallpaper_
_.play_ (nombre de la musica)
_.play2_ (nombre del video)
_.joox_
_.anime_
_.google_ (busqueda de wikipedia)
_.traducir_ idioma|texto
_.tts_ texto
_.s_ 
_Xs_ pregunta
*___________________________________*
        ➿🄹🅄🄴🄶🄾🅂
_.mate_ medium (ganar exp)
_.adiv_ start (ganar exp)
_.carta (nuevo)
_proximo a salir ta-te-ti..._
_proximo a salir preguntados..._
*___________________________________*
  ȼøᵽɏɍɨǥħŧ©ɨnsȺnɇƀøŧ.øfɨȼɨȺł
                                        
`.trim()) 
handler.help = ['comandos']
handler.tags = ['info']
handler.command = /^(cmd|comandos|commandos|com|hola|list|comando|ayuda)$/i

module.exports = handler
