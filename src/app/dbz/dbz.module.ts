import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
