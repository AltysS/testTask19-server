import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRequestIndex(index: number): any {
    const randomNumber = Math.floor(Math.random() * 901) + 100;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(index);
      }, randomNumber);
    });
  }
}
