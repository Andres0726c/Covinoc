import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaData } from '../components/tarea/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private urlEndPoint: string = 'https://608adc0d737e470017b7410f.mockapi.io/api/v1';
  // private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  tareas = 'todos';

  constructor( private http: HttpClient ) { }

  buscar() {
    this.http.get( this.urlEndPoint )
        .subscribe( resp => {
          console.log(resp);
        } )
  }

  getTareas(): Observable<TareaData[]> {
    //return of(OPERADORES);
    return this.http.get<TareaData[]>(`${this.urlEndPoint}/${this.tareas}`);
  }

  getTarea(id: number): Observable<TareaData>{
    return this.http.get<TareaData>(`${this.urlEndPoint}/${id}`)

  }

  createTarea( tarea: TareaData ): Observable<TareaData> {
    return this.http.post<TareaData>(`${ this.urlEndPoint }/${this.tareas}`, tarea);
  }

  updateTarea( tarea: TareaData ): Observable<TareaData> {
    return this.http.put<TareaData>(`${ this.urlEndPoint }/${this.tareas}/${ tarea.id }`, tarea);
  }

  deleteTarea( id: number ): Observable<TareaData> {
    return this.http.delete<TareaData>(`${ this.urlEndPoint }/${this.tareas}/${ id }`);
  }

}
