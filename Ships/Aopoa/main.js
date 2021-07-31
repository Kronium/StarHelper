const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'Aopoa',
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
            .setColor('#f08624')
            .setTitle(`Aopa`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Aopoa currently only operates 3 ships!`},
                {name: 'Manufacturer Code', value: `Doesnt have one`},
                {name: 'Ship List', value: 'Nox, Nox Kue, Khartu-al'}
            )
            .setImage('https://starcitizen.tools/images/a/a5/AopoA_human_logo.svg')
        message.channel.send(ConEmbed);
    }
}