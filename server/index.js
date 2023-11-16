const mysql = require('mysql2');
const express = require('express')
const cors = require("cors")



const app = express()
const PORT = 5000
app.use(cors())
const conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "laba8",
        password: "password",
    }
)
conn.connect(err => {
    if (err){
        console.log(err);
        return err;
    }
    else {
        console.log("OK")
    }
})
results = 0
const query = "SELECT * FROM laba8.employees;"
conn.query(query, (err, result) => {
    console.log(err);
    console.log(result)
    results = result
})

app.get("/api/home", (req, res) => {
    res.json({people: results});
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
