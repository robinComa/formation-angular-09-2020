import { Injectable } from '@angular/core';
import { Animal } from './animal';

const animals: Animal[] = [
  {
    id: 1,
    name: 'Le chat 1',
    commentaire: '',
    espece: '',
    naissance: 123456789123,
    picture: '',
    veterinaire: '',
  },
  {
    id: 2,
    name: 'Le chat 2',
    commentaire: '',
    espece: '',
    naissance: 123456789123,
    picture: '',
    veterinaire: '',
  },
];

@Injectable()
export class AnimalService {
  constructor() {}

  get(id: number): Animal {
    return animals.find((a) => a.id === id);
  }

  findAll(): Animal[] {
    return animals;
  }
}
