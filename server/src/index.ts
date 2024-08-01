import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { container } from "@shared/config";

dotenv.config();

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.json());
});

const app = server.build();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
