import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchEngineComponent } from 'src/pages/searchEngine/searchEngine.component';

const routes: Routes = [
  { path: '', component: SearchEngineComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
