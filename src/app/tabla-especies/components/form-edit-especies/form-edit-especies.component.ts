import { Especies } from './../../../especies';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-especies',
  templateUrl: './form-edit-especies.component.html',
  styleUrls: ['./form-edit-especies.component.css']
})
export class FormEditEspeciesComponent implements OnInit{


  formulario: FormGroup;
  nombreComun:String;
  especie:Especies=new Especies();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete:boolean=false;

  //valida que los campos son obligatorios
  nombreValido:boolean=true;
  especieProtegidaValido:boolean=true;


   public editar = new FormGroup({
     camposEditar: new FormGroup({
       id:new FormControl(''),
       nombreComun: new FormControl('',[Validators.required]),
       especieProtegida: new FormControl('',[Validators.required]),

     })
   });

  constructor(public dialogolo:  MatDialogRef<FormEditEspeciesComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private tablasAuxiliaresService: TablasAuxiliaresService){
    //this.especie.espNombrecomun=data.nombreComun;
    //console.log('nombre comun' + this.nombreComun);
     console.log('constructor form-edit');
     if (null==data.id)
      this.noDelete=true;

  }

  ngOnInit(): void {
     console.log('id'+this.data.espEspecieid);
  }

  actualizarEspecie(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()){
      console.log("id null");
      this.especie.espEspecieid = this.data.id;
      this.especie.espNombrecomun = this.data.nombreComun;
      this.especie.espEspecieprotegida = this.data.especieProtegida;



      console.log("guardarEditar" + this.data.nombreComun);
      this.tablasAuxiliaresService.actualizarEspecie(this.especie.espEspecieid, this.especie).subscribe((dato) => {


        console.log('pppppppppppppppppppppppppppp');
        this.dialogolo.close('Guardado correctamente la especie: '+this.especie.espNombrecomun);
      });

      //this.dialogolo.close('Guardado correctamente');
      //this.tablasAuxiliaresService.mostrarMensaje().subscribe((mensaje) => {  });

      //nuevo
    }
    }else {

       if (this.validarCampos()){
          this.especie.espNombrecomun = this.data.nombreComun;
          this.especie.espEspecieprotegida = this.data.especieProtegida;
          this.tablasAuxiliaresService.nuevaEspecie(this.especie).subscribe((dato) => {

            this.dialogolo.close('Dado de alta correctamente la especie:'+ this.especie.espNombrecomun);
            console.log('nuevo');

          }

          )

       }

    }
  }

  eliminarEspecie(id:number, espNombrecomun:string){
    this.tablasAuxiliaresService.eliminarEspecie(id).subscribe((dato) => {

      this.dialogolo.close('Se ha eliminado corectamente la especie:'+espNombrecomun);
      console.log('nuevo');

    }

    )

  }

  validarCampos():boolean {

    this.nombreValido=true;
    this.especieProtegidaValido=true;

    if (this.editar.get('camposEditar')?.get('nombreComun')?.hasError('required'))
      this.nombreValido = false;

      if (this.editar.get('camposEditar')?.get('especieProtegida')?.hasError('required'))
      this.especieProtegidaValido = false;

      if (!this.nombreValido || !this.especieProtegidaValido)
      return false;
      else
       return true;

  }




  onNoClick(): void {
    this.dialogolo.close('Guardado correctamente');
  }
}
