const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('provides information about the server'),
    async execute(interaction) {
        await interaction.reply(`here is info about the server ${interaction.guild.name} ${interaction.guild.memberCount}`)
    }
}