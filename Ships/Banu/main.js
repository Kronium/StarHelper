const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'banu',
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
        const AnvilEmbed  = new Discord.MessageEmbed()
            .setColor('#123fc7')
            .setTitle(`Banu`)
            .setFooter('Hades#2004')
            .setDescription(``)
            .addFields(
                {name: 'Ship Amount', value: `Banu currently only operates one ship!`},
                {name: 'Manufacturer Code', value: `BANU`},
                {name: 'Ship List', value: 'Defender'}
            )
            .setImage('https://ih1.redbubble.net/image.1816369502.3013/aps,504x498,small,transparent-pad,600x600,f8f8f8.jpg')
        message.channel.send(AnvilEmbed);
    }
}