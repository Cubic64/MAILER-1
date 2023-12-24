const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

server.listen(process.env.PORT || 3030);

var nodemailer = require('nodemailer')

const Transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gamil.com",
    auth:{
        user: 'siddhanthnaidu81@gmail.com',
        pass:'ovjx idit eyvr akxs'
    },
    secure: true,
})