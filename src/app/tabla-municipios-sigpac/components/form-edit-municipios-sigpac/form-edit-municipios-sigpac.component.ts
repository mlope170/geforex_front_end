import { MunicipiosSigpac } from './../../../entity/municipios-sigpac';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TablasAuxiliaresService } from 'src/app/servicios/tablas-auxiliares.service';

@Component({
  selector: 'app-form-edit-municipios-sigpac',
  templateUrl: './form-edit-municipios-sigpac.component.html',
  styleUrls: ['./form-edit-municipios-sigpac.component.css']
})
export class FormEditMunicipiosSigpacComponent {

  formulario: FormGroup;
  nombreComun: String;
  municipiosSigpac: MunicipiosSigpac = new MunicipiosSigpac();
  //si damos al botón nuevo desactivamos el botón delete
  noDelete: boolean = false;

  //valida que los campos son obligatorios
  codigoProvincia: boolean = true;
  codigoMunicipio: boolean = true;
  nombreMunicipio: boolean = true;

  lista: string[] = ["6", "10"];
  selected: string;


  // public editar = new FormGroup({
  camposEditar = new FormGroup({
    id: new FormControl(''),
    musCodigoprovincia: new FormControl('', [Validators.required]),
    musCodigomunicipio: new FormControl('', [Validators.required]),
    musNombremunicipio: new FormControl('', [Validators.required]),

  });
  //});




  selectedOption: FormControl = new FormControl();

  constructor(public dialogolo: MatDialogRef<FormEditMunicipiosSigpacComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private tablasAuxiliaresService: TablasAuxiliaresService) {

    console.log('constructor form-edit');
    if (null == data.id)
      this.noDelete = true;
    this.selected = data.musCodigoprovincia;

    this.camposEditar.controls['id'].setValue(data.id);
    this.camposEditar.controls['musCodigoprovincia'].setValue(data.musCodigoprovincia.toString());
    this.camposEditar.controls['musCodigomunicipio'].setValue(data.musCodigomunicipio);
    this.camposEditar.controls['musNombremunicipio'].setValue(data.musNombremunicipio);

  }

  ngOnInit(): void {

  }

  actualizarMunicipiosSigpac(id: number) {
    //es una actualización
    if (null != id) {
      if (this.validarCampos()) {
        console.log("id null");
        this.municipiosSigpac.musMunicipiosigpacid = this.data.id;
        this.camposEditar.controls['musCodigoprovincia'].value?.toString;
        this.municipiosSigpac.musCodigoprovincia = parseInt(this.camposEditar.controls['musCodigoprovincia'].value!);
        this.municipiosSigpac.musCodigomunicipio = parseInt(this.camposEditar.controls['musCodigomunicipio'].value!);
        this.municipiosSigpac.musNombremunicipio = this.camposEditar.controls['musNombremunicipio'].value!;



        console.log("guardarEditar" + this.data.nombreComun);
        this.tablasAuxiliaresService.actualizarMunicipioSigpac(this.municipiosSigpac.musMunicipiosigpacid, this.municipiosSigpac).subscribe((dato) => {


          console.log('pppppppppppppppppppppppppppp');
          this.dialogolo.close('Guardado correctamente el municipio SIGPAC: ' + this.municipiosSigpac.musNombremunicipio);
        });


      }

      //nuevo
    } else {

      if (this.validarCampos()) {

        this.municipiosSigpac.musCodigoprovincia = parseInt(this.camposEditar.controls['musCodigoprovincia'].value!);
        this.municipiosSigpac.musCodigomunicipio = parseInt(this.camposEditar.controls['musCodigomunicipio'].value!);
        this.municipiosSigpac.musNombremunicipio = this.camposEditar.controls['musNombremunicipio'].value!;

        this.tablasAuxiliaresService.nuevoMunicipioSigpac(this.municipiosSigpac).subscribe((dato) => {

          this.dialogolo.close('Dado de alta correctamente el municipio:' + this.municipiosSigpac.musNombremunicipio);
          console.log('nuevo');

        }

        )

      }

    }
  }

  eliminarMunicipiosSigpac(id: number) {
    this.tablasAuxiliaresService.eliminarMunicipiosSigpac(id).subscribe((dato) => {

      this.dialogolo.close('Se ha eliminado corectamente el municipio:' +  this.camposEditar.controls['musNombremunicipio'].value);
      console.log('nuevo');

    }

    )

  }

  validarCampos(): boolean {

    this.codigoProvincia = true;
    this.codigoMunicipio = true;
    this.nombreMunicipio = true;

     if (this.camposEditar.controls['musCodigoprovincia']?.hasError('required') || this.camposEditar.controls['musCodigoprovincia'].value=='0')
       this.codigoProvincia = false;

     if (this.camposEditar.controls['musCodigomunicipio'].hasError('required'))
       this.codigoMunicipio = false;

     if (this.camposEditar.controls['musNombremunicipio'].hasError('required'))
       this.nombreMunicipio = false;

     if (!this.codigoProvincia || !this.codigoMunicipio || !this.nombreMunicipio)
       return false;
     else
      return true;

  }




  onNoClick(): void {
    this.dialogolo.close('Guardado correctamente');
  }

}
