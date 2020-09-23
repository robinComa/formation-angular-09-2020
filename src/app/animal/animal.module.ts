import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';
import { AnimalsComponent } from './animals/animals.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    UppercaseDirective,
    TruncatePipe,
  ],
  imports: [CommonModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
