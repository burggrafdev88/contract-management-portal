import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContractorListComponent} from '../../contractor-list/contractor-list.component';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorListService {

  constructor(
    private http: HttpClient,
    // private deleteOperationSuccessfulEvent$: Subject<boolean> = new Subject()
  ) { }

  getContractors(){
    return this.http.get<ContractorListComponent[]>('http://localhost:8080/contractors');
  }

  delete(id) {
    console.log('Delete in contractor-list service called. ID to delete is: ' + id);
    return this.http.delete(`http://localhost:8080/delete-contractor/` + id, {observe: 'response'}).subscribe(
      responseData => console.log(responseData)
    );
  }

//     // this.deleteOperationSuccessfulEvent$.next(true);
//   }
//
//   // get deleteOperationSuccessfulEvent(): Observable<boolean> {
//   //   return this.deleteOperationSuccessfulEvent$.asObservable();
//   // }

}
