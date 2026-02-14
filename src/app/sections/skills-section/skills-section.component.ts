import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  skillGroups: { label: string; skills: string[] }[] = [
    {
      label: 'Programming & Frameworks',
      skills: ['C#', '.NET Core', 'Web API', 'Angular'],
    },
    {
      label: 'Architecture & Systems',
      skills: [
        'Microservices',
        'Distributed Systems',
        'Event-Driven Design',
        'System Design',
      ],
    },
    {
      label: 'Databases',
      skills: ['MongoDB', 'CosmosDB'],
    },
    {
      label: 'Messaging & Queues',
      skills: ['RabbitMQ'],
    },
    {
      label: 'Cloud Platforms',
      skills: ['AWS (EC2, S3, Lambda, EKS)', 'Azure'],
    },
    {
      label: 'DevOps & Tools',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Prometheus', 'CloudWatch', 'Grafana'],
    },
    {
      label: 'Version Control & IDEs',
      skills: ['Git', 'Visual Studio', 'Postman'],
    },
  ];
}
