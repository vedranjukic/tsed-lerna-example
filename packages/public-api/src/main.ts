import { Module } from "@tsed/di";
import { ExampleController } from "./controllers/ExampleController";

@Module({
  imports: [ExampleController], // will work
  mount: {
    "/": [ExampleController], // not sure if this configuration will work
  },
})
export class MyModule {}
