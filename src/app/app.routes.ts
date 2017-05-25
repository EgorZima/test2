import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopTwentyComponent } from './components/top-twenty/top-twenty.component';
import { DecadesComponent } from './components/decades/decades.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: '',
            redirectTo: 'top',
            pathMatch: 'full'
        },
        {
            path: 'top',
            component: TopTwentyComponent
        },
        {
            path: 'decades',
            component: DecadesComponent
        },
        {
            path: 'favorites',
            component: FavoritesComponent
        }

    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {

}