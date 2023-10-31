import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MunicipiosSigpac } from '../entity/municipios-sigpac';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TablasAuxiliaresService } from '../servicios/tablas-auxiliares.service';
import { FormEditEspeciesComponent } from '../tabla-especies/components/form-edit-especies/form-edit-especies.component';
import { FormEditMunicipiosSigpacComponent } from './components/form-edit-municipios-sigpac/form-edit-municipios-sigpac.component';


@Component({
  selector: 'app-tabla-municipios-sigpac',
  templateUrl: './tabla-municipios-sigpac.component.html',
  styleUrls: ['./tabla-municipios-sigpac.component.css']
})
export class TablaMunicipiosSigpacComponent implements AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;



  //dataSource: any;
  municipiosSigpac: MunicipiosSigpac[];

  mensaje: String;




  dataSource = new MatTableDataSource<any>([]);


  displayedColumns: string[] = ['musMunicipiosigpacid', 'musCodigoprovincia', 'musCodigomunicipio','musNombremunicipio'];





  constructor(private tablasAuxiliaresService: TablasAuxiliaresService, public dialog: MatDialog, private _liveAnnouncer: LiveAnnouncer) {

  }

  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.obtenerMunicipiosSigpac();
  }


  obtenerMunicipiosSigpac() {

    console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
    this.tablasAuxiliaresService.obtenerMunicipiosSigpac().subscribe((dato) => {

      if (dato) {
        this.municipiosSigpac = dato;
        this.dataSource.data = dato;
      }
      console.log('pppppppppppppppppppppppppppp');
    });
  }


   editar(municipiosSigpac: MunicipiosSigpac) {
     console.log("editar");

     const dialogRef = this.dialog.open(FormEditMunicipiosSigpacComponent, {
       width: '350px',
       height: '500px',
       data: {
         id: municipiosSigpac.musMunicipiosigpacid,
         musCodigoprovincia:municipiosSigpac.musCodigoprovincia,
         musCodigomunicipio:municipiosSigpac.musCodigomunicipio,
         musNombremunicipio:municipiosSigpac.musNombremunicipio
       }
     });
     //mensaje guardado correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerMunicipiosSigpac();
     });
     //recargamos la tabla
     this.obtenerMunicipiosSigpac();
   }


   nuevo() {

     const dialogRef = this.dialog.open(FormEditMunicipiosSigpacComponent, {
       width: '300px',
       height: '400px',
       data: {
        id: null,
        musCodigoprovincia:'',
        musCodigomunicipio:'',
        musNombremunicipio:''
       }
     });

     //mensaje dado de alta correctamente
     dialogRef.afterClosed().subscribe(result => {
       this.mensaje = result;
       this.obtenerMunicipiosSigpac();
     });
     //recargamos la tabla
     //this.obtenerEspecies();

   }


}

