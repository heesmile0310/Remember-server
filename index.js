"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
// const app = express();
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
const port = 80;
const ip = "127.0.0.1";
const server = http.createServer(app);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port);
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.get('/', (req, res) => {
    res.status(201).send('ㅎㅇ염 ㅎㅎ ');
});
module.exports = app;
//# sourceMappingURL=index.js.map