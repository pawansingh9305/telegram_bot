// admin.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  private apiKey = '22ddff774c59ed66e64e6a73fd4f519d'; // Initial API key
  private users: string[] = []; // Store user data here

  getApiKey(): string {
    return this.apiKey;
  }

  setApiKey(key: string): string {
    this.apiKey = key;
    return 'API key updated successfully';
  }

  getUsers(): string[] {
    return this.users;
  }
}
