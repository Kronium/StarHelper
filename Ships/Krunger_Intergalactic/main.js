const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'krunger_intergalactic',
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
            .setColor('#f2d861')
            .setTitle(`Krunger Intergalactic`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Krunger Intergalactic currently only operates 2 ships!`},
                {name: 'Manufacturer Code', value: `KRUN`},
                {name: 'Ship List', value: 'P-52 Merlin, P-72 Archimedes'}
            )
            .setImage('https://static.wikia.nocookie.net/starcitizen/images/4/48/CS_SC_KRUGER_COMP_01A.jpg')

        message.channel.send(ConEmbed);
    }
}