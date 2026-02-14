import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Project {
  name: string;
  company: string;
  period: string;
  tech: string[];
  points: string[];
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  projects: Project[] = [
    {
      name: 'Hotel Mapping Platform',
      company: 'Vervotech',
      period: '2021 – Present',
      tech: ['RabbitMQ', '.NET Core', 'MongoDB', 'Kubernetes', 'Prometheus'],
      points: [
        'Designed a distributed event-driven pipeline with RabbitMQ and .NET Core, processing millions of hotel records daily.',
        'Ensured data consistency and deduplication using hashing and optimized MongoDB indexing.',
        'Improved system scalability with Kubernetes auto-scaling, load balancing, and Prometheus-based alerting.',
      ],
    },
    {
      name: 'iModelBridge Service',
      company: 'Bentley Systems',
      period: '2020 – 2021',
      tech: ['Azure', 'Azure DevOps', 'CI/CD'],
      points: [
        'Architected a multi-region Azure-based service for asynchronous engineering data processing.',
        'Automated infrastructure provisioning and deployment with Azure DevOps CI/CD, reducing manual effort by 40%.',
      ],
    },
    {
      name: 'ProjectShare File Service',
      company: 'Bentley Systems',
      period: '2018 – 2020',
      tech: ['REST API', 'Azure', 'Document Management'],
      points: [
        'Developed secure, high-transaction REST APIs for document management.',
        'Improved system reliability and performance through optimized cloud storage architecture.',
      ],
    },
  ];
}
