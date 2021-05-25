import { Component, OnInit } from '@angular/core';
interface City {
  cityName: string,
  
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  cities: City[];

  selectedCity!: string;
  constructor() {

    this.cities = [
      {cityName: 'Hyderabad '},
      {cityName: 'Chennai' },
      {cityName: 'Pune'},
      {cityName: 'Delhi'},
      {cityName: 'Mumbai'}
  ];
   }

  ngOnInit(): void {
  }

}
