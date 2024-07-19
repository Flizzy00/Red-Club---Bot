const Discord = require('discord.js')
const client = new Discord.Client(
  { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)
const { version } = require("discord.js");

client.once('ready', () => {
    console.log('il bot è online');
})

client.login("MTI2Mzg1MDQ4Nzc3NDU3Njc0MQ.GUC4fr.ZdUy1M2UQPh0m1svVQ7flfOpJ1jOi7ClFDS88M")

client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setDescription(`Hey ${member.toString()}, Welcome To **Red Club - Fivem**!`)
        .setAuthor({ name: `${member.user.tag}`, iconURL: `${member.user.avatarURL({ dynamic: true})}`})
        .setColor("#df1111")
        .setImage(member.user.avatarURL({ dynamic: true}))
  
    client.channels.cache.get("1263828666488721410").send({embeds: [embed]}); //id canale benvenuto
})

client.on("messageCreate", (message) => {
    const dateText = `<t:${Math.round(new Date().getTime() / 1000)}>`
    if (message.content == "!embed12746") {
        var embed = new Discord.MessageEmbed()
            .setTitle("TITOLO")//Qua metti il titolo
            .setDescription("DESCRIZIONE**")//Qua scrivi la tua descrizione
            .setImage("IMMAGINE")
            .addField(`${dateText}`, true)
            .setColor("2f3136")
        message.channel.send({ embeds: [embed] })
    }
})