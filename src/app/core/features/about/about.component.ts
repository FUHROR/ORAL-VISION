// import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-about',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css'] // أو .scss إذا عندك
// })

// export class AboutComponent {
//   // data قابلة للتعديل بسهولة
//   values = [
//     {
//       key: 'innovation',
//       title: 'Innovation',
//       desc: 'Pushing the boundaries of AI technology to revolutionize dental care'
//     },
//     {
//       key: 'patient',
//       title: 'Patient-First',
//       desc: 'Every decision we make is centered around improving patient outcomes'
//     },
//     {
//       key: 'excellence',
//       title: 'Excellence',
//       desc: 'Committed to the highest standards of quality and accuracy'
//     },
//     {
//       key: 'collab',
//       title: 'Collaboration',
//       desc: 'Working together with dental professionals to create better solutions'
//     }
//   ];

//   // داخل AboutComponent class
// team = [
//   {
//     name: 'Dr. Sarah Johnson',
//     role: 'Chief AI Scientist',
//     img: '/images/team.jpeg',
//     bio: 'Leading AI researcher with 15+ years of experience in machine learning and medical imaging. Ph.D. in Computer Science from MIT, specializing in deep learning for healthcare applications.',
//     expertise: ['Machine Learning', 'Medical Imaging', 'Deep Learning'],
//     achievements: [
//       'Published 50+ papers',
//       'TEDx Speaker',
//       'AI Innovation Award 2023'
//     ]
//   },
//   {
//     name: 'Dr. Michael Chen',
//     role: 'Dental Technology Lead',
//     img: '/images/team.jpeg',
//     bio: 'Expert dentist and innovator combining clinical practice with cutting-edge technology. D.D.S. from Harvard School of Dental Medicine with focus on digital dentistry and AI applications.',
//     expertise: ['Digital Dentistry', 'Clinical Practice', 'Technology Integration'],
//     achievements: [
//       '20+ years experience',
//       'Dental Innovation Award',
//       'Published researcher'
//     ]
//   },
//   {
//     name: 'Dr. Emily Rodriguez',
//     role: 'Product Manager',
//     img: '/images/team.jpeg',
//     bio: 'Strategic product leader with expertise in healthcare technology. MBA from Stanford and background in medical device development, dedicated to user-centric health solutions.',
//     expertise: ['Product Strategy', 'Healthcare Tech', 'UX Design'],
//     achievements: [
//       'Launched 10+ products',
//       'Healthcare Leader 2024',
//       'Forbes 30 Under 30'
//     ]
//   },
//   {
//     name: 'Dr. James Williams',
//     role: 'Software Architect',
//     img: '/images/team.jpeg',
//     bio: 'Full-stack architect specializing in scalable healthcare systems. Computer Science degree from Berkeley with certifications in cloud architecture and medical data security standards.',
//     expertise: ['Cloud Architecture', 'System Design', 'Medical Data Security'],
//     achievements: [
//       'Built 5+ platforms',
//       'AWS Certified',
//       'Security Expert'
//     ]
//   }
// ];


// }
import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  // -----------------------------
  // Core Values Section Data
  // -----------------------------
  values = [
    { key: 'innovation', title: 'Innovation', desc: 'Pushing the boundaries of AI technology to revolutionize dental care' },
    { key: 'patient', title: 'Patient-First', desc: 'Every decision we make is centered around improving patient outcomes' },
    { key: 'excellence', title: 'Excellence', desc: 'Committed to the highest standards of quality and accuracy' },
    { key: 'collab', title: 'Collaboration', desc: 'Working together with dental professionals to create better solutions' }
  ];

  // -----------------------------
  // Leadership Team Section Data
  // -----------------------------
  team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief AI Scientist',
      img: '/images/team.jpeg',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and medical imaging. Ph.D. from MIT...',
      expertise: ['Machine Learning', 'Medical Imaging', 'Deep Learning'],
      achievements: ['Published 50+ papers', 'TEDx Speaker', 'AI Innovation Award 2023']
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Dental Technology Lead',
      img: '/images/team.jpeg',
      bio: 'Expert dentist and innovator combining clinical practice with cutting-edge technology...',
      expertise: ['Digital Dentistry', 'Clinical Practice', 'Technology Integration'],
      achievements: ['20+ years experience', 'Dental Innovation Award', 'Published researcher']
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Product Manager',
      img: '/images/team.jpeg',
      bio: 'Strategic product leader with expertise in healthcare technology...',
      expertise: ['Product Strategy', 'Healthcare Tech', 'UX Design'],
      achievements: ['Launched 10+ products', 'Healthcare Leader 2024', 'Forbes 30 Under 30']
    },
    {
      name: 'Dr. James Williams',
      role: 'Software Architect',
      img: '/images/team.jpeg',
      bio: 'Full-stack architect specializing in scalable healthcare systems...',
      expertise: ['Cloud Architecture', 'System Design', 'Medical Data Security'],
      achievements: ['Built 5+ platforms', 'AWS Certified', 'Security Expert']
    }
  ];

  // -----------------------------
  // Animated Numbers Section
  // -----------------------------
  stats = [
    { value: 50000, display: '50K+' },
    { value: 94, display: '94%' },
    { value: 150, display: '150+' },
    { value: 48, display: '4.8/5' }
  ];

  @ViewChildren('numEl', { read: ElementRef }) numEls!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          this.startCount(el);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    this.numEls.forEach(n => obs.observe(n.nativeElement));
  }

  private startCount(el: HTMLElement) {
    const idx = this.getIndexFromElement(el);
    if (idx === null) return;

    const stat = this.stats[idx];
    const raw = stat.value;
    const isRating = idx === 3;
    const duration = 900;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);

      if (isRating) {
        const current = Math.round(raw * progress);
        el.textContent = (current / 10).toFixed(1) + '/5';
      } else if (raw >= 1000) {
        const current = Math.round(raw * progress);
        el.textContent = current >= 1000 ? Math.round(current / 1000) + 'K+' : String(current);
      } else if (stat.display.includes('%')) {
        el.textContent = Math.round(raw * progress) + '%';
      } else {
        const current = Math.round(raw * progress);
        el.textContent = current + (stat.display.includes('+') ? '+' : '');
      }

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  private getIndexFromElement(el: HTMLElement): number | null {
    const all = this.numEls.toArray().map(e => e.nativeElement as HTMLElement);
    const idx = all.indexOf(el);
    return idx >= 0 ? idx : null;
  }
}
