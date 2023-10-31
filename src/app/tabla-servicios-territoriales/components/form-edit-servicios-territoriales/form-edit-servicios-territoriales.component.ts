import { Component, Inject  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiciosTerritoriales } from 'src/app/entity/serviciosTerritoriales';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';


@Component({
  selector: 'app-form-edit-servicios-territoriales',
  templateUrl: './form-edit-servicios-territoriales.component.html',
  styleUrls: ['./form-edit-servicios-territoriales.component.css']
})
export class FormEditServiciosTerritorialesComponent {

  formulario: FormGroup;
  nombreComun: String;
  serviciosTerritoriales: ServiciosTerritoriales = new ServiciosTerritoriales();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  setCodigoVal: boolean = true;
  setDescripcionVal: boolean = true;

   // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    setCodigo: new FormControl('', [Validators.required]),
    setDescripcion: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditServiciosTerritorialesComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['setCodigo'].setValue(data.setCodigo.toString());
    this.camposEditar.controls['setDescripcion'].setValue(data.setDescripcion);

  }


/**
 *
 * @param id
 */
  actualizarServiciosTerritoriales(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.serviciosTerritoriales.setServicioterritorialid = this.data.id;

        this.serviciosTerritoriales.setCodigo = parseInt(this.camposEditar.controls['setCodigo'].value!);
        this.serviciosTerritoriales.setDescripcion = this.camposEditar.controls['setDescripcion'].value!;

        this.tablasAuxiliaresService.actualizarServiciosTerritoriales(this.serviciosTerritoriales.setServicioterritorialid, this.serviciosTerritoriales).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente el servicio territorial: ' + this.serviciosTerritoriales.setDescripcion);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.serviciosTerritoriales.setCodigo = parseInt(this.camposEditar.controls['setCodigo'].value!);
        this.serviciosTerritoriales.setDescripcion = this.camposEditar.controls['setDescripcion'].value!;

        this.tablasAuxiliaresService.nuevoServiciosTerritoriales(this.serviciosTerritoriales).subscribe((dato) => {

          this.dialogolo.close('Dado de alta correctamente el servicio territorial:' + this.serviciosTerritoriales.setDescripcion);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarServiciosTerritoriales(id: number) {
    this.tablasAuxiliaresService.eliminarServiciosTerritoriales(id).subscribe((dato) => {

      this.dialogolo.close('Se ha eliminado corectamente el servicio territorial:' +  this.camposEditar.controls['setDescripcion'].value);
      console.log('nuevo');

    }

    )

  }

  validarCampos(): boolean {

    this.setCodigoVal = true;
    this.setDescripcionVal = true;

    if (this.camposEditar.controls['setCodigo']?.hasError('required'))
       this.setCodigoVal = false;

     if (this.camposEditar.controls['setDescripcion'].hasError('required'))
       this.setDescripcionVal = false;


     if (!this.setCodigoVal || !this.setDescripcionVal )
       return false;
     else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('Guardado correctamente');
  }

}

