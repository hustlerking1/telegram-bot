const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Welcome! Use /play to start.');
});

bot.onText(/\/play/, (msg) => {
    // Simulate a round or logic here
    bot.sendMessage(msg.chat.id, 'Round started! Good luck.');
});

// Add other commands like /cashout, /balance, etc.
