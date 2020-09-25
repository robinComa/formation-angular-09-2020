import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';

import { AnimalsComponent } from './animals.component';

describe('AnimalsComponent', () => {
  let component: AnimalsComponent;
  let fixture: ComponentFixture<AnimalsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalsComponent],
      providers: [AnimalService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have animals', () => {
    const request = httpMock.expectOne(`${environment.api}/animals`);
    expect(request.request.method).toBe('GET');
    request.flush([
      {
        id: 1,
        commentaire: '',
        espece: '',
        naissance: 123,
        name: '',
        picture: '',
        veterinaire: '',
      },
      {
        id: 2,
        commentaire: '',
        espece: '',
        naissance: 123,
        name: '',
        picture: '',
        veterinaire: '',
      },
    ] as Animal[]);
    expect(component.animals.length).toBe(2);
  });
});
