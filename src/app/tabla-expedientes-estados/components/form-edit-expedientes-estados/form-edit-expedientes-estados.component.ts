import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpedientesEstados } from 'src/app/entity/expedientes-estados';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-expedientes-estados',
  templateUrl: './form-edit-expedientes-estados.component.html',
  styleUrls: ['./form-edit-expedientes-estados.component.css']
})
export class FormEditExpedientesEstadosComponent {


  nombreComun: String;
  expedientesEstados: ExpedientesEstados = new ExpedientesEstados();
  result: ExpedientesEstados = new ExpedientesEstados();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  exeDescripcionVal: boolean = true;
  exePausaresolucionexpedienteVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    exeDescripcion: new FormControl('', [Validators.required]),
    exePausaresolucionexpediente: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditExpedientesEstadosComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['exeDescripcion'].setValue(data.exeDescripcion);
    this.camposEditar.controls['exePausaresolucionexpediente'].setValue(data.exePausaresolucionexpediente.toString());

  }



  actualizarExpedientesEstados(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.expedientesEstados.exeExpedienteestadoid=id;
        this.expedientesEstados.exeDescripcion = this.camposEditar.controls['exeDescripcion'].value!;
        this.expedientesEstados.exePausaresolucionexpediente = parseInt(this.camposEditar.controls['exePausaresolucionexpediente'].value!);



        this.tablasAuxiliaresService.actualizarExpedientesEstados(this.expedientesEstados.exeExpedienteestadoid, this.expedientesEstados).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el estado de expediente: ' + this.expedientesEstados.exeExpedienteestadoid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.expedientesEstados.exeDescripcion = this.camposEditar.controls['exeDescripcion'].value!;
        this.expedientesEstados.exePausaresolucionexpediente = parseInt(this.camposEditar.controls['exePausaresolucionexpediente'].value!);

        this.tablasAuxiliaresService.nuevoExpedientesEstados(this.expedientesEstados).subscribe((dato:any) => {


          this.dialogolo.close('Dato de alta correctamente el estado de expediente: ' + dato.exeExpedienteestadoid);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarExpedientesEstados(id: number) {
    this.tablasAuxiliaresService.eliminarExpedientesEstados(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente el estado de expediente: ' + id);
      console.log('nuevo');

    }

    )

  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */


  validarCampos(): boolean {

    this.exeDescripcionVal=true;
    this.exePausaresolucionexpedienteVal= true;

    if (this.camposEditar.controls['exeDescripcion']?.hasError('required'))
      this.exeDescripcionVal = false;

    if (this.camposEditar.controls['exePausaresolucionexpediente'].hasError('required'))
      this.exePausaresolucionexpedienteVal = false;



    if (!this.exeDescripcionVal || !this.exePausaresolucionexpedienteVal )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}



