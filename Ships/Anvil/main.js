const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships/"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'anvil',
    async execute(message)
    {
        const response = await fetch(url + "F7c_Hornet_Wildfire.json", {
            method: 'GET',
            headers: {
                AcceptJSON,
                AcceptContentType
            }
        })
        const json = await response.json
        console.log(json);
        const AnvilEmbed  = new Discord.MessageEmbed()
            .setColor('#2b9114')
            .setTitle(`Anvil Aerospace`)
            .setFooter('Hades#2004')
            .setDescription(`When J. Harris Arnold was in school, he was obsessed with the works of Leonard Casse. To him, the mostly forgotten engineer represented everything he loved about ship design. When he eventually started his Anvil, Arnold drew heavy inspiration from Casse's business model and ships for his own designs, utilizing such signature elements as the curved wings and open circle signet. The similarities were such that Arnold and Anvil was sued by the holding firm who had bought the rights to Casse's designs. Arnold decided to settle the case by purchasing all of Casse's Aerospace portfolio himself`)
            .addFields(
                {name: 'Ship Amount', value: `Anvil operates 20 ships at this moment!`},
                {name: 'Manufacturer Code', value: `ANVL`},
                {name: 'Ship List', value: 'Arrow, C8X Pisces Expedition, C8 Pisces, Carrack, Carrack Expedition, Gladiator, Hawk, F7A Hornet, F7C Hornet, F7C-M Super Hornet F7C-M Hornet Heartseeker, F7C-R Hornet Tracker, F7C-S Hornet Ghost, F7C Hornet Wildfire, Hurricane, F8 Lightning, Terrapin, Valkyrie, Ballista'}
            )
            .setImage('https://external-preview.redd.it/EW9GhbKDozjA09DcGHvggPRAMpokDcQ2DNW4Pe4AXPM.jpg?auto=webp&s=fb827c231508718403bfd47a92803962f2d1fd8e')
        message.channel.send(AnvilEmbed);
    }
}
