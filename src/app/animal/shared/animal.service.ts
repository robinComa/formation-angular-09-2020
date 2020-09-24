import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { environment } from 'src/environments/environment';

@Injectable()
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`${environment.api}/animals/${id}`);
  }

  findAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${environment.api}/animals`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.api}/animals/${id}`);
  }

  save(animal: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>(`${environment.api}/animals`, animal);
  }

  update(animal: Animal): Observable<void> {
    return this.httpClient.put<void>(
      `${environment.api}/animals/${animal.id}`,
      animal
    );
  }
}
