import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  animal: Animal;
  private routeSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animalService: AnimalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      const id = +params.id;
      if (id) {
        this.animalService.get(id).subscribe((animal) => {
          this.initForm(animal);
        });
      } else {
        this.initForm();
      }
    });
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  onSubmit(): void {
    if (this.animal.id) {
      this.animalService.update(this.animal).subscribe(() => {
        this.router.navigate(['/', 'animals', this.animal.id]);
      });
    } else {
      this.animalService.save(this.animal).subscribe((animal: Animal) => {
        this.router.navigate(['/', 'animals', animal.id]);
      });
    }
  }

  private initForm(
    animal: Animal = {
      id: null,
      commentaire: '',
      espece: '',
      naissance: null,
      name,
      picture: '',
      veterinaire: '',
    }
  ): void {
    this.animal = animal;
  }
}
