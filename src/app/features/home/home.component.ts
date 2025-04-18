import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule,  } from '@angular/router';
import { CarrouselComponent } from '../../shared/carrousel/carrousel.component';
 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,CarrouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
