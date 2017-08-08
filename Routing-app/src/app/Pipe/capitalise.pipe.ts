// Importing required libraries.
import { Pipe, PipeTransform } from "@angular/core"

// Pipe Decorator.
@Pipe({
    name: "capitalise",
    pure: true
})
export class CapitalisePipe implements PipeTransform {
 transform(value:any, args: any[]) {
     if(value) {
        return value.charAt(0).toUpperCase() + value.slice(1); // Capitalise first letter.
     }
     return value;
  }
}