import { Container } from "inversify";
import { interfaces } from "inversify-express-utils";
import { buildProviderModule } from "inversify-binding-decorators";
import { UserModule } from "@modules/user";
import { TYPES } from "./";


const container = new Container();

container.load(UserModule, buildProviderModule());
// container.load(buildProviderModule());

export default container;