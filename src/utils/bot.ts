import { Telegraf } from "telegraf";
import { getQuote } from "./quote";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command("quote", async ({ reply }) => {
  reply("okk, 👍");
  reply("fetching a qoute for you please wait...");
  const { title, content } = await getQuote();

  reply(`${content}\n---${title}`);
});

export default bot;
