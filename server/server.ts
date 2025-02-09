import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "../src/App";

const app = express();

// API Route for React Server Function
app.post("/api/increment", async (req, res) => {
  const count = Number(req.query.count || 0);
  res.json({ newCount: count + 1 });
});

app.get("/", (req, res) => {
  const html = fs.readFileSync(
    path.resolve(__dirname, "../public/index.html"),
    "utf8"
  );
  res.send(html);
});

app.get("/react", (req, res) => {
  const { pipe } = renderToPipeableStream(React.createElement(App), {});
  pipe(res);
});

app.use(express.static(path.resolve(__dirname, "../public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
