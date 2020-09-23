import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[];

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.fetchAnimals();
  }

  onDelete(animal: Animal): void {
    this.animalService.delete(animal.id).subscribe(() => this.fetchAnimals());
  }

  private fetchAnimals(): void {
    this.animalService
      .findAll()
      .subscribe((animals) => (this.animals = animals));
  }
}
