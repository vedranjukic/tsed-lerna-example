import {$log} from "@tsed/common";
import {PlatformExpress} from "@tsed/platform-express";
import {Server} from "./PublicApiServer";

async function bootstrap() {
  const server = await PlatformExpress.bootstrap(Server, {
    port: process.env.PORT,
    httpsPort: false
  });
  $log.debug("Server initialized");

  await server.listen();
  $log.debug(`Server listening on port ${process.env.PORT}`);
}

bootstrap().catch(console.error);
