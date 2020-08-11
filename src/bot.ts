import { Telegraf } from "telegraf";
import axios from "axios";
import { JSDOM } from "jsdom";

const bot = new Telegraf(process.env.BOT_TOKEN);

interface QuoteObj {
  title: string;
  content: string;
}

async function getQuote(): Promise<QuoteObj> {
  try {
    const { data } = await axios.get("https://node-quote.herokuapp.com/quote");
    const { title, content }: QuoteObj = data;
    const { window } = new JSDOM(content);

    const quote = window.document.querySelector("p").textContent;

    return { content: quote, title };
  } catch (error) {
    throw new Error("node-quote api has some error in fetching!");
  }
}

bot.command("quote", async ({ reply }) => {
  reply("okk, 👍");
  reply("fetching a qoute for you please wait...");
  getQuote()
    .then(({ title, content }) => {
      reply(`${content}\n---${title}`);
    })
    .catch(() => reply("There must be any problem please try again later"));
});

export default bot;
