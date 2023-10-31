import { MatInputModule } from '@angular/material/input';
import { DataSource } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPrincipalExpedientesComponent } from './listado-principal-expedientes/listado-principal-expedientes.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatSlideToggle } from '@angular/material/slide-toggle';

// El módulo  ReactiveFormsModule  proporciona las funcionalidades y directivas necesarias para trabajar con formularios reactivos, como  FormGroup ,  FormControl ,  Validators , entre otros.
import { ReactiveFormsModule } from '@angular/forms';
import { TablaEspeciesComponent } from './tabla-especies/tabla-especies.component';
import { FormEditEspeciesComponent } from './tabla-especies/components/form-edit-especies/form-edit-especies.component';
//import { DialogAceptarBorrarFormComponent } from './tabla-especies/components/dialog-aceptar-borrar-form/dialog-aceptar-borrar-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { TablaMunicipiosSigpacComponent } from './tabla-municipios-sigpac/tabla-municipios-sigpac.component';
import {MatButtonModule} from '@angular/material/button';
import { FormEditMunicipiosSigpacComponent } from './tabla-municipios-sigpac/components/form-edit-municipios-sigpac/form-edit-municipios-sigpac.component';
import { TablaServiciosTerritorialesComponent } from './tabla-servicios-territoriales/tabla-servicios-territoriales.component';
import { FormEditServiciosTerritorialesComponent } from './tabla-servicios-territoriales/components/form-edit-servicios-territoriales/form-edit-servicios-territoriales.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TablaExpedientesTiposComponent } from './tabla-expedientes-tipos/tabla-expedientes-tipos.component';
import { FormEditExpedientesTiposComponent } from './tabla-expedientes-tipos/components/form-edit-expedientes-tipos/form-edit-expedientes-tipos.component';
import { TablaExpedientesEstadosComponent } from './tabla-expedientes-estados/tabla-expedientes-estados.component';
import { FormEditExpedientesEstadosComponent } from './tabla-expedientes-estados/components/form-edit-expedientes-estados/form-edit-expedientes-estados.component';
import { TablaTiposDocumentosComponent } from './tabla-tipos-documentos/tabla-tipos-documentos.component';
import { FormEditTiposDocumentosComponent } from './tabla-tipos-documentos/components/form-edit-tipos-documentos/form-edit-tipos-documentos.component';
import { TablaTiposDomiciliosComponent } from './tabla-tipos-domicilios/tabla-tipos-domicilios.component';
import { FormEditTiposDomiciliosComponent } from './tabla-tipos-domicilios/components/form-edit-tipos-domicilios/form-edit-tipos-domicilios.component';
import { TablaActividadesComponent } from './tabla-actividades/tabla-actividades.component';
import { FormEditActividadesComponent } from './tabla-actividades/components/form-edit-actividades/form-edit-actividades.component';
import { TablaActividadesTiposComponent } from './tabla-actividades-tipos/tabla-actividades-tipos.component';
import { FormEditActividadesTiposComponent } from './tabla-actividades-tipos/components/form-edit-actividades-tipos/form-edit-actividades-tipos.component';
import { TablaActividadesSubtiposComponent } from './tabla-actividades-subtipos/tabla-actividades-subtipos.component';
import { FormEditActividadesSubtiposComponent } from './tabla-actividades-subtipos/components/form-edit-actividades-subtipos/form-edit-actividades-subtipos.component';








@NgModule({
  declarations: [
    AppComponent,
    ListadoPrincipalExpedientesComponent,
    TablaEspeciesComponent,
    FormEditEspeciesComponent,
   // DialogAceptarBorrarFormComponent,
    MenuPrincipalComponent,
   TablaMunicipiosSigpacComponent,
   TablaServiciosTerritorialesComponent,
   FormEditMunicipiosSigpacComponent,
   FormEditServiciosTerritorialesComponent,
   TablaExpedientesTiposComponent,
   FormEditExpedientesTiposComponent,
   TablaExpedientesEstadosComponent,
   FormEditExpedientesEstadosComponent,
   TablaTiposDocumentosComponent,
   FormEditTiposDocumentosComponent,
   TablaTiposDomiciliosComponent,
   FormEditTiposDomiciliosComponent,
   TablaActividadesComponent,
   FormEditActividadesComponent,
   TablaActividadesTiposComponent,
   FormEditActividadesTiposComponent,
   TablaActividadesSubtiposComponent,
   FormEditActividadesSubtiposComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatTableModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatCardModule,
   MatDialogModule,
   MatSortModule,
   MatMenuModule,
   MatButtonModule,
   MatIconModule,
   MatToolbarModule,
   ReactiveFormsModule

  ],
  exports: [MatFormFieldModule,ReactiveFormsModule,FormsModule,MatInputModule,MatSelectModule,MatSlideToggle],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
