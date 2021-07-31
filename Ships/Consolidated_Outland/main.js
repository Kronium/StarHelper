const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'Consolidated_outland',
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
            .setColor('#9b02cf')
            .setTitle(`Consolidated Outland`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Consolidated Outland currently only operates 6 ships!`},
                {name: 'Manufacturer Code', value: `CNOU`},
                {name: 'Ship List', value: 'C.O. Mustand Aplha, C.O. Mustand Beta, C.O. Mustand Delta, C.O. Mustand Gamma, C.O. Mustand Omega, C.O. Nomad'}
            )
            .setImage('https://static.wikia.nocookie.net/starcitizen/images/1/12/Consolidatedoutland_logo_hobbins.jpg')
        message.channel.send(ConEmbed);
    }
}