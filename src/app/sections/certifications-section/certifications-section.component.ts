import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-certifications-section',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './certifications-section.component.html',
  styleUrl: './certifications-section.component.scss',
})
export class CertificationsSectionComponent {
  items: { icon: string; text: string }[] = [
    { icon: 'verified', text: 'Red Hat Certified System Administrator (RHCSA)' },
    { icon: 'verified', text: 'Red Hat Certified Engineer (RHCE)' },
    { icon: 'military_tech', text: 'Employee of the Quarter – Vervotech (2022)' },
    { icon: 'military_tech', text: 'Alpha of the Tech Department – Vervotech (2023)' },
    { icon: 'military_tech', text: 'Spirit of Vervotech – Vervotech (2025)' },
    { icon: 'public', text: 'Represented Vervotech at ATM Dubai 2024' },
  ];
}
