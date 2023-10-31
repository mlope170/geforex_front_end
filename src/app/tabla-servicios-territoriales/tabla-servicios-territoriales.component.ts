import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ServiciosTerritoriales } from '../entity/serviciosTerritoriales';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditServiciosTerritorialesComponent } from './components/form-edit-servicios-territoriales/form-edit-servicios-territoriales.component';

@Component({
  selector: 'app-tabla-servicios-territoriales',
  templateUrl: './tabla-servicios-territoriales.component.html',
  styleUrls: ['./tabla-servicios-territoriales.component.css']
})
export class TablaServiciosTerritorialesComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  serviciosTerritoriales: ServiciosTerritoriales[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['setServicioterritorialid', 'setCodigo', 'setDescripcion'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerServiciosTerritoriales();
  }


  obtenerServiciosTerritoriales() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
     this.tablasAuxiliaresService.obtenerServiciosTerritoriales().subscribe((dato) => {

       if (dato) {
         this.dataSource.data = dato;
       }
       console.log('pppppppppppppppppppppppppppp');
     });
  }


    editar(serviciosTerritoriales: ServiciosTerritoriales) {
      console.log("editar");

      const dialogRef = this.dialog.open(FormEditServiciosTerritorialesComponent, {
        width: '350px',
        height: '280px',
        data: {
          id: serviciosTerritoriales.setServicioterritorialid,
          setCodigo:serviciosTerritoriales.setCodigo,
          setDescripcion:serviciosTerritoriales.setDescripcion
        }
      });
      //mensaje guardado correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerServiciosTerritoriales();
      });
      //recargamos la tabla
      this.obtenerServiciosTerritoriales();
    }


    nuevo() {

      const dialogRef = this.dialog.open(FormEditServiciosTerritorialesComponent, {
        width: '300px',
        height: '400px',
        data: {
          id: null,
          setCodigo:'',
          setDescripcion:''
        }
      });

      //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerServiciosTerritoriales();
      });
      //recargamos la tabla
      //this.obtenerEspecies();

    }


}

