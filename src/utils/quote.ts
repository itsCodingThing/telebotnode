import axios from "axios";

interface QuoteObj {
  title: string;
  content: string;
}

export async function getQuote(): Promise<QuoteObj> {
  try {
    const { data } = await axios.get("https://node-quote.herokuapp.com/quote");
    return data;
  } catch (error) {
    throw new Error("node-quote api has some error in fetching!");
  }
}
