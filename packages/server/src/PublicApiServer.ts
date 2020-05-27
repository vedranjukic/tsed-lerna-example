import {PublicApiModule} from "@lernaexample/public-api";
import {Configuration, Constant, GlobalAcceptMimesMiddleware, Inject, PlatformApplication} from "@tsed/common";
import {Env} from "@tsed/core";
import "@tsed/platform-express";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";

const rootDir = __dirname;

@Configuration({ // Note: ServerSettings will be replace by @Configuration
  rootDir,
  acceptMimes: ["application/json"],
  swagger: [
    {
      path: "/api-docs"
    }
  ],
  imports: [
    PublicApiModule
  ],
  mount: {
    "/rest": [
      `${rootDir}/controllers/**/*Controller.ts`
    ]
  }
})
export class Server {
  @Constant("env")
  env: Env;

  @Inject()
  private app: PlatformApplication;

  @Inject(Configuration)
  private settings: Configuration;

  public $beforeRoutesInit(): void | Promise<any> {
    console.log(this.settings.mount);
    this.app
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true
        })
      );
  }
}
