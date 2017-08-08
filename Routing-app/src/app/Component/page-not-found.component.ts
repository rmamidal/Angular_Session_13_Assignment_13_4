// Importing required libraries.
import { Component} from "@angular/core"

//Component Decorator.
@Component({
    selector: "page-not-found",
    template: `<div class="container">
        <div class="row">
            <h1> 404 - Page not found</h1>
            <p>Try Entering correct url</p>
        </div>
      </div>`
})
export class PageNotFoundComponent {

}