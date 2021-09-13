import { Component, Input, OnInit } from '@angular/core';
import {PersonalService} from '../../services/personal.service';
import {MatTableDataSource} from '@angular/material/table';
import { Personal } from '../../models/Personal';
import {DialogpersonalComponent} from '../dialogpersonal/dialogpersonal.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import { FormGroup } from '@angular/forms';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { EditComponent } from '../edit/edit.component';
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  selection = new SelectionModel<Personal>(true, []);
  

  @Input('ELEMENT_DATA') ELEMENT_DATA !:Personal[];

  displayedColumns: string[] = [
    'IdPersonal',
    'ApPaterno',
    'ApMaterno',
    'Nombre1',
    'Nombre2',
    'NombreCompleto',
    'FchNac',
    'FchIngreso',
    'Accion'
  ];
  dataSource = new MatTableDataSource<Personal>(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  constructor(private SPersonal : PersonalService,public dialog:MatDialog) {
    
   }

  ngOnInit(): void {
    this.listarPersonal();
  }

  listarPersonal(){
    this.SPersonal.getPersonal().subscribe(
      x => {
        console.log("Datos Personal Cargados");
        this.dataSource.data = x as Personal[];
            
      },
      err => console.log(err)
    )
    
  }

  showDialog(){
    this.dialog.open(DialogpersonalComponent);
  }

  
  onDelete(id:number){
      
      this.SPersonal.deletePersonal(id).subscribe(
        res=>{
          console.log("eliminado");
          
        },error=>{
          console.log("error");
        }
      )
    
  }

  /*EDITAR */


  
  

}
