let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082172796728]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/Neonbot
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
