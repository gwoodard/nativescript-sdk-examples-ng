import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ModalPageExamplesComponent } from "./modal-page-examples.component";
import { SampleModalPageModuleExampleComponent } from "./sample-modal-page-module-example/sample-modal-page-module-example";
import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: ModalPageExamplesComponent
    },
    {
        path: "sample-modal-page",
        component: SampleModalPageModuleExampleComponent,
        data: { title: "Sample modal page" }
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [TitleAndNavButtonModule, NativeScriptModule, NativeScriptRouterModule, NativeScriptRouterModule.forChild(routerConfig)],
    declarations: [ModalPageExamplesComponent, SampleModalPageModuleExampleComponent]
})
export class ModalPageExamplesModule {
    constructor() { }
}
