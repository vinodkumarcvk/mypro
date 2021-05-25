import { Component, OnInit } from '@angular/core';

export interface technology {
  name: string;
  id: number;
  type: string;
  email: string;
}


const listOfTech: technology[] = [
  {id: 1, name: 'Oracle', type: "Backend", email: 'Oracle@gmail.com'},
  {id: 2, name: 'Java', type: "Full stack", email: 'java@gmail.com'},
  {id: 3, name: 'web Developer', type: "Fullstack", email: 'WebDev@gmail.com'},
  {id: 4, name: 'Andriod', type: "FrontENd", email: 'And@gmail.com'},
  {id: 5, name: 'React Native', type: "FrontENd", email: 'React@gmail.com'},
  {id: 6, name: 'Flutter', type: "Front End", email: 'Flutter@gmail.com'},
  {id: 7, name: 'React Js', type: "Front End", email: 'React@gmail.com'},
  {id: 8, name: 'Vue js', type:" Front End", email: 'Vue@gmail.com'},
  {id: 9, name: 'Node js', type: "Backend", email: 'node@gmail,com'},
  {id: 10, name: 'Express js', type: "Backend", email: 'Express@gmail.com'},
];
@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  displayedColumns: string[] = ['id', 'name', 'type', 'email'];
  dataSource = listOfTech;

}
