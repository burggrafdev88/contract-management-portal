import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(
    private http: HttpClient
  ) { }

  add(contractor){
    return this.http.post(`http://localhost:8080/contractors/`, contractor);
  }
}
