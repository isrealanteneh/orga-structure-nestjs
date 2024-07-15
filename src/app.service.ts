import { Injectable } from '@nestjs/common';

@Injectable()
export class orgaService {
  home(): string {
    return '*************** Welcome to organization structure system ****************';
  }
}
