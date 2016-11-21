import { Component, ChangeDetectionStrategy }  from "@angular/core";
// >> dataentry-wellcome-login-code
@Component({
    selector: "dataentry-welcome-listview",
    templateUrl: "./dataentry-welcome.component.html",
    styleUrls: ["./style.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeDataEntryExampleComponent  {
    public secureproperty = false;

    public show(){
        this.secureproperty = !this.secureproperty;
    }

    public onLoginTap(){
        console.log("login tap");
    }

    public inSignUpTap(){
        console.log("sign up tap");
    }

    public signin(email, password){
        console.log("email: " + email + " password: " + password);
    }

    public forgottenpassword(){
        console.log("forgotten password");
    }

    public signup(){
        console.log("sign up");
    }

}
// << dataentry-wellcome-login-code