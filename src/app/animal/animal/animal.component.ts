import { Component, OnInit } from '@angular/core';

import { Animal } from './../shared/animal';
import { AnimalService } from './../shared/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  animal: Animal;

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animal = this.animalService.get(1);
  }
}
