// Importing required libraries.
import { Component, Injectable } from "@angular/core"
import { User, UserService } from "../Service/user"
import { FormGroup, FormControl, FormBuilder, FormsModule, Validators} from "@angular/forms"
import { Router } from "@angular/router"


// Component Decorator.
@Component({
    selector: "login-page",
    templateUrl: "../View/login.component.html",
    providers: [UserService],
})

export class LoginComponent {
    // Current User Object Created.
    currentUser: User = new User();
    
    // Form group.
    formLogin: FormGroup;

    constructor(private _userService: UserService, private _fb: FormBuilder, private _router: Router) {}
    
    // On initialization of this page.
    ngOnInit() {
        this.formLogin = this._fb.group({
            'name': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required])]
        });

    }
    // Methode to store user data
    validateUser() {
        let authourisedUser = this._userService.validateUser(this.currentUser);
        if(authourisedUser) {
            this._router.navigate(["\ListMovie"]); // Navigate to List movie id user authourised.
        }
    }
}
