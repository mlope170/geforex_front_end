import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Actividades } from '../entity/actividades';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditActividadesComponent } from './components/form-edit-actividades/form-edit-actividades.component';

@Component({
  selector: 'app-tabla-actividades',
  templateUrl: './tabla-actividades.component.html',
  styleUrls: ['./tabla-actividades.component.css']
})
export class TablaActividadesComponent  {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  actividades: Actividades[]=[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  //displayedColumns: string[] = ['astActividadsubtipoid', 'tipoActividad','for000Actividadestipo', 'astDescripcion'];
  displayedColumns: string[] = ['actActividadtipoid', 'subtipoActividad', 'actCodigo','actDescripcion'];




  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerActividades();

    // this.actividades.forEach(dat=>{
    //   dat.actActividadid=dat.for000Actividadestipo.atiActividadtipoid;
    // })
    // this.dataSource.data=this.actividadesSubtipos;
  }


   obtenerActividades() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');

     this.tablasAuxiliaresService.obtenerActividades().subscribe(async (dato) => {

      if (dato) {

            this.dataSource.data = dato;
            this.actividades=dato;
            this.actividades.forEach(dat=>{
              dat.actActividadtipoid=dat.actActividadtipoid;
              dat.actDescripcion=dat.actDescripcion;
              dat.subtipoActividad=dat.for000Actividadessubtipos.astActividadsubtipoid+"-"+dat.for000Actividadessubtipos.astDescripcion;
            })
            this.dataSource.data=this.actividades;



      }
      console.log('pppppppppppppppppppppppppppp');
    })



  }

  editar(actividades: any) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditActividadesComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: actividades.actActividadid,
        actastActividadsubtipoid:actividades.for000Actividadessubtipo.astActividadsubtipoid,
        actCodigo:actividades.actCodigo,
        actDescripcion:actividades.actDescripcion,
        //dotDescripcion:tiposDomicilios.dotDescripcion
      }
    });

    //mensaje guardado correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerActividades();
     });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
       this.mensaje="";
       const dialogRef = this.dialog.open(FormEditActividadesComponent, {
         width: '350px',
         height: '360px',
         data: {
          id: null,
        actActividadsubtipoid:'',
        actCodigo:'',
        actDescripcion:'',
         }
       });

     //mensaje dado de alta correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerActividades();
       });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}






