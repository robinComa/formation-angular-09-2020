import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
  imports: [CommonModule, HttpClientModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
