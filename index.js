import express from "express";
import { handler as ssrHandler } from "./visible-visual/dist/server/entry.mjs";

const app = express();

app.use(express.static("./visible-visual/dist/client/"));
app.use(ssrHandler);

const port = 8080;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
