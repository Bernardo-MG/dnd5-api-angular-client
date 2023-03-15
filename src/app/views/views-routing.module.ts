import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharclassViewComponent } from './components/charclass-view/charclass-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: HomeViewComponent },
            {
                path: 'classes',
                children: [
                    { path: '', component: CharclassViewComponent },
                    { path: ':id', component: CharclassViewComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }