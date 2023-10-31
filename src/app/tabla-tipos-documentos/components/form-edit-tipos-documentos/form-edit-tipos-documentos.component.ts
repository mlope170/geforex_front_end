import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TiposDoumentos } from 'src/app/entity/tipos-documentos';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-tipos-documentos',
  templateUrl: './form-edit-tipos-documentos.component.html',
  styleUrls: ['./form-edit-tipos-documentos.component.css']
})
export class FormEditTiposDocumentosComponent {


  nombreComun: String;
  tiposDocumentos: TiposDoumentos = new TiposDoumentos();
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






  constructor(public dialogolo: MatDialogRef<FormEditTiposDocumentosComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['dotDescripcion'].setValue(data.dotDescripcion);
  }



  actualizarTiposDocumentos(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.tiposDocumentos.dotTipodocumentoid=id;
        this.tiposDocumentos.dotDescripcion = this.camposEditar.controls['dotDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarTiposDocumentos(this.tiposDocumentos.dotTipodocumentoid, this.tiposDocumentos).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el estado de expediente: ' + this.tiposDocumentos.dotTipodocumentoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.tiposDocumentos.dotDescripcion = this.camposEditar.controls['dotDescripcion'].value!;
        this.tablasAuxiliaresService.nuevoTiposDocumentos(this.tiposDocumentos).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el tipo de documento: ' + dato.dotTipodocumentoid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarTiposDocumentos(id: number) {
    this.tablasAuxiliaresService.eliminarTiposDocumentos(id).subscribe((dato) => {

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



