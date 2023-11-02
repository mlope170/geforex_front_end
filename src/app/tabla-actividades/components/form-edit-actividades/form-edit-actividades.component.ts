import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Actividades } from 'src/app/entity/actividades';
import { ActividadesSubtipos } from 'src/app/entity/actividades-subtipos';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-actividades',
  templateUrl: './form-edit-actividades.component.html',
  styleUrls: ['./form-edit-actividades.component.css']
})
export class FormEditActividadesComponent {


  nombreComun: String;
  actividades: Actividades = new Actividades();
  actividadesSubTipos: ActividadesSubtipos[];
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  actActividadsubtipoidVal: boolean = true;
  actCodigoVal: boolean = true;
  actDescripcionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    actActividadsubtipoid: new FormControl('', [Validators.required]),
    actCodigo: new FormControl('', [Validators.required]),
    actDescripcion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditActividadesComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['actActividadsubtipoid'].setValue(data.actActividadsubtipoid);
    this.camposEditar.controls['actCodigo'].setValue(data.actCodigo);
    this.camposEditar.controls['actDescripcion'].setValue(data.actDescripcion);

    // this.getActividadesTipos(event);
    this.tablasAuxiliaresService.obtenerActividadesSubtipos().subscribe((dato) => {
      this.actividadesSubTipos = dato;
    });

  }



  actualizarActividades(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.actividades.actActividadtipoid = id;
        this.actividades.actActividadsubtipoid = parseInt(this.camposEditar.controls['actActividadsubtipoid'].value!);
        this.actividades.actCodigo = this.camposEditar.controls['actCodigo'].value!;
        this.actividades.actDescripcion = this.camposEditar.controls['actDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarActividades(this.actividades.actActividadtipoid, this.actividades).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente la Actividad: ' + this.actividades.actActividadtipoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.actividades.actActividadsubtipoid = parseInt(this.camposEditar.controls['actActividadsubtipoid'].value!);
        this.actividades.actCodigo = this.camposEditar.controls['actCodigo'].value!;
        this.actividades.actDescripcion = this.camposEditar.controls['actDescripcion'].value!;
        //this.actividades.for000Actividadessubtipos.astActividadsubtipoid=parseInt(this.camposEditar.controls['actActividadsubtipoid'].value!);
        this.tablasAuxiliaresService.nuevoActividades(this.actividades).subscribe((dato: any) => {


          this.dialogolo.close('Dato de alta correctamente la Actividad ' + dato.actActividadtipoid);

        }

        )

      }

    }
  }

  eliminarActividades(id: number) {
    this.tablasAuxiliaresService.eliminarActividades(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente la Actividad: ' + id);
      console.log('nuevo');

    }

    )

  }


  validarCampos(): boolean {

    this.actActividadsubtipoidVal = true;
    this.actCodigoVal = true;
    this.actDescripcionVal = true;

    if (this.camposEditar.controls['actActividadsubtipoid']?.hasError('required'))
      this.actActividadsubtipoidVal = false;

    if (this.camposEditar.controls['actCodigo']?.hasError('required'))
      this.actCodigoVal = false;

    if (this.camposEditar.controls['actDescripcion']?.hasError('required'))
      this.actDescripcionVal = false;


    if (!this.actActividadsubtipoidVal || !this.actCodigoVal || !this.actDescripcionVal)
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}







