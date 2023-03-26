import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';

const charclassModule = () => import('@app/dnd5/charclass/charclass.module').then(m => m.CharclassModule);

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: HomeViewComponent },
            { path: 'classes', loadChildren: charclassModule },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }