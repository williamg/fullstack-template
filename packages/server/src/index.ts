import { httpServer } from "app";
import config from "config";

const port: number = config.get ("SERVER_PORT");

console.log (`Starting server on ${port}`);
httpServer.listen(port);
