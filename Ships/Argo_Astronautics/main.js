const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'Argo_astronautics',
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
        const ArgoEmbed  = new Discord.MessageEmbed()
            .setColor('#f08624')
            .setTitle(`Argo Astronautics`)
            .setFooter('Hades#2004')
            .setDescription(`ARGO`)
            .addFields(
                {name: 'Ship Amount', value: `Banu currently only operates 3 ships!`},
                {name: 'Manufacturer Code', value: `BANU`},
                {name: 'Ship List', value: 'MOLE, MPUV Cargo, MPUV Personal'}
            )
            .setImage('https://starcitizen.tools/images/thumb/1/16/Comm-Link-Argo_Logo.jpg/1280px-Comm-Link-Argo_Logo.jpg')
        message.channel.send(ArgoEmbed);
    }
}