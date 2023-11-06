import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

 const routes:Routes=[

{
  path:'',
  redirectTo:'parent',
  pathMatch:'full'

},
{
  path:'parent',
  component:ParentComponent
}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
    MatPaginatorModule,
    MatTableModule,
    MatTableModule
  ]
})
export class ParentModule { }
