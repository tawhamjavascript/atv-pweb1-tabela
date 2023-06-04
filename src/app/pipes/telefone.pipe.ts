import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})

export class TelefonePipe implements PipeTransform {

  transform(phone: string): string {
    if (phone.length === 8) {
      return `${phone.substring(0,4)}-${phone.substring(4)}`
    }
    else if (phone.length === 9) {
      return `${phone.substring(0, 5)}-${phone.substring(5)}`
    }
    else if (phone.length === 10) {
      return `${phone.substring(0, 2)}-${phone.substring(2,6)}-${phone.substring(6)}`

    }
    
    else if (phone.length === 11) {
      if(phone[0] != "0") {
        return phone
      }

      return `${phone.substring(0, 3)}-${phone.substring(3,7)}-${phone.substring(7)}`

    }
    return phone
 
  }
}
