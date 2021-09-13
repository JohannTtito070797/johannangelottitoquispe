import { Component, OnInit } from '@angular/core';
import { Personal } from '../../models/Personal';
import {NgForm} from '@angular/forms';
import {PersonalService} from '../../services/personal.service';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-dialogpersonal',
  templateUrl: './dialogpersonal.component.html',
  styleUrls: ['./dialogpersonal.component.scss']
})
export class DialogpersonalComponent implements OnInit {
  
  constructor(public personalservice : PersonalService,
              public dialog:MatDialog,
              private activatedRoute:ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.personalservice.formData={
      idpersonal:null,
      appaterno:'',
      apmaterno:'',
      nombre1:'',
      nombre2:'',
      nombrecompleto:'',
      fchnac:null,
      fchingreso:null,
    }
  }
  
  cargar(){
    console.log("cargado");
  }

  insertarPersonal(form : NgForm){
    this.personalservice.addPersonal(form.value).subscribe(
      res => {console.log(res);
              this.dialog.closeAll();
      }
    )
    console.log('Formulario:',form);
  }

  actualizarPersonal(updatedBody):void{
    // this.personalservice.updatePersonal().subscribe(
      
    
  }
    
  // onSubmit(form : NgForm){
  //   if(form.value.id == null){
  //     this.insertarPersonal('grabar',form);
  //     console.log("guardado")
  //   }else{console.log("error")}
    
  // }
  showDialog(){
    this.dialog.closeAll();
  }
  cancelar(){
    this.dialog.closeAll();
  }
  
}
