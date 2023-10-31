import { Component, ViewChild } from '@angular/core';
import { ExpedientesEstados } from '../entity/expedientes-estados';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditExpedientesEstadosComponent } from './components/form-edit-expedientes-estados/form-edit-expedientes-estados.component';

@Component({
  selector: 'app-tabla-expedientes-estados',
  templateUrl: './tabla-expedientes-estados.component.html',
  styleUrls: ['./tabla-expedientes-estados.component.css']
})
export class TablaExpedientesEstadosComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  expedientesEstados: ExpedientesEstados[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['exeExpedienteestadoid', 'exeDescripcion', 'exePausaresolucionexpediente'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerExpedientesEstados();
  }


  obtenerExpedientesEstados() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerExpedientesEstados().subscribe((dato) => {

      if (dato) {
        this.dataSource.data = dato;

      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(expedientesEstados: ExpedientesEstados) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditExpedientesEstadosComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: expedientesEstados.exeExpedienteestadoid,
        exeDescripcion: expedientesEstados.exeDescripcion,
        exePausaresolucionexpediente: expedientesEstados.exePausaresolucionexpediente
      }
    });

    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerExpedientesEstados();
    });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
      this.mensaje="";
      const dialogRef = this.dialog.open(FormEditExpedientesEstadosComponent, {
        width: '350px',
        height: '360px',
        data: {
          id: null,
          exeDescripcion: '',
          exePausaresolucionexpediente: ''
        }
      });

     //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerExpedientesEstados();
      });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}


