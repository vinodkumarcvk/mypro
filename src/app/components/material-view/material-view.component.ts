import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';



interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})

export class MaterialViewComponent implements OnInit {
  checked = false;
  indeterminate = false;
  showFiller = false;
  disabled = false;




  favoriteSeason='' ; 
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(public dialog: MatDialog, ) { }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  panelOpenState = false;
  ngOnInit(): void {
  }
  
}



