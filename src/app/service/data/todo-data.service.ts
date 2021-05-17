import { Injectable } from '@angular/core';
import {HelloWorldBean} from './welcome-data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) {}

retrieveAllTodos(userName){
    return this.http.get<Todo[]>(`http://localhost:8080/users/felipe/todos`);
    // console.log('Execute hello world bean service.');
  }
}
