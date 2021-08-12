import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './components/tarea/tarea.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tarea', component: TareaComponent
      },
      {
        path: 'editar/:id', component: TareaComponent
      },
      {
        path: '**', redirectTo: 'tarea'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
