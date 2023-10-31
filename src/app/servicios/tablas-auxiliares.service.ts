import { TiposDoumentos } from './../entity/tipos-documentos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especies } from '../especies';
import { MunicipiosSigpac } from '../entity/municipios-sigpac';
import { ServiciosTerritoriales } from '../entity/serviciosTerritoriales';
import { ExpedientesTipos } from '../entity/expedientes-tipos';
import { ExpedientesEstados } from '../entity/expedientes-estados';
import { TiposDomicilios } from '../entity/tipos-domicilios';
import { Actividades } from '../entity/actividades';
import { ActividadesTipos } from '../entity/actividades-tipos';
import { ActividadesSubtipos } from '../entity/actividades-subtipos';


@Injectable({
  providedIn: 'root'
})
export class TablasAuxiliaresService {
// URL que obtiene el listado de expedientes
private baseURL="http://localhost:8080/esp/listar";
private baseURL2="http://localhost:8080/ext/listar";
private baseURL3="http://localhost:8080/esp/actualizar";
private baseURL4="http://localhost:8080/esp/mensaje";
private baseURL5="http://localhost:8080/esp/nuevo";
private baseURL6="http://localhost:8080/esp/eliminar";
//url municipios sigpac
private baseURLmus="http://localhost:8080/mus/listar"
private baseURLmus2="http://localhost:8080/mus/actualizar"
private baseURLmus3="http://localhost:8080/mus/nuevo"
private baseURLmus4="http://localhost:8080/mus/eliminar"
//url servicios territoriales
private baseURLset="http://localhost:8080/set/listar"
private baseURLset2="http://localhost:8080/set/actualizar"
private baseURLset3="http://localhost:8080/set/nuevo"
private baseURLset4="http://localhost:8080/set/eliminar"

//url expedientes tipos
private baseURLext="http://localhost:8080/ext/listar"
private baseURLext2="http://localhost:8080/ext/actualizar"
private baseURLext3="http://localhost:8080/ext/nuevo"
private baseURLext4="http://localhost:8080/ext/eliminar"

//url expedientes estados
private baseURLexe="http://localhost:8080/exe/listar"
private baseURLexe2="http://localhost:8080/exe/actualizar"
private baseURLexe3="http://localhost:8080/exe/nuevo"
private baseURLexe4="http://localhost:8080/exe/eliminar"

//url tipos documentos
private baseURLdot="http://localhost:8080/dot/listar"
private baseURLdot2="http://localhost:8080/dot/actualizar"
private baseURLdot3="http://localhost:8080/dot/nuevo"
private baseURLdot4="http://localhost:8080/dot/eliminar"

//url tipos domicilios
private baseURLdot1="http://localhost:8080/dot1/listar"
private baseURLdot12="http://localhost:8080/dot1/actualizar"
private baseURLdot13="http://localhost:8080/dot1/nuevo"
private baseURLdot14="http://localhost:8080/dot1/eliminar"
//url actividades

private baseURLact="http://localhost:8080/act/listar"
private baseURLact2="http://localhost:8080/act/actualizar"
private baseURLact3="http://localhost:8080/act/nuevo"
private baseURLact4="http://localhost:8080/act/eliminar"

//url actividades tipos
private baseURLati="http://localhost:8080/ati/listar"
private baseURLati2="http://localhost:8080/ati/actualizar"
private baseURLati3="http://localhost:8080/ati/nuevo"
private baseURLati4="http://localhost:8080/ati/eliminar"

//url actividades tipos
private baseURLast="http://localhost:8080/ast/listar"
private baseURLast2="http://localhost:8080/ast/actualizar"
private baseURLast3="http://localhost:8080/ast/nuevo"
private baseURLast4="http://localhost:8080/ast/eliminar"



constructor(private httpClient: HttpClient) { }

//
obtenerEspecies():Observable<Especies[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<Especies[]>(`${this.baseURL}`);
}

actualizarEspecie(id: number, especie: Especies){
    return this.httpClient.put(`${this.baseURL3}/${id}`,especie)


}

mostrarMensaje(){
  return this.httpClient.get<String>(`${this.baseURL4}`);

}

nuevaEspecie(especie: Especies){
  return this.httpClient.post(`${this.baseURL5}`,especie)


}

eliminarEspecie(id:number){
  return this.httpClient.delete(`${this.baseURL6}/${id}`);
}

//TABLA MUNICIPIOS SIGPAC

obtenerMunicipiosSigpac():Observable<MunicipiosSigpac[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<MunicipiosSigpac[]>(`${this.baseURLmus}`);
}


actualizarMunicipioSigpac(id: number, muicipioSigpac: MunicipiosSigpac){
  return this.httpClient.put(`${this.baseURLmus2}/${id}`,muicipioSigpac)


}


nuevoMunicipioSigpac(municipiosSigpac: MunicipiosSigpac){
  return this.httpClient.post(`${this.baseURLmus3}`,municipiosSigpac)


}

eliminarMunicipiosSigpac(id:number){
  return this.httpClient.delete(`${this.baseURLmus4}/${id}`);
}

//TABLA SERVICIOS TERRITORIALES

obtenerServiciosTerritoriales():Observable<ServiciosTerritoriales[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<ServiciosTerritoriales[]>(`${this.baseURLset}`);
}


actualizarServiciosTerritoriales(id: number, serviciosTerritoriales: ServiciosTerritoriales){
  return this.httpClient.put(`${this.baseURLset2}/${id}`,serviciosTerritoriales)


}
nuevoServiciosTerritoriales(serviciosTerritoriales: ServiciosTerritoriales){
  return this.httpClient.post(`${this.baseURLset3}`,serviciosTerritoriales)


}

eliminarServiciosTerritoriales(id:number){
  return this.httpClient.delete(`${this.baseURLset4}/${id}`);
}

// TABLA EXPEDIENTES TIPOS

obtenerExpedientesTipos():Observable<ExpedientesTipos[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<ExpedientesTipos[]>(`${this.baseURLext}`);
}


actualizarExpedientesTiposs(id: number, expedientesTipos: ExpedientesTipos){
  return this.httpClient.put(`${this.baseURLext2}/${id}`,expedientesTipos)


}
nuevoExpedientesTipos(expedientesTipos: ExpedientesTipos){
  return this.httpClient.post(`${this.baseURLext3}`,expedientesTipos)


}

eliminarExpedientesTipos(id:number){
  return this.httpClient.delete(`${this.baseURLext4}/${id}`);
}

//TABLA EXPEDIENTES ESTADOS
obtenerExpedientesEstados():Observable<ExpedientesEstados[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<ExpedientesEstados[]>(`${this.baseURLexe}`);
}


actualizarExpedientesEstados(id: number, expedientesEstados: ExpedientesEstados){
  return this.httpClient.put(`${this.baseURLexe2}/${id}`,expedientesEstados)


}
nuevoExpedientesEstados(expedientesEstados: ExpedientesEstados){
  return this.httpClient.post(`${this.baseURLexe3}`,expedientesEstados)


}

eliminarExpedientesEstados(id:number){
  return this.httpClient.delete(`${this.baseURLexe4}/${id}`);
}

//TABLA TIPOS DOCUMENTOS

obtenerTiposDocumentos():Observable<TiposDoumentos[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<TiposDoumentos[]>(`${this.baseURLdot}`);
}


actualizarTiposDocumentos(id: number, tiposDoumentos: TiposDoumentos){
  return this.httpClient.put(`${this.baseURLdot2}/${id}`,tiposDoumentos)


}
nuevoTiposDocumentos(tiposDoumentos: TiposDoumentos){
  return this.httpClient.post(`${this.baseURLdot3}`,tiposDoumentos)


}

eliminarTiposDocumentos(id:number){
  return this.httpClient.delete(`${this.baseURLdot4}/${id}`);
}

// TABLA TIPOS DE DOMICILIOS

obtenerTiposDomicilios():Observable<TiposDomicilios[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<TiposDomicilios[]>(`${this.baseURLdot1}`);
}


actualizarTiposDomicilios(id: number, tiposDomicilios: TiposDomicilios){
  return this.httpClient.put(`${this.baseURLdot12}/${id}`,tiposDomicilios)


}
nuevoTiposDomicilios(tiposDomicilios: TiposDomicilios){
  return this.httpClient.post(`${this.baseURLdot13}`,tiposDomicilios)


}

eliminarTiposDomicilios(id:number){
  return this.httpClient.delete(`${this.baseURLdot14}/${id}`);
}

// TABLA ACTIVIDADES

obtenerActividades():Observable<Actividades[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<Actividades[]>(`${this.baseURLact}`);
}


actualizarActividades(id: number, actividades: Actividades){
  return this.httpClient.put(`${this.baseURLact2}/${id}`,actividades)


}
nuevoActividades(actividades: Actividades){
  return this.httpClient.post(`${this.baseURLact3}`,actividades)


}

eliminarActividades(id:number){
  return this.httpClient.delete(`${this.baseURLact4}/${id}`);
}

// TABLA ACTIVIDADES TIPOS

obtenerActividadesTipos():Observable<ActividadesTipos[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return this.httpClient.get<ActividadesTipos[]>(`${this.baseURLati}`);
}


actualizarActividadesTipos(id: number, actividadesTipos: ActividadesTipos){
  return this.httpClient.put(`${this.baseURLati2}/${id}`,actividadesTipos)


}
nuevoActividadesTipos(actividadesTipos: ActividadesTipos){
  return this.httpClient.post(`${this.baseURLati3}`,actividadesTipos)


}

eliminarActividadesTipos(id:number){
  return this.httpClient.delete(`${this.baseURLati4}/${id}`);
}

// TABLA ACTIVIDADES SUBTIPOS

obtenerActividadesSubtipos():Observable<ActividadesSubtipos[]>
{

  // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
   return  this.httpClient.get<ActividadesSubtipos[]>(`${this.baseURLast}`);
}


actualizarActividadesSubtipos(id: number, actividadesSubtipos: ActividadesSubtipos){
  actividadesSubtipos.for000Actividadestipo.atiActividadtipoid=actividadesSubtipos.astActividadtipoid;
  return this.httpClient.put(`${this.baseURLast2}/${id}`,actividadesSubtipos)


}
nuevoActividadesSubtipos(actividadesSubtipos: ActividadesSubtipos){
  actividadesSubtipos.for000Actividadestipo.atiActividadtipoid=actividadesSubtipos.astActividadtipoid;
  return this.httpClient.post(`${this.baseURLast3}`,actividadesSubtipos)


}

eliminarActividadesSubtipos(id:number){
  return this.httpClient.delete(`${this.baseURLast4}/${id}`);
}


}

