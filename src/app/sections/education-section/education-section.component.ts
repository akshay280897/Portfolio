import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss',
})
export class EducationSectionComponent {}
