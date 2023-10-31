import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActividadesSubtipos } from 'src/app/entity/actividades-subtipos';
import { ActividadesTipos } from 'src/app/entity/actividades-tipos';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-actividades-subtipos',
  templateUrl: './form-edit-actividades-subtipos.component.html',
  styleUrls: ['./form-edit-actividades-subtipos.component.css']
})
export class FormEditActividadesSubtiposComponent {


  nombreComun: String;
  actividadesSubtipos: ActividadesSubtipos = new ActividadesSubtipos();
  actividadesTipos: ActividadesTipos[];
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  astActividadtipoidVal: boolean = true;
  astDescripcionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    astActividadtipoid: new FormControl('', [Validators.required]),
    astDescripcion: new FormControl('', [Validators.required]),

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditActividadesSubtiposComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['astActividadtipoid'].setValue(data.astActividadtipoid);
    this.camposEditar.controls['astDescripcion'].setValue(data.astDescripcion);

   // this.getActividadesTipos(event);
   this.tablasAuxiliaresService.obtenerActividadesTipos().subscribe((dato) => {
    this.actividadesTipos = dato;
    console.log('TIPO DE EXPEDIENTES');
  });

  }



  actualizarActividadesSubtipos(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.actividadesSubtipos.astActividadsubtipoid=id;
        this.actividadesSubtipos.astActividadtipoid=parseInt(this.camposEditar.controls['astActividadtipoid'].value!);
        this.actividadesSubtipos.astDescripcion = this.camposEditar.controls['astDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarActividadesSubtipos(this.actividadesSubtipos.astActividadsubtipoid, this.actividadesSubtipos).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el Subtipo de actividad: ' + this.actividadesSubtipos.astActividadsubtipoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.actividadesSubtipos.astActividadtipoid=parseInt(this.camposEditar.controls['astActividadtipoid'].value!);
        this.actividadesSubtipos.astDescripcion = this.camposEditar.controls['astDescripcion'].value!;
        this.tablasAuxiliaresService.nuevoActividadesSubtipos(this.actividadesSubtipos).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el Subtipo de actividad ' + dato.astActividadsubtipoid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarActividadesSubtipos(id: number) {
    this.tablasAuxiliaresService.eliminarActividadesSubtipos(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente el Subtipo de actividad: ' + id);
      console.log('nuevo');

    }

    )

  }

  /**
   * obtiene los tipos de actividades para el capo select
   */
  getActividadesTipos(event:any){
     this.tablasAuxiliaresService.obtenerActividadesTipos().subscribe((dato) => {

      if (dato) {
          this.actividadesTipos=dato;

      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */


  validarCampos(): boolean {

    this.astActividadtipoidVal=true;
    this.astDescripcionVal=true;

    if (this.camposEditar.controls['astActividadtipoid']?.hasError('required'))
      this.astActividadtipoidVal = false;

    if (this.camposEditar.controls['astDescripcion']?.hasError('required'))
      this.astDescripcionVal = false;


    if (!this.astActividadtipoidVal  || !this.astDescripcionVal)
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}






