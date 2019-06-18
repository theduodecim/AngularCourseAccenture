import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { environmentProd } from 'src/environments/environment.prod';
import { map, catchError, delay } from 'rxjs/operators';
import { Dolar } from './dolar';
@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(public Http: HttpClient) { }


  getMocks(): Observable<Dolar> {
    return this.Http.get(environment.getDolarAPI)
      .pipe(
        delay(3000),
        map((respuesta: Dolar) => {
          return respuesta;
        }),
        catchError((error) => throwError(error))
      );
  }

  getProductionMocks(): Observable<Dolar> {
    return this.Http.get(environmentProd.getDolarAPI)
      .pipe(
        delay(3000),
        map((respuesta: Dolar) => {
          return respuesta;
        }),
        catchError((error) => throwError(error))
      );
  }






}
