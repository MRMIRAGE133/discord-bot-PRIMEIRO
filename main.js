const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!info') {
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Informações do Servidor')
            .setDescription(`Servidor: ${message.guild.name}`)
            .addField('Membros', message.guild.memberCount.toString(), true)
            .addField('Criado em', message.guild.createdAt.toDateString(), true)
            .setFooter(`ID do Servidor: ${message.guild.id}`);

        message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.DISCORD_TOKEN); // Token será retirado das variáveis de ambiente
