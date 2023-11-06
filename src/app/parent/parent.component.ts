
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { UserService } from '../user.service';
import { parentDatasource } from '../parent.datasourcet';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName', 'tech', 'Location','DateOfJoining'];
  allData:string[]=[]
  
  // dataSource : parentdatasource | undefined ;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;


  datasource!:parentDatasource 
  constructor( private service:UserService) { 
  

  }

  ngOnInit() {
    this.datasource=new parentDatasource(this.service)
   
   this.display();

    
  }


  display(){
    this.datasource.getData();
    this.datasource.entitySubject.subscribe((res)=>{
      console.log("hi"+res)
      this.allData=res
    })
  }
 

}


