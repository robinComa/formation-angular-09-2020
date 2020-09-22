import { Injectable } from '@angular/core';
import { Animal } from './animal';

const animals: Animal[] = [
  {
    id: 1,
    name: 'Le chat 1',
    commentaire: '',
    espece: '',
    naissance: 123456789123,
    picture:
      'https://www.18h39.fr/wp-content/uploads/2019/04/chat-trop-chou-600x420.jpg',
    veterinaire: '',
  },
  {
    id: 2,
    name: 'Le chat 2',
    commentaire: '',
    espece: '',
    naissance: 123456789123,
    picture:
      'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F11.2F23.2F297b1cee-88ce-48b3-8e2e-ebef1b35c402.2Ejpeg/1200x1200/quality/80/crop-from/center/proprete-degats-comportements-genants-comment-regler-les-problemes-causes-par-les-chats.jpeg',
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
