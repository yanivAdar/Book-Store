import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLibraryComponent } from "./main-library/main-library.component";


const appRoutes: Routes = [
   { path: 'main', component: MainLibraryComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RouteModule { }