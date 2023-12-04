const mysql = require('mysql2');
const express = require('express')
const cors = require("cors")
// const TelegramBot = require('node-telegram-bot-api');
// const token = '6693514650:AAFCnK1EeFnm5L3vE3_4060VmQkQUMwmK9M';

// const bot = new TelegramBot(token, { polling: true });


const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())
const conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "laba8",
        password: "password",
    }
)

conn.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("OK")
    }
})


app.post("/api/orders", (req, res) => {
    console.log("Request")
    const { pickupAddress, destinationAddress } = req.body
    const query = `INSERT INTO laba8.employees (full_name, job_title) VALUES ("${pickupAddress}", "${destinationAddress}")`
    conn.query(query, (err, result) => {
        console.log(err);
        console.log(result)
    })
    // bot.sendMessage(-1001889640590,
    //     text = `"${pickupAddress}" +"${destinationAddress}"`);
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
