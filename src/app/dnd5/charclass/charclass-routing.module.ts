import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharclassDetailViewComponent } from '@app/dnd5/charclass/views/charclass-detail-view/charclass-detail-view.component';
import { CharclassListViewComponent } from './views/charclass-list-view/charclass-list-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CharclassListViewComponent },
            { path: ':id', component: CharclassDetailViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharclassRoutingModule { }