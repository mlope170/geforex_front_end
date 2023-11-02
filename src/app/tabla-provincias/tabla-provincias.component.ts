import { Component, ViewChild } from '@angular/core';
import { Provincias } from '../entity/provincias';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditProvinciasComponent } from './components/form-edit-provincias/form-edit-provincias.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-tabla-provincias',
  templateUrl: './tabla-provincias.component.html',
  styleUrls: ['./tabla-provincias.component.css']
})
export class TablaProvinciasComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  provincias: Provincias[]=[];
  vacio:Provincias=new Provincias();
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  //displayedColumns: string[] = ['astActividadsubtipoid', 'tipoActividad','for000Actividadestipo', 'astDescripcion'];
  displayedColumns: string[] = ['proProvinciaid', 'proCodigo', 'proProvincia'];




  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerProvincias();


  }


  obtenerProvincias() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');

     this.tablasAuxiliaresService.obtenerProvincias().subscribe(async (dato) => {

      if (dato) {

            this.dataSource.data = dato;
      }else{
        //tabla vacia

        this.provincias[0]=this.vacio;
        this.dataSource.data=this.provincias;
      }
      console.log('pppppppppppppppppppppppppppp');
    })



  }

  editar(provincias: any) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditProvinciasComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: provincias.proProvinciaid,
        proCodigo:provincias.proCodigo,
        proProvincia:provincias.proProvincia
      }
    });

    //mensaje guardado correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerProvincias();
     });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
       this.mensaje="";
       const dialogRef = this.dialog.open(FormEditProvinciasComponent, {
         width: '350px',
         height: '360px',
         data: {
          id: null,
        actActividadsubtipoid:'',
        proCodigo:'',
        proProvincias:'',
         }
       });

     //mensaje dado de alta correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerProvincias();
       });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}
