// Importing required libraries.
import { Pipe, PipeTransform } from "@angular/core";

// Pipe Decorator.
@Pipe({
    name: 'searchBy',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(value: any, args: any[]):any {
        if(value.lenth !== 0) {
            return value.filter((item) => item.name.indexOf(args) > -1); // Search "any word"
        }
        else {
            return [];
        }
    }

}