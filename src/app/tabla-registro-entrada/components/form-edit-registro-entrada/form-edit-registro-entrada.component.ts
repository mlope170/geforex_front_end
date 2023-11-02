import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegistroEntrada } from 'src/app/entity/registro-entrada';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-registro-entrada',
  templateUrl: './form-edit-registro-entrada.component.html',
  styleUrls: ['./form-edit-registro-entrada.component.css']
})
export class FormEditRegistroEntradaComponent {


  nombreComun: String;
  registroEntrada: RegistroEntrada = new RegistroEntrada();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  reeDescripcionVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    reeDescripcion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditRegistroEntradaComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['reeDescripcion'].setValue(data.reeDescripcion);
  }



  actualizarRegistroEntrada(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.registroEntrada.reeRegistroentradaid=id;
        this.registroEntrada.reeDescripcion = this.camposEditar.controls['reeDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarRegistroEntrada(this.registroEntrada.reeRegistroentradaid, this.registroEntrada).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el Registo de entrada: ' + this.registroEntrada.reeRegistroentradaid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.registroEntrada.reeDescripcion = this.camposEditar.controls['reeDescripcion'].value!;
        this.tablasAuxiliaresService.nuevoRegistroEntrada(this.registroEntrada).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el Registro de entrada: ' + dato.reeRegistroentradaid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarRegistroEntrada(id: number) {
    this.tablasAuxiliaresService.eliminarRegistroEntrada(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente el Registro de entrada: ' + id);
      console.log('nuevo');

    }

    )

  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */


  validarCampos(): boolean {

    this.reeDescripcionVal=true;

    if (this.camposEditar.controls['reeDescripcion']?.hasError('required'))
      this.reeDescripcionVal = false;


    if (!this.reeDescripcionVal  )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}





