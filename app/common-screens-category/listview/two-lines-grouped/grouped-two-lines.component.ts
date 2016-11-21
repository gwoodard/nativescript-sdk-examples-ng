import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ItemEventData } from "ui/list-view";
import { mockedGroupDataArray } from "../mock-dataItems";

// >> grouped-listview-two-lines-code
@Component({
    selector: "grouped-two-line-listview",
    templateUrl: "./grouped-two-lines.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupedTwoLinesListViewExampleComponent implements OnInit {
    public countries: Array<any>;

    constructor(){
        this.countries=[];
         for (var i = 0; i < mockedGroupDataArray.length; i++) {
            this.countries.push(mockedGroupDataArray[i]);
        }
    }

    ngOnInit() {}

    checkType(value) {
        // get the class name e.g. GroupTitle or Country
        var className = value.constructor.name;
        return className;
    }

    onItemTapFirstList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapSecondList(args: ItemEventData) {
        console.log(args.index);
    }

    onItemTapThirdList(args: ItemEventData) {
        console.log(args.index);
    }
}
// << grouped-listview-two-lines-code