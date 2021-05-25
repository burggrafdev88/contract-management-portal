import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContractorListService} from '../service/data/contractor-list.service';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.css']
})
export class ContractorListComponent implements OnInit {
  contractors: ContractorListComponent[];

  constructor(
    private contractorListService: ContractorListService,
    // public id: number,
    // public street: string,
    // public city: string,
    // public state: string,
    // public zip: string,
    // public dateAdded: string
  ) { }

  ngOnInit(): void {
    this.contractorListService.getContractors().subscribe(
      response => {
        console.log(response);
        this.contractors = response;
      }
    );
  }





}
