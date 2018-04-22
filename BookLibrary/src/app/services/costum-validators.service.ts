import { Injectable } from '@angular/core';
import { FormControl } from "@angular/forms";

@Injectable()
export class CostumValidatorsService {
  constructor() { }

  date(date: FormControl) {
    const dateRegEx = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    return dateRegEx.test(date.value) ? null : { date: true }
  }

  nonEnglish(title: string) {
    let fixedTitle = title.replace(/[^A-Za-z' ']+/g, '').toLowerCase();
    return fixedTitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
