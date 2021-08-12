import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TareaComponent
  ],
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule
  ]
})
export class TareasModule { }
