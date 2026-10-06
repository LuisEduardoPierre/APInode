import http from "http";

const PORT = 3000;

const ROUTES ={ 
    "/": "Home",
    "/books": "Books list",
    "/authors": "Authors list",
};

const SERVER = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(ROUTES[req.url] || "Not Found");
});

SERVER.listen(PORT, () => {
    console.log("Server running on port 3000");
});