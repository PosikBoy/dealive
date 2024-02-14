//index.js
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const profileRoute = require("./routes/profileRoute");
const orderRoute = require("./routes/orderRoute");
const reviewRoute = require("./routes/reviewRoute");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
// Подключение роутов

app.use(authRoute);
app.use(profileRoute);
app.use(orderRoute);
app.use(reviewRoute);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
