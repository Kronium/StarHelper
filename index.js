const Discord = require('discord.js')
const config = require ('./config.json')
const bot = new Discord.Client()
const fs = require('fs')

const {prefix, token} = require ('./config.json')
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log(`Bot is logged in and connected!`)
})
//Loading commands

//Command loading
console.log('Loading Basic commands')
const basicFiles = fs.readdirSync('./Basic_Commands').filter(file => file.endsWith('.js'));
for (const file of basicFiles) {
    const command = require(`./Basic_Commands/${file}`);
    bot.commands.set(command.name, command);
}
//aegis
console.log('Loading Aegis commands')
const aegisFiles = fs.readdirSync('./Ships/Aegis').filter(file => file.endsWith('.js'));
for (const file of aegisFiles) {
    const command = require(`./Ships/Aegis/${file}`);
    bot.commands.set(command.name, command);
}
//anvil
console.log('Loading Anvil Commands')
const anvilFiles = fs.readdirSync('./Ships/Anvil').filter(file => file.endsWith('.js'));
for (const file of anvilFiles) {
    const command = require(`./Ships/Anvil/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Aopoa Commands')
const AopaFiles = fs.readdirSync('./Ships/Aopoa').filter(file => file.endsWith('.js'));
for (const file of AopaFiles) {
    const command = require(`./Ships/Aopoa/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Argo Commands')
const ArgoFiles = fs.readdirSync('./Ships/Argo_Astronautics').filter(file => file.endsWith('.js'));
for (const file of ArgoFiles) {
    const command = require(`./Ships/Argo_Astronautics/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Banu Commands')
const BanuFiles = fs.readdirSync('./Ships/Banu').filter(file => file.endsWith('.js'));
for (const file of BanuFiles) {
    const command = require(`./Ships/Banu/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Consolidated Commands')
const ConslFiles = fs.readdirSync('./Ships/Consolidated_Outland').filter(file => file.endsWith('.js'));
for (const file of ConslFiles) {
    const command = require(`./Ships/Consolidated_Outland/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Crusader Commands')
const CrusFiles = fs.readdirSync('./Ships/Crusader_Industries').filter(file => file.endsWith('.js'));
for (const file of CrusFiles) {
    const command = require(`./Ships/Crusader_Industries/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Drake Commands')
const DrakeFiles = fs.readdirSync('./Ships/Drake_Interplanetary').filter(file => file.endsWith('.js'));
for (const file of DrakeFiles) {
    const command = require(`./Ships/Drake_Interplanetary/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Esperia Commands')
const EsperiaFiles = fs.readdirSync('./Ships/Esperia').filter(file => file.endsWith('.js'));
for (const file of EsperiaFiles) {
    const command = require(`./Ships/Esperia/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Greycat Commands')
const GreycatFiles = fs.readdirSync('./Ships/Greycat_Industrial').filter(file => file.endsWith('.js'));
for (const file of GreycatFiles) {
    const command = require(`./Ships/Greycat_Industrial/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Krunger Commands')
const KrunFiles = fs.readdirSync('./Ships/Krunger_Intergalactic').filter(file => file.endsWith('.js'));
for (const file of KrunFiles) {
    const command = require(`./Ships/Krunger_Intergalactic/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Musashi Commands')
const MusFiles = fs.readdirSync('./Ships/Musashi_Industrial').filter(file => file.endsWith('.js'));
for (const file of MusFiles) {
    const command = require(`./Ships/Musashi_Industrial/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Origin Commands')
const OriginFiles = fs.readdirSync('./Ships/Origin_Jumpworks').filter(file => file.endsWith('.js'));
for (const file of OriginFiles) {
    const command = require(`./Ships/Origin_Jumpworks/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Robers_Space Commands')
const RobFiles = fs.readdirSync('./Ships/Robers_Space').filter(file => file.endsWith('.js'));
for (const file of RobFiles) {
    const command = require(`./Ships/Robers_Space/${file}`);
    bot.commands.set(command.name, command);
}
console.log('Loading Tumbril Commands')
const TumFiles = fs.readdirSync('./Ships/Tumbril_Land').filter(file => file.endsWith('.js'));
for (const file of TumFiles) {
    const command = require(`./Ships/Tumbril_Land/${file}`);
    bot.commands.set(command.name, command);
}


bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message)
    } catch (error) {
        console.error(error);
        message.reply('There was an error with the command, Please contact my developer!');
    }
});
console.log('Commands Loaded')
//Anvil
bot.login('')