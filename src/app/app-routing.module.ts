import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AkiraComponent } from './Paginas/akira/akira.component';
import { GachiakutaComponent } from './Paginas/gachiakuta/gachiakuta.component';
import { OnepieceComponent } from './Paginas/onepiece/onepiece.component';
import { JujutsuKaisenComponent } from './Paginas/jujutsu-kaisen/jujutsu-kaisen.component';
import { PaginaInicialComponent } from './Paginas/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'akira', component: AkiraComponent },
  { path: 'gachiakuta', component: GachiakutaComponent },
  { path: 'one-piece', component: OnepieceComponent },
  { path: 'jujutsu-kaisen', component: JujutsuKaisenComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
