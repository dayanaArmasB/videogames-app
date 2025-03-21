import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() totalItems!: number;  // Total de juegos disponibles
  @Input() pageSize: number = 30; // Cantidad de juegos por página
  @Input() pageSizeOptions: number[] = [10, 30, 50]; // Opciones de tamaño de página
  @Output() pageChanged = new EventEmitter<number>(); // Evento para informar al padre

  changePage(event: any) {
    this.pageChanged.emit(event.pageIndex + 1); // Emitimos el número de la nueva página
  }
}
