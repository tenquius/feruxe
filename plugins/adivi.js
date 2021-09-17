global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix }) => {
  if (args.length < 1) return conn.reply(m.chat, `
Juego de adivinanzas para comenzar
pone: ${usedPrefix}adiv start
`.trim(), m)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return conn.reply(m.chat, `
Modos: ${Object.keys(modes).join(' | ')}
Ejemplos de uso: ${usedPrefix}adivi start
`.trim(), m)
  let id = m.chat
  if (id in global.math) return conn.reply(m.chat, '⚠️Todavía hay preguntas⚠️\n   ⚠️ sin respuestas ⚠️', global.math[id][0])
  let math = genMath(mode)
  global.math[id] = [
    await conn.reply(m.chat, `adivina un numero del -6 al 6?\n\n▫️Tiempo: ${(math.time / 1000).toFixed(2)} segundos\n☑️Respuesta correcta *${math.bonus} XP*`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) conn.reply(m.chat, `▫️Se acabó el tiempo!\n▫️La respuesta es ${math.result}`, global.math[id][0])
      delete global.math[id]
    }, math.time)
  ]
}
handler.help = ['adiv start']
handler.tags = ['game']
handler.command = /^adiv/i
handler.group = true
module.exports = handler

let modes = {
  start: [-3, 3,-3, 3, '+-', 16000, 960]
} 

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
