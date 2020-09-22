import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';

@NgModule({
  declarations: [AnimalComponent],
  imports: [CommonModule],
  exports: [AnimalComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
