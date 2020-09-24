import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params.id;
    this.animalService.get(id).subscribe((animal) => (this.animal = animal));
  }

  onDelete(animal: Animal): void {
    this.animalService
      .delete(animal.id)
      .subscribe(() => this.router.navigate(['/']));
  }
}
