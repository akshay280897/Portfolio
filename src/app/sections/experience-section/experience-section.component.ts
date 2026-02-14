import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface Job {
  company: string;
  location: string;
  roles: { title: string; period: string }[];
  stack: string[];
  highlights: string[];
  awards?: string[];
}

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
})
export class ExperienceSectionComponent {
  jobs: Job[] = [
    {
      company: 'Vervotech',
      location: 'Pune, Maharashtra',
      roles: [
        { title: 'Technical Lead', period: '2023 – Present' },
        { title: 'Senior Software Engineer', period: 'Oct 2021 – 2023' },
      ],
      stack: ['.NET Core', 'C#', 'MongoDB', 'AWS (EC2, S3, Lambda, EKS)', 'RabbitMQ', 'Kubernetes'],
      highlights: [
        'Architected and led development of Hotel Mapping Platform, a microservices-driven system processing 1M+ hotel records daily with near real-time deduplication.',
        'Designed distributed event-driven architecture using RabbitMQ for parallel processing and reliable data ingestion, improving throughput by 35%.',
        'Reduced API latency by 60% (400ms → 160ms) through optimized indexing, caching, and connection pooling strategies.',
        'Implemented autoscaling policies on Kubernetes, achieving 99.9% uptime while cutting AWS compute costs by 25%.',
        'Led and mentored 5+ developers, improving delivery efficiency and code quality by 20%.',
        'Collaborated with Product and Data teams to define APIs powering integrations across 50+ B2B clients.',
        'Represented Vervotech at ATM Dubai 2024, demonstrating AI-driven hotel content standardization.',
      ],
      awards: [
        'Employee of the Quarter (2022)',
        'Alpha of the Tech Department (2023)',
        'Spirit of Vervotech (2025)',
      ],
    },
    {
      company: 'Bentley Systems',
      location: 'Pune, Maharashtra',
      roles: [
        { title: 'Software Engineer I', period: 'Apr 2020 – Oct 2021' },
        { title: 'Associate Software Engineer', period: 'Jul 2018 – Mar 2020' },
      ],
      stack: ['.NET Core', 'Azure', 'CosmosDB', 'Azure Batch', 'Docker'],
      highlights: [
        'Developed and optimized iModelBridge Service APIs, reducing batch job processing time by 20% through parallelization and optimized data flows.',
        'Designed scalable batch orchestration using Azure Batch and Service Bus, improving resource utilization and fault tolerance.',
        'Improved API response times by 30% through caching and request batching.',
        'Automated VM image pipelines via Azure Shared Image Gallery, saving 10+ developer hours weekly.',
        'Built secure and scalable APIs for ProjectShare File Service, supporting 10,000+ daily transactions.',
        'Optimized cloud storage and metadata models, reducing Azure storage costs by 25%.',
        'Implemented role-based access control (RBAC) and tokenized authorization, improving security compliance.',
      ],
    },
  ];
}
