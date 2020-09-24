import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  animal: Animal;

  private routeSubscription: Subscription;

  constructor(
    private animalService: AnimalService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = +params.id;
      this.animalService.get(id).subscribe((animal) => (this.animal = animal));
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onDelete(animal: Animal): void {
    this.animalService
      .delete(animal.id)
      .subscribe(() => this.router.navigate(['/']));
  }
}
