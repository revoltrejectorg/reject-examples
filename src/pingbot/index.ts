import { Client as RevoltClient} from "revolt.js";
import { Client as RejectClient, Message as RejectMessage } from "revolt-reject.js";
import { Client, Message } from "discord.js";

function BotReady(client: Client) {
    console.log(`Logged in as ${client.user?.username}`);
}

function onMessage(msg: Message) {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
}

const bot = new RevoltClient();
const token = process.env["REVOLT_TOKEN"];
if (!token) throw new Error("Set the REVOLT_TOKEN environment variable to your bot's token.");

bot.on("ready", () => {
    BotReady(new RejectClient(bot) as any);
});

bot.on("message", (msg) => {
    onMessage(new RejectMessage(msg) as any);
});
