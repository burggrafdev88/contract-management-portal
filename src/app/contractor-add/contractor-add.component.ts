import { Component, OnInit } from '@angular/core';
import {ContractorService} from '../service/data/contractor.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contractor-add',
  templateUrl: './contractor-add.component.html',
  styleUrls: ['./contractor-add.component.css']
})
export class ContractorAddComponent implements OnInit {

  constructor(
    private contractorService: ContractorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.contractorService.add(form.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['contractor-add']);
      }
    );
  }
}
