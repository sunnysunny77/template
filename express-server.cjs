const express = require("express");
const cors = require("cors");

require('dotenv').config({ path: ".env.exp" });

const PORT = process.env.PORT;
const app = express();
const allowedOrigins = [process.env.ORIGIN];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn("Blocked CORS request from:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
}));

app.get("/endpoint", (req, res) => {

    res.json({ message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server live: http://localhost:${PORT}`);
});