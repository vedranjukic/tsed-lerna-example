import { GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings, Configuration } from '@tsed/common'
import * as bodyParser from 'body-parser'
import * as compress from 'compression'
import * as cookieParser from 'cookie-parser'
import * as methodOverride from 'method-override'
//  manually import
import { ExampleController } from '@lernaexample/public-api'

const rootDir = __dirname

@ServerSettings({
  rootDir,
  acceptMimes: ['application/json'],
  swagger: [
    {
      path: '/api-docs',
    },
  ]
})
//  doesn't work
@Configuration({
  mount: {
    '/': [
      ExampleController
    ]
  }
})
export class PublicApiServer extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      )
  }
}
