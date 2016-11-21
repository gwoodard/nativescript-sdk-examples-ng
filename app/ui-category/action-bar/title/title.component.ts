import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "action-bar-component",
    templateUrl: "./title.component.html"
})
export class TitleComponent {
    constructor(private routerExtensions: RouterExtensions) {
    }

    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }
}
