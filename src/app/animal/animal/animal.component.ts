import { Component, OnInit } from '@angular/core';

import { Animal } from './../shared/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animal: Animal;

  constructor() {}

  ngOnInit(): void {
    this.animal = {
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
