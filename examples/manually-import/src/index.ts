import { $log, ServerLoader } from "@tsed/common";
import { PublicApiServer } from "./PublicApiServer";

async function bootstrap() {
  const publicApiServer = await ServerLoader.bootstrap(PublicApiServer, {
    port: process.env.PORT,
    httpsPort: false,
  });
  $log.debug('Server initialized')

  await publicApiServer.listen()
  $log.debug(`Server listening on port ${process.env.PORT}`)
}

bootstrap().catch(console.error);
