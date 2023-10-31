import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosExpediente } from '../datos-expediente';
import { TipoExpedientes } from '../entity/tipo-expedientes';
import { BusquedaListadoPrincipal } from '../busqueda-listado-principal';

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {

  // URL que obtiene el listado de expedientes
  private baseURL="http://localhost:8080/exp/listar";
  private baseURL2="http://localhost:8080/ext/listar";
  private baseURL3="http://localhost:8080/exp/busqueda";


  constructor(private httpClient: HttpClient) { }

  //
  obtenerExpedientes():Observable<DatosExpediente[]>
  {

    // console.log(this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`));
     return this.httpClient.get<DatosExpediente[]>(`${this.baseURL}`);
  }

  obtenerTiposExpedientes():Observable<TipoExpedientes[]>{
    return this.httpClient.get<TipoExpedientes[]>(`${this.baseURL2}`);

  }

  obtenerListadoExpBusqueda(busqueda:BusquedaListadoPrincipal):Observable<DatosExpediente[]>{
    return this.httpClient.get<DatosExpediente[]>(`${this.baseURL3}?tipoExp=${busqueda.tipoExp}`);

  }

}
