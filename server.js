import http from "http";

const PORT = 3000;

const SERVER = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("First request");
})

SERVER.listen(PORT, () => {
    console.log("Server running on port 3000");
});