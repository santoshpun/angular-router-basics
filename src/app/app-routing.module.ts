import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BootstrapAssetComponent } from './bootstrap-asset/bootstrap-asset.component';
import { SmartphoneListComponent } from './smartphone-list/smartphone-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'contacts' },
    { path: 'contacts', component: ContactListComponent },
    { path: 'contact/:id', component: ContactDetailComponent },
    { path: 'bootstrap', component: BootstrapAssetComponent },
    { path: 'smartphone', component: SmartphoneListComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }