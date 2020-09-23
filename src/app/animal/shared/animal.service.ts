import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

const api = 'http://localhost:3000';

@Injectable()
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${api}/animals/${id}`);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${api}/animals`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${api}/animals/${id}`);
  }
}
