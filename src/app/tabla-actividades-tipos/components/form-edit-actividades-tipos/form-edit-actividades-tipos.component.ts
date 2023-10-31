import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActividadesTipos } from 'src/app/entity/actividades-tipos';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-edit-actividades-tipos',
  templateUrl: './form-edit-actividades-tipos.component.html',
  styleUrls: ['./form-edit-actividades-tipos.component.css']
})
export class FormEditActividadesTiposComponent {


  nombreComun: String;
  actividadesTipos: ActividadesTipos = new ActividadesTipos();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  atiDescripcionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    atiDescripcion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditActividadesTiposComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['atiDescripcion'].setValue(data.atiDescripcion);
  }



  actualizarActividadesTipos(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.actividadesTipos.atiActividadtipoid=id;
        this.actividadesTipos.atiDescripcion = this.camposEditar.controls['atiDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarActividadesTipos(this.actividadesTipos.atiActividadtipoid, this.actividadesTipos).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el tipo de actividad: ' + this.actividadesTipos.atiActividadtipoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.actividadesTipos.atiDescripcion = this.camposEditar.controls['atiDescripcion'].value!;
        this.tablasAuxiliaresService.nuevoActividadesTipos(this.actividadesTipos).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el tipo de actividad ' + dato.atiActividadtipoid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarActividadesTipos(id: number) {
    this.tablasAuxiliaresService.eliminarActividadesTipos(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente el tipo de actividad: ' + id);
      console.log('nuevo');

    },
    (error: HttpErrorResponse) => {
      // Captura la excepción y maneja el error según tus necesidades
      this.dialogolo.close('No se puede borrar el tipo de actividad: '+ id);
    })

  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */


  validarCampos(): boolean {

    this.atiDescripcionVal=true;

    if (this.camposEditar.controls['atiDescripcion']?.hasError('required'))
      this.atiDescripcionVal = false;


    if (!this.atiDescripcionVal  )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}





