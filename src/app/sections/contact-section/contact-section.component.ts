import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
})
export class ContactSectionComponent {
  email = 'akipotdar@gmail.com';
  phone = '+91 8552974296';
  phoneTel = 'tel:+918552974296';
  location = 'Pune, Maharashtra';
  linkedInUrl = 'https://www.linkedin.com/in/akshay-potdar-51366b131';
}
