import { Component, ViewChild } from '@angular/core';
import { ActividadesTipos } from '../entity/actividades-tipos';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditActividadesTiposComponent } from './components/form-edit-actividades-tipos/form-edit-actividades-tipos.component';

@Component({
  selector: 'app-tabla-actividades-tipos',
  templateUrl: './tabla-actividades-tipos.component.html',
  styleUrls: ['./tabla-actividades-tipos.component.css']
})
export class TablaActividadesTiposComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  actividadesTipos: ActividadesTipos[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['atiActividadtipoid', 'atiDescripcion'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerActividadesTipos();
  }


  obtenerActividadesTipos() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerActividadesTipos().subscribe((dato) => {

      if (dato) {
        this.dataSource.data = dato;

      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(actividadesTipos: ActividadesTipos) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditActividadesTiposComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: actividadesTipos.atiActividadtipoid,
        atiDescripcion:actividadesTipos.atiDescripcion
      }
    });

    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerActividadesTipos();
    });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
      this.mensaje="";
      const dialogRef = this.dialog.open(FormEditActividadesTiposComponent, {
        width: '350px',
        height: '360px',
        data: {
          id: null,
          atiDescripcion:''
        }
      });

     //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerActividadesTipos();
      });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}





