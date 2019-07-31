import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UtilizatorModel} from "../utilizator/shared/utilizator.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

       constructor(private httpClient: HttpClient) {
    }
  /*post these details to Http server return user info if correct*/
     getUtilizatorDetails(username,password){
      return this.httpClient.post('',{
        username,
        password
      }).subscribe()
  }



}
