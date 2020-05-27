import {Module} from "@tsed/di";

const rootModule = __dirname;

@Module({
  mount: {
    "/rest": [
      `${rootModule}/controllers/**/*Controller.ts`
    ]
  }
})
export class PublicApiModule {
}
