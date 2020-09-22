import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable()
export class AnimalService {
  constructor() {}

  get(id: number): Animal {
    return {
      id: 1,
      name: 'Le chat',
      commentaire: '',
      espece: '',
      naissance: 123456789123,
      picture: '',
      veterinaire: '',
    };
  }
}
