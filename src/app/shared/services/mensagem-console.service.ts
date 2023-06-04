import { Injectable } from '@angular/core';
import { MensagemService } from './mensagem.service';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem{

  constructor() { 
    super()

  }
  erro (mensagem: string): void {
    console.log("Error: " + mensagem)
  }

  info(mensagem: string): void {
    console.log("info: " + mensagem)

  }

  sucesso(mensagem: string): void {
    console.log("sucesso: " + mensagem)
      
  }

}
