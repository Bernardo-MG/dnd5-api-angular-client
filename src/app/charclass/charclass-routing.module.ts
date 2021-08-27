import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharclassViewComponent } from '@app/views/charclass-view/charclass-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CharclassViewComponent },
            { path: ':id', component: CharclassViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharclassRoutingModule { }