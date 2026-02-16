import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface TeamMember {
  name: string;
  role: string;
  img: string; // path under /assets/...
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
 team: TeamMember[] = [
    { name: 'Dr. Sarah Johnson', role: 'Chief AI Scientist', img: '/images/team.jpeg' },
    { name: 'Dr. Michael Chen', role: 'Dental Technology Lead', img: '/images/team.jpeg' },
    { name: 'Dr. Emily Rodriguez', role: 'Product Manager', img: '/images/team.jpeg' },
    { name: 'Dr. James Williams', role: 'Software Architect', img: '/images/team.jpeg' }
  ];

  links = {
    about: ['Our Team', 'Our Mission', 'How It Works', 'Education'],
    contact: [
      { label: 'info@oravision.ai', icon: '✉' },
      { label: 'Support Center', icon: '' },
      { label: 'FAQ', icon: '' }
    ],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  currentYear = new Date().getFullYear();
}

