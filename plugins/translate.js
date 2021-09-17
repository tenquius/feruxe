// ariffb - http:/wa.me/6283128734012
const translate = require('translate-google-api')
let handler = async (m, { text, usedPrefix }) => {
    goblok = `ejemplo: \n${usedPrefix}tr codigo de idioma|texts\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`
    if (!text) return conn.reply(m.chat, `ejemplo: \n${usedPrefix}tr codigo de idioma|texts\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`, m)

    let [to, trans] = text.split`|`

    if (!to) return conn.reply(m.chat, `Por favor ingrese el código de idioma\nejemplo: \n\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
    if (!trans) return conn.reply(m.chat, `Por favor ingrese la frase que desea traducir.\nejemplo: \n\n${usedPrefix}tr en|thankyou`, m)

    try {
        const result = await translate(`${trans}`, {
            tld: "cn",
            to: `${to}`,
        })
        m.reply(`_Tu: ${trans}_\n*Traduccion: ${result[0]}*`)
        console.log(result[0])
    } catch (e) {
        return conn.reply(m.chat, `Por favor ingrese el código de idioma\nejemplo: \n\n${usedPrefix}tr en|thankyou\n\nIdiomas admitidos: https://cloud.google.com/translate/docs/language`, m)
    }

}
handler.help = ['traducir'].map(v => v + '  idioma|texto')
handler.tags = ['tools']
handler.command = /^(tr(aducir)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

