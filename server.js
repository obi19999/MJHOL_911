const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const app = express();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

app.get('/', (req, res) => {
  res.send('Bot is alive!');
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.TOKEN);

app.listen(3000, () => {
  console.log('Server is running!');
});
