import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponsesService {
  private readonly responses: string[] = [];

  getAllResponses(): string[] {
    return this.responses;
  }

  addResponse(response: string): void {
    this.responses.push(response);
  }
}
