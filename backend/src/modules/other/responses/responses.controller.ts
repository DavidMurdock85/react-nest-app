import { Controller, Get, Post, Body } from '@nestjs/common';
import { ResponsesService } from './responses.service';

@Controller('response')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Get()
  getAllResponses(): string[] {
    return this.responsesService.getAllResponses();
  }

  @Post()
  addResponse(@Body('response') response: string): void {
    this.responsesService.addResponse(response);
  }
}
