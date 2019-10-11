import { Pipe, PipeTransform } from "@angular/core";
import { stringify } from "@angular/compiler/src/util";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, act: Boolean): string {
    let result: string = "";
    if (act) {
      for (let i = 0; i < value.length; i++) {
        result += "*";
      }
      return result;
    } else {
      return value;
    }
  }
}
