import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Animal } from './../shared/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  @Input() animal: Animal;
  @Output() delete = new EventEmitter<Animal>();

  constructor() {}

  ngOnInit(): void {}

  onDelete(): void {
    this.delete.emit(this.animal);
  }
}
