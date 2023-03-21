import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharclassDetailViewComponent } from './components/charclass-detail-view/charclass-detail-view.component';
import { CharclassListViewComponent } from './components/charclass-list-view/charclass-list-view.component';
import { HomeViewComponent } from './components/home-view/home-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: HomeViewComponent },
            {
                path: 'classes',
                children: [
                    { path: '', component: CharclassListViewComponent },
                    { path: ':id', component: CharclassDetailViewComponent }
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