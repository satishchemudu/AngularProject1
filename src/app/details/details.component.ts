import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { PeriodicElement } from '../periodic-element';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  elm: PeriodicElement[]=[
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];

  dataSource = new MatTableDataSource(this.elm);

  
  constructor(public dialog: MatDialog) {}

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  ngOnInit() 
  {
    this.dataSource.sort=this.sort;     
    this.dataSource.paginator=this.paginator;
  }


  btnDelete(elm)
  {
    const dialogRef = this.dialog.open(CustomAlertComponent, {
        width: '250px',
        data: {title: "Alert test", message: "This is testing by satish ......"}
      });
  
      dialogRef.afterClosed().subscribe(result => 
        {
        console.log('The dialog was closed');
        alert(result);
      });   
  }
  // export interface PeriodicElement {
  //   name: string;
  //   position: number;
  //   weight: number;
  //   symbol: string;
  // }
}
