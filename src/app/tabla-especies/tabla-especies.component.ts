import { TablasAuxiliaresService } from './../servicios/tablas-auxiliares.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Especies } from '../especies';
import { FormEditEspeciesComponent } from './components/form-edit-especies/form-edit-especies.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-tabla-especies',
  templateUrl: './tabla-especies.component.html',
  styleUrls: ['./tabla-especies.component.css']

})




export class TablaEspeciesComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  especies: Especies[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['espEspecieid', 'espNombrecomun', 'espEspecieprotegida'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerEspecies();
  }


  obtenerEspecies() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    especieVacio: Especies;
    this.tablasAuxiliaresService.obtenerEspecies().subscribe((dato) => {

      if (dato) {
        this.especies = dato;
        this.dataSource.data = dato;
      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


  editar(espe: Especies) {
    console.log("editar");

    const dialogRef = this.dialog.open(FormEditEspeciesComponent, {
      width: '300px',
      height: '400px',
      data: {
        id: espe.espEspecieid,
        nombreComun: espe.espNombrecomun,
        especieProtegida: espe.espEspecieprotegida
      }
    });
    //mensaje guardado correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerEspecies();
    });
    //recargamos la tabla
    this.obtenerEspecies();
  }


  nuevo() {

    const dialogRef = this.dialog.open(FormEditEspeciesComponent, {
      width: '300px',
      height: '400px',
      data: {
        id: null,
        nombreComun: "",
        especieProtegida: ""
      }
    });

    //mensaje dado de alta correctamente
    dialogRef.afterClosed().subscribe(result => {
      this.mensaje = result;
      this.obtenerEspecies();
    });
    //recargamos la tabla
    //this.obtenerEspecies();

  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }

  }
}
