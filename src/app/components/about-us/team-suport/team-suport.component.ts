import { Component } from '@angular/core';

@Component({
  selector: 'app-team-suport',
  templateUrl: './team-suport.component.html',
  styleUrl: './team-suport.component.css'
})
export class TeamSuportComponent {

  SuportOne = {
    name :'Bill',
    jobTitle : 'Support Manager',
  }

  SuportTwo = {
    name :'Jane',
    jobTitle : 'Support Engineer',
  }

  SuportThree = {
    name :'Mark',
    jobTitle : 'Support Specialist',
  }

  SuportFour = {
    name :'Steve',
    jobTitle : 'Support Analyst',
  }

}
