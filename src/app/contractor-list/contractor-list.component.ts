import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContractorListService} from '../service/data/contractor-list.service';
import {ContractorService} from '../service/data/contractor.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.css']
})
export class ContractorListComponent implements OnInit {
  contractors: ContractorListComponent[];
  number = 0;
  // private deleteOperationSuccessfulSubscription: Subscription;

  constructor(
    private contractorListService: ContractorListService,
    private contractorService: ContractorService
  ) { }

  ngOnInit(): void {
    this.fetchData();
    // this.deleteOperationSuccessfulSubscription = this.contractorListService.deleteOperationSuccessfulEvent.subscribe(isSuccessful => {
    //   if (isSuccessful === true){
    //     this.fetchData();
    //   }
    // });
  }

  onDelete(id){
    console.log('onDelete for called');
    if (confirm('Are you sure you want to delete this contractor?')){
      this.contractorListService.delete(id);
    }
  }

  fetchData(){
    this.contractorListService.getContractors().subscribe(
      response => {
        console.log(response);
        this.contractors = response;
      }
    );
  }

}
