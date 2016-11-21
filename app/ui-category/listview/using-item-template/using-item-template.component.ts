// >> using-item-template-code
import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
    selector: "item-component",
    template: `
        <StackLayout class="list-group-item" *ngFor="let element of data.list">
            <Label [text]="element.model"></Label>
            <Label [text]="element.speed +'mph'"></Label>
        </StackLayout>
    `
})
export class ItemComponent {
    @Input() data: any;
}

@Component({
    selector: "using-item-template",
    templateUrl: "./using-item-template.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingItemTemplateComponent {
    public manufacturers: Array<any>;

    constructor() {
        var bugatti = [{ "model": "Bugatti Chiron", "speed": "261" }, { "model": "Bugatti Veyron Super Sport", "speed": "268" }];
        var mclaren = [{ "model": "McLaren P1", "speed": "211" }, { "model": "McLaren F1", "speed": "242" }];
        var jaguar = [{ "model": "Jaguar XJ220", "speed": 217 }];
        this.manufacturers = [{ "list": bugatti }, { "list": mclaren }, { "list": jaguar }];
    }
}
// << using-item-template-code
