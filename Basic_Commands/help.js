const Discord = require('discord.js')
const config = ('../config.json')
module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message, args) {
        const Help  = new Discord.MessageEmbed()
            .setColor('#e00da8')
            .setTitle(`Help Page 1`)
            .setDescription('Need help with my commands? Heres the info on what I can do!')
            .addFields(
                {name: 'Manufacturer information', value: `The manufacturer information is quite simple. Do .anvil to get the information for anvil, .aegis for aegis etc.`},
                {name: 'Specific Ship Info', value: `This command will give you information on a specific ship, To use it simply do .drake_caterpillar or the name of the ship you want to get info on! Its simple, instead of a space just put an _ like avenger_stalker.`},

            )
            .setFooter('Developed by Hades#2004')
            .setImage("https://static.wikia.nocookie.net/godsofchaosfantasy/images/3/35/Hades_2.png")
        message.channel.send(Help)
    }
}