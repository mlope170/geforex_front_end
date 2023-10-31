import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { TiposDomicilios } from '../entity/tipos-domicilios';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditTiposDomiciliosComponent } from './components/form-edit-tipos-domicilios/form-edit-tipos-domicilios.component';

@Component({
  selector: 'app-tabla-tipos-domicilios',
  templateUrl: './tabla-tipos-domicilios.component.html',
  styleUrls: ['./tabla-tipos-domicilios.component.css']
})
export class TablaTiposDomiciliosComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  tiposDomicilios: TiposDomicilios[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['dotDomiciliotipoid', 'dotDescripcion'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerTiposDomicilios();
  }


  obtenerTiposDomicilios() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerTiposDomicilios().subscribe((dato) => {

      if (dato) {
        this.dataSource.data = dato;

      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(tiposDomicilios: TiposDomicilios) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditTiposDomiciliosComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: tiposDomicilios.dotDomiciliotipoid,
        dotDescripcion:tiposDomicilios.dotDescripcion
      }
    });

    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerTiposDomicilios();
    });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
      this.mensaje="";
      const dialogRef = this.dialog.open(FormEditTiposDomiciliosComponent, {
        width: '350px',
        height: '360px',
        data: {
          id: null,
          dotDescripcion:''
        }
      });

     //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerTiposDomicilios();
      });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}




