// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//     console.log("Request received"); 
//     const logData = `Time: ${new Date().toISOString()} | ${req.method} ${req.url}\n`;

//     fs.appendFile("log.txt", logData, (err) => {
//         if (err) {
//             console.log("Error writing log file:", err);
//         } else {
//             console.log("Log written successfully");
//         }
//     });
//     res.end("Server Running...");
// });
// server.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// });



const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "logs.txt");

const server = http.createServer((req, res) => {

    const method = req.method;
    const url = new URL(req.url, `http://${req.headers.host}`);
    const urlPath = url.pathname;


        const time = new Date().toString();
        const line = `${time} - ${method} - ${urlPath}\n`;

        fs.appendFile(filePath, line, (err) => {
            if (err) {
                console.log(err);
            } else {
            res.writeHead(200, "done");
            res.end()
            }
        });

       

});

server.listen(8000, () => {
    console.log("LISTENING AT http://localhost:8000");
});