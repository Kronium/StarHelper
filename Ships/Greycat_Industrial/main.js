const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'greycat_industrial',
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
            .setColor('#7d7a80')
            .setTitle(`Greycat Industrial`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Greycat Industrial currently only operates 2 ships!`},
                {name: 'Manufacturer Code', value: `GREY`},
                {name: 'Ship List', value: 'ROC, ROC-DS'}
            )
            .setImage('https://starcitizen.tools/Greycat_Industrial#/media/File:Greycat.jpg')
        message.channel.send(ConEmbed);
    }
}