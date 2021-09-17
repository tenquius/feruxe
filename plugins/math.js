global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix }) => {
  if (args.length < 1) return conn.reply(m.chat, `
Modo: ${Object.keys(modes).join(' | ')}
Más usado es: ${usedPrefix}mate medium
`.trim(), m)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return conn.reply(m.chat, `
Modos: ${Object.keys(modes).join(' | ')}
Ejemplos de uso: ${usedPrefix}mate medium
`.trim(), m)
  let id = m.chat
  if (id in global.math) return conn.reply(m.chat, '⚠️Todavía hay preguntas⚠️\n   ⚠️ sin respuestas ⚠️', global.math[id][0])
  let math = genMath(mode)
  global.math[id] = [
    await conn.reply(m.chat, `Cuanto es el resultado de *${math.str}*?\n\n▫️Tiempo: ${(math.time / 1000).toFixed(2)} segundos\n☑️Respuesta correcta *${math.bonus} XP*`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) conn.reply(m.chat, `▫️Se acabó el tiempo!\n▫️La respuesta es ${math.result}`, global.math[id][0])
      delete global.math[id]
    }, math.time)
  ]
}
handler.help = ['mate <modo>']
handler.tags = ['game']
handler.command = /^mate/i
handler.group = true
module.exports = handler

let modes = {
  noob: [-3, 3,-3, 3, '+-', 35000, 60],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 100],
  medium: [-40, 40, -20, 20, '*/+-', 30000, 250],
  hard: [-100, 100, -70, 70, '*/+-', 41000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 3000, 750],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 3000, 2000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 2000, 3000]
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
