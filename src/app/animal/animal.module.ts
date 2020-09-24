import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';
import { AnimalsComponent } from './animals/animals.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    UppercaseDirective,
    TruncatePipe,
    DetailComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
