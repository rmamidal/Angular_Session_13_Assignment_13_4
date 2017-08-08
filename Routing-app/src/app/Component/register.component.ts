// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { User, UserService } from "../Service/user"
import { FormGroup, FormControl, FormBuilder, FormsModule, Validators } from "@angular/forms"
import { Router } from "@angular/router"


// Component Decorator.
@Component({
    selector: "register-page",
    templateUrl: "../View/register.component.html",
    providers: [UserService],
})

export class RegisterComponent {
    // Current User Object Created.
    currentUser: User = new User();

    // Form group.
    formUser: FormGroup;

    constructor(private _userService: UserService, private _fb: FormBuilder, private _router: Router) { }

    // On initialization of this page.
    ngOnInit() {
        this.formUser = this._fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'emailId': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required])]
        });

    }
    // Methode to store user data
    storeUser() {
        this._userService.storeUser(this.currentUser);
        this._router.navigate(["\Login"]);
    }
    // Method to check if the form is empty.
    canDeactivate() {
        if (this.formUser.value.name !== undefined) {
            return window.confirm('Do you really want to navigate?');
        }
        return true;
    }
}
