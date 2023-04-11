import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellsDetailViewComponent } from './views/spells-detail-view/spells-detail-view.component';
import { SpellsListViewComponent } from './views/spells-list-view/spells-list-view.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: SpellsListViewComponent },
            { path: ':id', component: SpellsDetailViewComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SpellsRoutingModule { }