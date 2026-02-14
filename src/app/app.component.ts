import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';
import { CertificationsSectionComponent } from './sections/certifications-section/certifications-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    CertificationsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  private breakpointObserver = inject(BreakpointObserver);
  isMobile = signal(false);
  currentYear = new Date().getFullYear();
  navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  ngOnInit() {
    this.breakpointObserver.observe('(max-width: 768px)').subscribe((state) => {
      this.isMobile.set(state.matches);
    });
  }

  scrollTo(sectionId: string, drawer?: MatDrawer) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (drawer) drawer.close();
  }

  toggleMenu() {
    this.drawer?.toggle();
  }
}
