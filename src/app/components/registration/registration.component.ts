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
  options: any;
  selectedCity!: string;
  value:number=10;

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
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
  };
  }


  handleChange(e:any){
   var  ischecked = e.checked
  }

  display: boolean = false;

  showDialog() {
      this.display = true;
  }


}
