import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Poblaciones } from 'src/app/entity/poblaciones';
import { Provincias } from 'src/app/entity/provincias';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-poblaciones',
  templateUrl: './form-edit-poblaciones.component.html',
  styleUrls: ['./form-edit-poblaciones.component.css']
})
export class FormEditPoblacionesComponent {


  nombreComun: String;
  poblaciones: Poblaciones = new Poblaciones();
  provincias: Provincias[];
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  pobProvinciaidVal: boolean = true;
  pobPoblacionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    pobProvinciaid: new FormControl('', [Validators.required]),
    pobPoblacion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditPoblacionesComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['pobProvinciaid'].setValue(data.pobProvinciaid);
    this.camposEditar.controls['pobPoblacion'].setValue(data.pobPoblacion);

    // this.getActividadesTipos(event);
    this.tablasAuxiliaresService.obtenerProvincias().subscribe((dato) => {
      this.provincias = dato;
    });

  }



  actualizarPoblaciones(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.poblaciones.pobPoblacionid = id;
        this.poblaciones.pobProvinciaid = parseInt(this.camposEditar.controls['pobProvinciaid'].value!);
        this.poblaciones.pobPoblacion = this.camposEditar.controls['pobPoblacion'].value!;

        this.tablasAuxiliaresService.actualizarPoblaciones(this.poblaciones.pobPoblacionid, this.poblaciones).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente la Población: ' + this.poblaciones.pobPoblacionid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.poblaciones.pobProvinciaid = parseInt(this.camposEditar.controls['pobProvinciaid'].value!);
        this.poblaciones.pobPoblacion = this.camposEditar.controls['pobPoblacion'].value!;

        this.tablasAuxiliaresService.nuevoPoblaciones(this.poblaciones).subscribe((dato: any) => {

          this.dialogolo.close('Dato de alta correctamente la Población ' + dato.pobPoblacionid);

        }

        )

      }

    }
  }

  eliminarPoblaciones(id: number) {
    this.tablasAuxiliaresService.eliminarPoblaciones(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente la Población: ' + id);
      console.log('nuevo');

    },
    (error: HttpErrorResponse) => {
      // Captura la excepción y maneja el error según tus necesidades
      this.dialogolo.close('No se puede borrar la poblacion: '+ id);
    })



  }


  validarCampos(): boolean {

    this.pobProvinciaidVal = true;
    this.pobPoblacionVal = true;

    if (this.camposEditar.controls['pobProvinciaid']?.hasError('required'))
      this.pobProvinciaidVal = false;

    if (this.camposEditar.controls['pobPoblacion']?.hasError('required'))
      this.pobPoblacionVal = false;


    if (!this.pobProvinciaidVal || !this.pobPoblacionVal )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}








