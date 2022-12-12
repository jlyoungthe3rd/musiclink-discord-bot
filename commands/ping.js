const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pulse')
    .setDescription('replies with heartbeat'),
    async execute(interaction) {
        await interaction.reply('❤️❤️❤️')
    }
}