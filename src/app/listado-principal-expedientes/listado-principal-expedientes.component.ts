import { TipoExpedientes } from './../entity/tipo-expedientes';
import { DataSource } from '@angular/cdk/table';
import { ExpedientesService } from './../servicios/expedientes.service';
import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';


import { DatosExpediente } from '../datos-expediente';
import { BusquedaListadoPrincipal } from '../busqueda-listado-principal';


export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-listado-principal-expedientes',
  templateUrl: './listado-principal-expedientes.component.html',
  styleUrls: ['./listado-principal-expedientes.component.css']

})
export class ListadoPrincipalExpedientesComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  selected = 'option2';

 hide="false";
  datosExpediente: DatosExpediente[];
  tipoExpedientes: TipoExpedientes[];
  busquedaListadoPrincipal : BusquedaListadoPrincipal = new BusquedaListadoPrincipal();

  //lista: string[] = ['hola', 'que', 'tal', 'estas'];
  dataSource :any;
  displayedColumns: string[] = ['expediente','tipoExpediente','igf','estado', 'finca','fechaInicio','fechaPrevistaFin','fechaFin','provincia'];


  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  // options = this._formBuilder.group({
  //   hideRequired: this.hideRequiredControl,
  //   floatLabel: this.floatLabelControl,
  // });

  formulario: FormGroup;

  public busqueda = new FormGroup({
    parametrosBusqueda: new FormGroup({
      textoLibre: new FormControl(''),
      tipoExp: new FormControl(''),
      fincaId: new FormControl(''),
      coordenadaX: new FormControl(''),
      coordenadaY: new FormControl(''),
      provincia: new FormControl(''),
      municipio: new FormControl(''),
      zona: new FormControl(''),
      poligono: new FormControl(''),
      parcela: new FormControl(''),
      recinto: new FormControl('')
    })
  });

  selectedOption: FormControl = new FormControl();
  constructor(private expedientesService: ExpedientesService) {

  }

  ngOnInit(): void {
    //  this.datosExpediente = [
    //    {
    //      id: 1,
    //      tipoExpediente: '1',
    //      estado: '1',
    //      finca: 1,
    //      fechaInicio: '25/09/2023'
    //    },
    //  ];
    this.dataSource=this.obtenerExpedientes();
  }

  private obtenerExpedientes() {
    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.expedientesService.obtenerExpedientes().subscribe((dato) => {
      this.datosExpediente = dato;
      console.log('pppppppppppppppppppppppppppp');
    });

    //select de tipo de expediente
    this.expedientesService.obtenerTiposExpedientes().subscribe((dato) => {
      this.tipoExpedientes = dato;
      console.log('TIPO DE EXPEDIENTES');
    });

  }

  enviarFormulario(formulario: FormGroup){
    console.log('kkk');
    console.log(formulario.controls['parametrosBusqueda'].value['tipoExp']);

    this.busquedaListadoPrincipal.tipoExp=formulario.controls['parametrosBusqueda'].value['tipoExp']
   // this.busquedaListadoPrincipal=formulario;



     this.expedientesService.obtenerListadoExpBusqueda(this.busquedaListadoPrincipal).subscribe((dato) => {
       this.datosExpediente = dato;
       console.log('TIPO DE EXPEDIENTES');
     });
  }


  getErrorMessage(){
    console.log("ERRPR");  }

  getTipoExpedientes(event: any){
  //   console.log('ENTRO GETTIPOEXPEDIENTES');
  // this.expedientesService.obtenerTiposExpedientes().subscribe((dato) => {
  //   this.tipoExpedientes = dato;
  //   console.log('TIPO DE EXPEDIENTES');
  // });


 }


}
