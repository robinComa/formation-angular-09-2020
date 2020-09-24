import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  animalForm: FormGroup;
  alreadySave = false;
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
    this.alreadySave = true;
    if (this.animalForm.valid) {
      const animal = this.animalForm.value;
      if (animal.id) {
        this.animalService.update(animal).subscribe(() => {
          this.router.navigate(['/', 'animals', animal.id]);
        });
      } else {
        this.animalService.save(animal).subscribe((newAnimal: Animal) => {
          this.router.navigate(['/', 'animals', newAnimal.id]);
        });
      }
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
    this.animalForm = new FormGroup({
      id: new FormControl(animal.id),
      commentaire: new FormControl(animal.commentaire, [Validators.required]),
      espece: new FormControl(animal.espece, [Validators.required]),
      naissance: new FormControl(animal.naissance, [Validators.required]),
      name: new FormControl(animal.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      picture: new FormControl(animal.picture, [Validators.required]),
      veterinaire: new FormControl(animal.veterinaire, [Validators.required]),
    });
  }
}
