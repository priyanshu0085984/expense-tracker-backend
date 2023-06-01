const app = require("./app");
const https = require('https');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch(() => {
    console.log("DB connection Unsuccessful");
  });
const PORT = process.env.PORT || 4000;

https.createServer(app)

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}`);
});
