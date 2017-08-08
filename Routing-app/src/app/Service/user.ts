import {Injectable} from "@angular/core"

export class User {
    id: number;
    name: string;
    emailId: string;
    password: string;
}

@Injectable()
export class UserService {

    storeUser(registeredUser: User) {
        sessionStorage.setItem("RegisteredUser", JSON.stringify(registeredUser));
    }

    validateUser(loggedInUser: User) : boolean {
        let registeredUser = JSON.parse(sessionStorage.getItem("RegisteredUser"))
        if (loggedInUser.name == registeredUser.name) {
            console.log("User is authourised");
            sessionStorage.setItem("authenticated", "true");
            return true;
        }

        return false;
    }
}
