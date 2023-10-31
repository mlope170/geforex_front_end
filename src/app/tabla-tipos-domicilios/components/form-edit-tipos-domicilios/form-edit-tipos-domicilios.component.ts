import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TiposDomicilios } from 'src/app/entity/tipos-domicilios';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-tipos-domicilios',
  templateUrl: './form-edit-tipos-domicilios.component.html',
  styleUrls: ['./form-edit-tipos-domicilios.component.css']
})
export class FormEditTiposDomiciliosComponent {


  nombreComun: String;
  tiposDomicilios: TiposDomicilios = new TiposDomicilios();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  dotDescripcionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    dotDescripcion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditTiposDomiciliosComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['dotDescripcion'].setValue(data.dotDescripcion);
  }



  actualizarTiposDomicilios(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.tiposDomicilios.dotDomiciliotipoid=id;
        this.tiposDomicilios.dotDescripcion = this.camposEditar.controls['dotDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarTiposDomicilios(this.tiposDomicilios.dotDomiciliotipoid, this.tiposDomicilios).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el tipo de documicili: ' + this.tiposDomicilios.dotDomiciliotipoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.tiposDomicilios.dotDescripcion = this.camposEditar.controls['dotDescripcion'].value!;
        this.tablasAuxiliaresService.nuevoTiposDomicilios(this.tiposDomicilios).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el tipo de documento: ' + dato.dotDomiciliotipoid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarTiposDomicilios(id: number) {
    this.tablasAuxiliaresService.eliminarTiposDomicilios(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente el tipo de documento: ' + id);
      console.log('nuevo');

    }

    )

  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */


  validarCampos(): boolean {

    this.dotDescripcionVal=true;

    if (this.camposEditar.controls['dotDescripcion']?.hasError('required'))
      this.dotDescripcionVal = false;


    if (!this.dotDescripcionVal  )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}




