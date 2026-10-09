//import http from "http";

import "dotenv/config";
import APP from "./src/app.js";


const PORT = 3000;

APP.listen(PORT, () => {
    console.log("Server running on port 3000");
});