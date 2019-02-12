import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';

const Item_Description: Item[]=[
  { checked : false, desc: "Paper Absorbent" ,code: "10006290", details:"what",uom: "KT", quantity:"500",delivery: "15-oct-2018" , template: "-", delete :''},
  { checked : false, desc: "Cetani Number Improver" ,code: "9998214764", details:"what",uom: "KL", quantity:"300",delivery: "15-oct-2018" , template: "-", delete :''}
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click_fn(){
    alert('Fetch data from back-end');
  }
displayedColumns: string[]=['checked','desc','code','details','uom','quantity','delivery','template','delete'];
dataSource= Item_Description;
}
