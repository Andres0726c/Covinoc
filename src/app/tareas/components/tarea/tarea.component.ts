import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { TareasService } from '../../services/tareas.service';
import { TareaData } from './tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styles: [
  ]
})
export class TareaComponent implements OnInit {

  tareas: TareaData[] = [];
  tarea: TareaData = new TareaData();
  // tarea: TareaData = 
  // {
  //   id: 0,
  //   createdAt: '',
  //   state: false,
  //   title: ''
  // }
  termino: string = '';

  completado: boolean = false;


  constructor( private tareasService: TareasService,
               private activateRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {
    this.tareasService.getTareas().subscribe(
      tareas => this.tareas = tareas
    );

    this.activateRoute.params
        .pipe(
          switchMap( ({id}) => this.tareasService.getTarea( id ) )
        )
        .subscribe( tarea => this.tarea = tarea );
    
  }

  buscando() {

    this.tareasService.getTareas()
        .subscribe( tareas => this.tareas = tareas);

  }
  

  guardar() {
    if( this.tarea.title.trim().length === 0 ) {
      return
    }

    if( this.tarea.id ) {
      //Actualizar
      this.tareasService.updateTarea( this.tarea )
                .subscribe( tarea => console.log(tarea) )
    } else {
      //Crear
      this.tareasService.createTarea( this.tarea )
          .subscribe( resp => {
            console.log(resp);
          } )
    }
    this.router.navigate(['/tareas']);

  }


  borrarTarea() {
    this.tareasService.deleteTarea( this.tarea.id )
        .subscribe( resp => {
          this.router.navigate(['/tareas']);
        } );
  }

  marcarCompletado( id: number ) {

    for( const todo of this.tareas  ){
      console.log(id, todo.id);

      if( todo.id === id ) {

        this.completado = !this.completado;

      }
    }

  }

}
