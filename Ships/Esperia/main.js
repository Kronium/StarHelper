const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'Esperia',
    async execute(message)
    {
        const response = await fetch(url, {
        method: 'GET',
            headers: {
            AcceptJSON,
                AcceptContentType
        }
    })
        const json = await response.json
        console.log(json);
        const ConEmbed  = new Discord.MessageEmbed()
            .setColor('#6d7d64')
            .setTitle(`Esperia`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Esperoa currently only operates 5 ships!`},
                {name: 'Manufacturer Code', value: `ESPE`},
                {name: 'Ship List', value: 'Prowler, Talon, Talon Shrike, Blade, Glaive'}
            )
            .setImage('https://starcitizen.tools/images/2/2b/Esperia_logo_new_colored.svg')
        message.channel.send(ConEmbed);
    }
}