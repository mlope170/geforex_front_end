import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Provincias } from 'src/app/entity/provincias';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-provincias',
  templateUrl: './form-edit-provincias.component.html',
  styleUrls: ['./form-edit-provincias.component.css']
})
export class FormEditProvinciasComponent {


  nombreComun: String;
  provincias: Provincias = new Provincias();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  proCodigoVal: boolean = true;
  proProvinciaVal: boolean = true;

  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    proCodigo: new FormControl('', [Validators.required]),
    proProvincia: new FormControl('', [Validators.required])

  });
  //});






  constructor(public dialogolo: MatDialogRef<FormEditProvinciasComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['proCodigo'].setValue(data.proCodigo);
    this.camposEditar.controls['proProvincia'].setValue(data.proProvincia);

  }



  actualizarProvincias(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.provincias.proProvinciaid = id;
        this.provincias.proCodigo = this.camposEditar.controls['proCodigo'].value!;
        this.provincias.proProvincia = this.camposEditar.controls['proProvincia'].value!;

        this.tablasAuxiliaresService.actualizarProvincias(this.provincias.proProvinciaid, this.provincias).subscribe((dato) => {

          this.dialogolo.close('Guardado correctamente la Provincia: ' + this.provincias.proProvinciaid);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.provincias.proCodigo = this.camposEditar.controls['proCodigo'].value!;
        this.provincias.proProvincia = this.camposEditar.controls['proProvincia'].value!;
        //this.actividades.for000Actividadessubtipos.astActividadsubtipoid=parseInt(this.camposEditar.controls['actActividadsubtipoid'].value!);
        this.tablasAuxiliaresService.nuevoProvincias(this.provincias).subscribe((dato: any) => {


          this.dialogolo.close('Dato de alta correctamente la Provincia ' + dato.proProvinciaid);

        }

        )

      }

    }
  }

  eliminarProvincias(id: number) {
    this.tablasAuxiliaresService.eliminarProvincias(id).subscribe((dato) => {

      this.dialogolo.close('Eliminado correctamente la Provincia: ' + id);
      console.log('nuevo');

    },
    (error: HttpErrorResponse) => {
      // Captura la excepción y maneja el error según tus necesidades
      this.dialogolo.close('No se puede borrar la provincia: '+ id);
    })



  }


  validarCampos(): boolean {

    this.proCodigoVal = true;
    this.proProvinciaVal = true;

    if (this.camposEditar.controls['proCodigo']?.hasError('required'))
      this.proCodigoVal = false;

    if (this.camposEditar.controls['proProvincia']?.hasError('required'))
      this.proProvinciaVal = false;

    if (!this.proCodigoVal || !this.proProvinciaVal )
      return false;
    else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('');
  }

}








