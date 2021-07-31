const Discord = require('discord.js')
const fetch = require('node-fetch')
const url = "https://scunpacked.com/api/ships.json"
const AcceptJSON = "'Accept': 'application/json'"
const AcceptContentType = "'Content-Type': 'application/json'"


module.exports =  {
    name: 'aegis',
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
        const AegisEmbed  = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle(`Aegis Dynamics`)
            .setFooter('Hades#2004')
            .setDescription('Aegis Dymanics began in a merger between earth based Aegis Macrocompuating and Devien based Dynamic Production Systems. The former constructed computing systems for the burgeoning spacecraft industry and the latter maintained four systems worth of production yards (including the specialized component factories on their home system). The goal from day one was to build naval spacecraft, and the resulting company was tailor-made for military contract bidding in an era when mankind was marshalling its forces. As Messer consolidated power, Aegis was there to supply spacecraft to his legions. Craft like the Retaliator became synonymous with the government’s iron hand.')
            .addFields(
                {name: 'Ship Amount', value: `Aegis operates 17 ships at this moment!`},
                {name: 'Manufacturer Code', value: `AEG`},
                {name: 'Ship List', value: 'Avenger Stalker, Avenger Titan, Avenger Titan Renegade, Avenger Warlock, Eclipse, Gladius, Gladius Valiant, Hammerhead, Reclaimer, Retaliator, Sabre, Sabre Comet, Savre Raven, Vanguard Warden, Vanguard Harbinger, Vanguard Hoplite, Vanguard Sentinel'}
            )
            .setImage('https://i.imgur.com/dLoPpqC.png')
        message.channel.send(AegisEmbed);
    }
}
