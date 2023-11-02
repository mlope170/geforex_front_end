import { Component, ViewChild } from '@angular/core';
import { Poblaciones } from '../entity/poblaciones';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditPoblacionesComponent } from './components/form-edit-poblaciones/form-edit-poblaciones.component';

@Component({
  selector: 'app-tabla-poblaciones',
  templateUrl: './tabla-poblaciones.component.html',
  styleUrls: ['./tabla-poblaciones.component.css']
})
export class TablaPoblacionesComponent{

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  poblaciones: Poblaciones[]=[];
  vacio:Poblaciones=new Poblaciones();
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  //displayedColumns: string[] = ['astActividadsubtipoid', 'tipoActividad','for000Actividadestipo', 'astDescripcion'];
  displayedColumns: string[] = ['pobPoblacionid', 'codNombreProvincia', 'pobPoblacion'];




  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerPoblaciones();
  }


  obtenerPoblaciones() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');

     this.tablasAuxiliaresService.obtenerPoblaciones().subscribe(async (dato) => {

      if (dato) {

            this.dataSource.data = dato;
            this.poblaciones=dato;
            this.poblaciones.forEach(dat=>{
              dat.pobPoblacionid=dat.pobPoblacionid;
              dat.pobPoblacion=dat.pobPoblacion;
              dat.codNombreProvincia=dat.for000Provincias.proCodigo+"-"+dat.for000Provincias.proProvincia;
            })
            this.dataSource.data=this.poblaciones;



      }else{
        //tabla vacia

        this.poblaciones[0]=this.vacio;
        this.dataSource.data=this.poblaciones;
      }
      console.log('pppppppppppppppppppppppppppp');
    })



  }

  editar(poblaciones: any) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditPoblacionesComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: poblaciones.pobPoblacionid,
        pobProvinciaid:poblaciones.for000Provincias.proProvinciaid,
        pobPoblacion:poblaciones.pobPoblacion
      }
    });

    //mensaje guardado correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerPoblaciones();
     });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
       this.mensaje="";
       const dialogRef = this.dialog.open(FormEditPoblacionesComponent, {
         width: '350px',
         height: '360px',
         data: {
          id: null,
          pobProvinciaid:'',
          pobPoblacion:''
         }
       });

     //mensaje dado de alta correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerPoblaciones();
       });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}







