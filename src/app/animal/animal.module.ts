import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [AnimalComponent, AnimalsComponent],
  imports: [CommonModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
