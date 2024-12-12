import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
import { ResumenComponent } from './resumen.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ResumenComponent], // Importar RouterModule
  template: `
    <main class="main">
      <div class="content">
        <h2>Tipo de documento</h2>
        <select class="form-control" [(ngModel)]="documentType">
          <option value="Cedula">Cédula de ciudadanía</option>
          <option value="passport">Pasaporte</option>
          <option value="id_card">Cédula de Identidad</option>
        </select>

        <h2>Número de documento</h2>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Ingresa el número de documento" 
          [(ngModel)]="documentNumber" 
          (input)="onInputChange()"
        />

        <button [disabled]="!isButtonEnabled()" (click)="onSubmit()">Enviar</button>
      </div>
    </main>

    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'front';
  documentType: string = '';
  documentNumber: string = '';

  personas = [
    {
      cedula: '123456789',
      primerNombre: 'Juan',
      segundoNombre: 'Carlos',
      primerApellido: 'Pérez',
      segundoApellido: 'Gómez',
      telefono: '123-456-789',
      direccion: 'Calle Falsa 123',
      ciudad: 'Bogotá'
    },
    {
      cedula: '987654321',
      primerNombre: 'Ana',
      segundoNombre: 'María',
      primerApellido: 'López',
      segundoApellido: 'Martínez',
      telefono: '987-654-321',
      direccion: 'Av. Siempre Viva 456',
      ciudad: 'Medellín'
    }
  ];

  constructor(private router: Router) {}

  isButtonEnabled(): boolean {
    return this.documentNumber.length >= 8 && this.documentNumber.length <= 11;
  }

  onSubmit(): void {
    const persona = this.personas.find(p => p.cedula === this.documentNumber);

    if (persona) {
      
      this.router.navigate(['/resumen'], { state: { persona } });
    } else {
      alert('Cédula no encontrada');
    }
  }

  onInputChange(): void {}
}
