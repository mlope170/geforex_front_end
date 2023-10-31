import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ExpedientesTipos } from '../entity/expedientes-tipos';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditExpedientesTiposComponent } from './components/form-edit-expedientes-tipos/form-edit-expedientes-tipos.component';

@Component({
  selector: 'app-tabla-expedientes-tipos',
  templateUrl: './tabla-expedientes-tipos.component.html',
  styleUrls: ['./tabla-expedientes-tipos.component.css']
})
export class TablaExpedientesTiposComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  expedientesTipos: ExpedientesTipos[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['extExpedientetipoid', 'extLetra','extDescripcion','extNumeracionconjunta','extPlazoresolucion','extSilencioadministrativo'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerExpedientesTipos();
  }


  obtenerExpedientesTipos() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
     this.tablasAuxiliaresService.obtenerExpedientesTipos().subscribe((dato) => {

       if (dato) {
         this.dataSource.data = dato;
       }
       console.log('pppppppppppppppppppppppppppp');
     });
  }


    editar(expedientesTipos: ExpedientesTipos) {
      console.log("editar");

       const dialogRef = this.dialog.open(FormEditExpedientesTiposComponent, {
         width: '350px',
         height: '450px',
         data: {
           id: expedientesTipos.extExpedientetipoid,
           extLetra:expedientesTipos.extLetra,
           extDescripcion:expedientesTipos.extDescripcion,
           extNumeracionconjunta:expedientesTipos.extNumeracionconjunta,
           extPlazoresolucion:expedientesTipos.extPlazoresolucion,
           extSilencioadministrativo:expedientesTipos.extSilencioadministrativo
       }
      });

          //mensaje guardado correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerExpedientesTipos();
       });
      //recargamos la tabla
      this.obtenerExpedientesTipos();
    }


    nuevo() {

       const dialogRef = this.dialog.open(FormEditExpedientesTiposComponent, {
         width: '350px',
         height: '450px',
         data: {
           id: null,
           extLetra:'',
           extDescripcion:'',
           extNumeracionconjunta:'',
           extPlazoresolucion:'',
           extSilencioadministrativo:''
         }
       });

      //mensaje dado de alta correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerExpedientesTipos();
       });
      //recargamos la tabla
      //this.obtenerEspecies();

    }


}


