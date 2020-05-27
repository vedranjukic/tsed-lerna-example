import {
  Controller,
  Get,
} from "@tsed/common";

@Controller("/example")
export abstract class ExampleController {
  @Get("/")
  public async listExamples(): Promise<string[]> {
    return ["test-1", "test-2", "test-3", "test-4"];
  }
}
