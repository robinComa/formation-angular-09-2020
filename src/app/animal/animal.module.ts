import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { AnimalComponent } from './animal/animal.component';
import { AnimalService } from './shared/animal.service';
import { AnimalsComponent } from './animals/animals.component';
import { UppercaseDirective } from './shared/uppercase.directive';
import { TruncatePipe } from './shared/truncate.pipe';
import { DetailComponent } from './detail/detail.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AnimalComponent,
    AnimalsComponent,
    UppercaseDirective,
    TruncatePipe,
    DetailComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AnimalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
  ],
  exports: [AnimalComponent, AnimalsComponent],
  providers: [AnimalService],
})
export class AnimalModule {}
