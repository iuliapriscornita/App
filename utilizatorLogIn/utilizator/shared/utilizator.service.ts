import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilizatorModel} from "./utilizator.model";
import {Observable, pipe} from "rxjs";
import {map} from "rxjs/operators";


@Injectable()
export class UtilizatorService {

  private utilizatorUrl = 'http://localhost:8080/api/autentificareutilizator';


  constructor(private httpClient: HttpClient) {
  }

    getUtilizatorDetails(username,password):Observable<UtilizatorModel[]>{
    return this.httpClient.get<Array<UtilizatorModel>>(this.utilizatorUrl);
  }

}
