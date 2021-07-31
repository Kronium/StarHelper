const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'crusader_industries',
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
            .setColor('#9161cf')
            .setTitle(`Crusader Industries`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Crusader Industries currently only operates 4 ships!`},
                {name: 'Manufacturer Code', value: `CRUS`},
                {name: 'Ship List', value: 'A2 Hercules Starlifter, C2 Hercules Starlifter, M2 Hercules Starlifter, A2 Murcury Star Runner'}
            )
            .setImage('https://static.wikia.nocookie.net/starcitizen/images/7/74/CrusaderInd.jpg')
        message.channel.send(ConEmbed);
    }
}