import bot from "./utils/bot";
import app from "./app";

const port = process.env.PORT || 1729;

app.listen(port, () => {
  bot.launch();
  console.log(`Server is running on ${port}`);
});
