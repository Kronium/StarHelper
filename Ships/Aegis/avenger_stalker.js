const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships.json"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'avenger_stalker',
    async execute(message)
    {
        console.log('test')
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                AcceptJSON,
                AcceptContentType
            }
        })
        const json = await response.json
        console.log(json);
        const AegisStalkerEmbed  = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle(`Avenger_Stalker`)
            .setFooter('Hades#2004')
            .setDescription('Initially designed as Aegis’ frontline carrier ship for the military, the Avenger Stalker took a different path, ultimately having a long and storied career as the standard patrol craft of the UEE Advocacy. Utilizing its cargo hold for prisoner transport, the Avenger features a sturdy, reliable hull and the capacity for larger-than-expected engine mounts.')
            .addFields(
                {name: 'Size', value: `2`},
                {name: 'Cargo', value: `None`},
                {name: 'Max Speed', value: '1307 M/S'},
                {name: 'Quantum Speed', value: '149 Mm/s'},
                {name: 'Quantum Range', value: '60 Gm'},
                {name: 'Shields', value: '3000 HP'},
                {name: 'Shield Regen', value: '750 HP/S'}
            )
            .setImage('https://robertsspaceindustries.com/media/t597ueksikfz7r/store_slideshow_large/Stalker_02-Squashed.jpg')
        message.channel.send(AegisStalkerEmbed);
    }
}
