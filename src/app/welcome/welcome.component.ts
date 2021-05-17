import { Component, OnInit } from '@angular/core';
import {WelcomeDataService} from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  welcomeMessageFromService: string;
  name = 'Felipe';

  constructor(
    private service: WelcomeDataService ) {
  }

  ngOnInit(): void {
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );  // subscribe is an asynchronous call

    // console.log('Get welcome message!');
  }

  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );  // subscribe is an asynchronous call

    // console.log('Get welcome message!');
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }



}
