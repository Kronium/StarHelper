const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'drake_interplanetary',
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
            .setColor('#ff0022')
            .setTitle(`Drake Interplanetary`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Drake Interplanetary currently only operates 7 ships!`},
                {name: 'Manufacturer Code', value: `DRAK`},
                {name: 'Ship List', value: 'Buccaneer, Caterpillar, Cutlass Black, Cutlass Blue, Cutlass Red, Dragonfly, Herald'}
            )
            .setImage('https://i.redd.it/q0xg5sknwcz11.png')
        message.channel.send(ConEmbed);
    }
}