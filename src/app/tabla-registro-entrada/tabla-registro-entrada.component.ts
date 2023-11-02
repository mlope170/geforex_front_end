import { Component, ViewChild } from '@angular/core';
import { RegistroEntrada } from '../entity/registro-entrada';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { FormEditRegistroEntradaComponent } from './components/form-edit-registro-entrada/form-edit-registro-entrada.component';

@Component({
  selector: 'app-tabla-registro-entrada',
  templateUrl: './tabla-registro-entrada.component.html',
  styleUrls: ['./tabla-registro-entrada.component.css']
})
export class TablaRegistroEntradaComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  registroEntrada: RegistroEntrada[];
  vacio:RegistroEntrada= new RegistroEntrada();
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['reeRegistroentradaid', 'reeDescripcion'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerRegistroEntrada();
  }


  obtenerRegistroEntrada() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerRegistroEntrada().subscribe((dato) => {

      if (dato) {
        this.dataSource.data = dato;

      } else{
        //tabla vacia

        this.registroEntrada[0]=this.vacio;
        this.dataSource.data=this.registroEntrada;
      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(registroEntrada: RegistroEntrada) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditRegistroEntradaComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: registroEntrada.reeRegistroentradaid,
        reeDescripcion:registroEntrada.reeDescripcion
      }
    });

    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerRegistroEntrada();
    });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
      this.mensaje="";
      const dialogRef = this.dialog.open(FormEditRegistroEntradaComponent, {
        width: '350px',
        height: '360px',
        data: {
          id: null,
          reeDescripcion:''
        }
      });

     //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerRegistroEntrada();
      });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}





