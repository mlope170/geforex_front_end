import { Observable, throwError } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { ActividadesSubtipos } from '../entity/actividades-subtipos';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { MatDialog } from '@angular/material/dialog';
import { FormEditActividadesSubtiposComponent } from './components/form-edit-actividades-subtipos/form-edit-actividades-subtipos.component';

@Component({
  selector: 'app-tabla-actividades-subtipos',
  templateUrl: './tabla-actividades-subtipos.component.html',
  styleUrls: ['./tabla-actividades-subtipos.component.css']
})
export class TablaActividadesSubtiposComponent {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  actividadesSubtipos: ActividadesSubtipos[]=[];
  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  //displayedColumns: string[] = ['astActividadsubtipoid', 'tipoActividad','for000Actividadestipo', 'astDescripcion'];
  displayedColumns: string[] = ['astActividadsubtipoid', 'tipoActividad', 'astDescripcion'];




  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerActividadesSubtipos();

    this.actividadesSubtipos.forEach(dat=>{
      dat.astActividadtipoid=dat.for000Actividadestipo.atiActividadtipoid;
    })
    this.dataSource.data=this.actividadesSubtipos;
  }


   obtenerActividadesSubtipos() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');

     this.tablasAuxiliaresService.obtenerActividadesSubtipos().subscribe(async (dato) => {

      if (dato) {

            this.dataSource.data = dato;
            this.actividadesSubtipos=dato;
            this.actividadesSubtipos.forEach(dat=>{
              dat.astActividadtipoid=dat.for000Actividadestipo.atiActividadtipoid;
              dat.atiDescripcion=dat.for000Actividadestipo.atiDescripcion;
              dat.tipoActividad=dat.for000Actividadestipo.atiActividadtipoid+"-"+dat.for000Actividadestipo.atiDescripcion;
            })
            this.dataSource.data=this.actividadesSubtipos;



      }
      console.log('pppppppppppppppppppppppppppp');
    })



  }

  editar(actividadesSubtipos: any) {
    console.log("editar");
    this.mensaje="";

    const dialogRef = this.dialog.open(FormEditActividadesSubtiposComponent, {
      width: '350px',
      height: '360px',
      data: {
        id: actividadesSubtipos.astActividadsubtipoid,
        astActividadtipoid:actividadesSubtipos.for000Actividadestipo.atiActividadtipoid,
        astDescripcion:actividadesSubtipos.astDescripcion,
        //dotDescripcion:tiposDomicilios.dotDescripcion
      }
    });

    //mensaje guardado correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerActividadesSubtipos();
     });
    //recargamos la tabla
    // this.obtenerExpedientesTipos();
  }


  nuevo() {
       this.mensaje="";
       const dialogRef = this.dialog.open(FormEditActividadesSubtiposComponent, {
         width: '350px',
         height: '360px',
         data: {
           id: null,
           astActividadtipoid:'',
           astDescripcion:''
         }
       });

     //mensaje dado de alta correctamente
       dialogRef.afterClosed().subscribe(result => {
         this.mensaje = result;
         this.obtenerActividadesSubtipos();
       });
    // //recargamos la tabla
    // //this.obtenerEspecies();

  }


}






