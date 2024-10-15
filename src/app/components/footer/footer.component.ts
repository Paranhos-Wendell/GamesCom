import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contato = {
    endereco: 'Rua do Contato, 123',
    telefone: '(11) 9999-9999',
    email: 'contato@example.com'
  }
}
