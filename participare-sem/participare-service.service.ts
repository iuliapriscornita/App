import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ParticipareSemModel} from './participaresem.model';


@Injectable()
 export class ParticipareService {

  private participareSemUrl= 'http://localhost:8080/api/paticiparesem';
  private participareLabUrl='http://localhost:8080/api/paticiparelab';

  constructor( private httpClient: HttpClient) {

  }

  getParticipareSem(): Observable< ParticipareSemModel[]> {
    return this.httpClient
      .get<Array<ParticipareSemModel>>(this.participareSemUrl);

  }

  getParticipareLab():Observable< ParticipareSemModel[]> {
    return this.httpClient
      .get<Array<ParticipareSemModel>>(this.participareLabUrl);
  }
}
