// >> time-picker-configure-code
import { Component } from "@angular/core";
import { TimePicker } from "ui/time-picker";

@Component({
    selector: "time-picker-component",
    templateUrl: "./configure-time-picker.component.html"
})
export class ConfigureTimePickerComponent {
    configure(timePicker: TimePicker) {
        timePicker.hour = 9;
        timePicker.minute = 25;
    }
}
// << time-picker-configure-code
