import { Component, ViewChild } from '@angular/core';
import { TiposDoumentos } from '../entity/tipos-documentos';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditTiposDocumentosComponent } from './components/form-edit-tipos-documentos/form-edit-tipos-documentos.component';

@Component({
  selector: 'app-tabla-tipos-documentos',
  templateUrl: './tabla-tipos-documentos.component.html',
  styleUrls: ['./tabla-tipos-documentos.component.css']
})
export class TablaTiposDocumentosComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  tiposDoumentos: TiposDoumentos[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['dotTipodocumentoid', 'dotDescripcion'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerTiposDocumentos();
  }


  obtenerTiposDocumentos() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerTiposDocumentos().subscribe((dato) => {

      if (dato) {
        this.dataSource.data = dato;

      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(tiposDoumentos: TiposDoumentos) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditTiposDocumentosComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: tiposDoumentos.dotTipodocumentoid,
        dotDescripcion:tiposDoumentos.dotDescripcion
      }
    });

    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerTiposDocumentos();
    });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
      this.mensaje="";
      const dialogRef = this.dialog.open(FormEditTiposDocumentosComponent, {
        width: '350px',
        height: '360px',
        data: {
          id: null,
          exeDescripcion:''
        }
      });

     //mensaje dado de alta correctamente
      dialogRef.afterClosed().subscribe(result => {
        this.mensaje = result;
        this.obtenerTiposDocumentos();
      });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}



