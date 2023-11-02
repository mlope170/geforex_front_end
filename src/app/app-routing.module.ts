import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEspeciesComponent } from './tabla-especies/tabla-especies.component';
import { TablaMunicipiosSigpacComponent } from './tabla-municipios-sigpac/tabla-municipios-sigpac.component';
import { TablaServiciosTerritorialesComponent } from './tabla-servicios-territoriales/tabla-servicios-territoriales.component';
import { TablaExpedientesTiposComponent } from './tabla-expedientes-tipos/tabla-expedientes-tipos.component';
import { TablaExpedientesEstadosComponent } from './tabla-expedientes-estados/tabla-expedientes-estados.component';
import { TablaTiposDocumentosComponent } from './tabla-tipos-documentos/tabla-tipos-documentos.component';
import { TablaTiposDomiciliosComponent } from './tabla-tipos-domicilios/tabla-tipos-domicilios.component';
import { TablaActividadesComponent } from './tabla-actividades/tabla-actividades.component';
import { TablaActividadesTiposComponent } from './tabla-actividades-tipos/tabla-actividades-tipos.component';
import { TablaActividadesSubtiposComponent } from './tabla-actividades-subtipos/tabla-actividades-subtipos.component';
import { TablaRegistroEntradaComponent } from './tabla-registro-entrada/tabla-registro-entrada.component';
import { TablaProvinciasComponent } from './tabla-provincias/tabla-provincias.component';
import { TablaPoblacionesComponent } from './tabla-poblaciones/tabla-poblaciones.component';

const routes: Routes = [
  //{path:'',redirectTo:'exp', pathMatch:'full'},
  {path:'rutaTablaRegistroEntrada', component:TablaRegistroEntradaComponent},
  {path:'rutaTablaServiciosTerritoriales', component:TablaServiciosTerritorialesComponent},
  {path:'rutaTablaEspecies', component:TablaEspeciesComponent},
  {path:'rutaTablaProvincias', component:TablaProvinciasComponent},
  {path:'rutaTablaPoblaciones', component:TablaPoblacionesComponent},
  {path:'rutaTablaMunicipiosSigpac', component:TablaMunicipiosSigpacComponent},
  {path:'rutaTablaExpedientesTipos', component:TablaExpedientesTiposComponent},
  {path:'rutaTablaExpedientesEstados', component:TablaExpedientesEstadosComponent},
  {path:'rutaTablaTiposDocumentos', component:TablaTiposDocumentosComponent},
  {path:'rutaTablaTiposDomicilios', component:TablaTiposDomiciliosComponent},
  {path:'rutaTablaActividadesTipos', component:TablaActividadesTiposComponent},
  {path:'rutaTablaActividadesSubtipos', component:TablaActividadesSubtiposComponent},
  {path:'rutaTablaActividades', component:TablaActividadesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
