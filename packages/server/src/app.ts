import express from "express";
import bodyParser from "body-parser";
import http from "http";
import path from "path";

import { IncrementRequest, IncrementResponse } from "@app/common";

import increment from "increment";

const app = express();
app.use(bodyParser.json ());

let total = 0;

app.post("/api/increment", function (req, res) {
  let incReq: IncrementRequest = req.body as IncrementRequest;
  let incRes: IncrementResponse = increment (total, incReq);
  total = incRes.total;
  res.json (incRes);
});

app.get("/api/increment", function (req, res) {
  res.json ({ total: total });
});

app.use(function (req, res) {
  res.sendFile (path.resolve (path.join (__dirname, "/../public/index.html")), function (err) {
    if (err) {
      console.log (err);
      res.status(500).send(err);
    }
  });
});



export const httpServer = http.createServer (app);
