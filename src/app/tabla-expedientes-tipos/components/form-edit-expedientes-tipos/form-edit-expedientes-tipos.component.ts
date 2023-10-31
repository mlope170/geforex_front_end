import { ExpedientesService } from './../../../servicios/expedientes.service';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExpedientesTipos } from 'src/app/entity/expedientes-tipos';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';
@Component({
  selector: 'app-form-edit-expedientes-tipos',
  templateUrl: './form-edit-expedientes-tipos.component.html',
  styleUrls: ['./form-edit-expedientes-tipos.component.css']
})
export class FormEditExpedientesTiposComponent {


  nombreComun: String;
  expedientesTipos: ExpedientesTipos = new ExpedientesTipos();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  extLetraVal: boolean = true;
  extDescripcionVal: boolean = true;
  extNumeracionconjuntaVal: boolean = true;
  extPlazoresolucionVal: boolean = true;
  extSilencioadministrativoVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    extLetra: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z\s]+$/)]),
    extDescripcion: new FormControl('', [Validators.required]),
    extNumeracionconjunta: new FormControl('', [Validators.required]),
    extPlazoresolucion: new FormControl('', [Validators.required]),
    extSilencioadministrativo: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditExpedientesTiposComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['extLetra'].setValue(data.extLetra);
    this.camposEditar.controls['extDescripcion'].setValue(data.extDescripcion);
    this.camposEditar.controls['extNumeracionconjunta'].setValue(data.extNumeracionconjunta.toString());
    this.camposEditar.controls['extPlazoresolucion'].setValue(data.extPlazoresolucion);
    this.camposEditar.controls['extSilencioadministrativo'].setValue(data.extSilencioadministrativo.toString());

  }



  actualizarExpedientesTipos(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.expedientesTipos.extExpedientetipoid=id;
        this.expedientesTipos.extLetra = this.camposEditar.controls['extLetra'].value!;
        this.expedientesTipos.extDescripcion = this.camposEditar.controls['extDescripcion'].value!;
        this.expedientesTipos.extNumeracionconjunta = parseInt(this.camposEditar.controls['extNumeracionconjunta'].value!);
        this.expedientesTipos.extPlazoresolucion = parseInt(this.camposEditar.controls['extPlazoresolucion'].value!);
        this.expedientesTipos.extSilencioadministrativo = parseInt(this.camposEditar.controls['extSilencioadministrativo'].value!);


        this.tablasAuxiliaresService.actualizarExpedientesTiposs(this.expedientesTipos.extExpedientetipoid, this.expedientesTipos).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el tipo de expediente: ' + this.expedientesTipos.extLetra);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {


        this.expedientesTipos.extLetra = this.camposEditar.controls['extLetra'].value!;
        this.expedientesTipos.extDescripcion = this.camposEditar.controls['extDescripcion'].value!;
        this.expedientesTipos.extNumeracionconjunta = parseInt(this.camposEditar.controls['extNumeracionconjunta'].value!);
        this.expedientesTipos.extPlazoresolucion = parseInt(this.camposEditar.controls['extPlazoresolucion'].value!);
        this.expedientesTipos.extSilencioadministrativo = parseInt(this.camposEditar.controls['extSilencioadministrativo'].value!);


        this.tablasAuxiliaresService.nuevoExpedientesTipos(this.expedientesTipos).subscribe((dato) => {

          this.dialogolo.close('Dado de alta correctamente el tipo de expediente:' + this.expedientesTipos.extLetra);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarExpedientesTipos(id: number) {
    this.tablasAuxiliaresService.eliminarExpedientesTipos(id).subscribe((dato) => {

      this.dialogolo.close('Se ha eliminado corectamente el tipo de expediente:' + this.camposEditar.controls['extLetra'].value);
      console.log('nuevo');

    }

    )

  }

  /**
   * valida que el campo lentra no admita números
   * @param event
   */

  soloLetras(event: any){
    if (this.camposEditar.controls['extLetra']?.hasError('pattern')){
       window.alert('Solo se permite una letra');
       this.camposEditar.controls['extLetra'].setValue('');

    }

  }

  validarCampos(): boolean {

    this.extLetraVal=true;
    this.extDescripcionVal= true;
    this. extNumeracionconjuntaVal = true;
    this.extPlazoresolucionVal = true;
    this.extSilencioadministrativoVal= true;

    if (this.camposEditar.controls['extLetra']?.hasError('required'))
      this.extLetraVal = false;

    if (this.camposEditar.controls['extDescripcion'].hasError('required'))
      this.extDescripcionVal = false;

    if (this.camposEditar.controls['extNumeracionconjunta'].hasError('required'))
      this.extNumeracionconjuntaVal = false;
    if (this.camposEditar.controls['extPlazoresolucion'].hasError('required'))
      this.extPlazoresolucionVal = false;
    if (this.camposEditar.controls['extSilencioadministrativo'].hasError('required'))
      this.extSilencioadministrativoVal = false;


    if (!this.extLetraVal || !this.extDescripcionVal || !this.extNumeracionconjuntaVal || !this.extPlazoresolucionVal || !this.extSilencioadministrativoVal)
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('Guardado correctamente');
  }

}


