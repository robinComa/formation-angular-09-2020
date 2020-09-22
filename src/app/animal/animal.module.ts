import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';
import { AnimalsComponent } from './animals/animals.component';
import { UppercaseDirective } from './shared/uppercase.directive';

@NgModule({
  declarations: [AnimalComponent, AnimalsComponent, UppercaseDirective],
  imports: [CommonModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
