// import { Component } from '@angular/core';
// import { RouterLink, RouterOutlet } from '@angular/router';
// import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
// import { RouterModule } from '@angular/router';



// @Component({
//   selector: 'app-home',
//   imports: [RouterLink , RouterOutlet, CommonModule, RouterModule, ],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css',
// })
// export class HomeComponent {
// features = [
//     {
//       key: 'ai',
//       title: 'AI-Powered Detection',
//       desc: 'Advanced machine learning algorithms detect dental diseases with high accuracy.'
//     },
//     {
//       key: 'instant',
//       title: 'Instant Results',
//       desc: 'Get comprehensive analysis in seconds, not days.'
//     },
//     {
//       key: 'security',
//       title: 'Medical-Grade Security',
//       desc: 'Your data is encrypted and handled with the highest security standards.'
//     }
//   ];

// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// استيراد FooterComponent بالمسار النسبي الصحيح من مكان الـ file الحالي
// من src/app/core/features/home -> نرجع لثلاث مستويات الى src/app ثم نروح shared
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,    // يوفّر *ngFor, ngIf, ngSwitch, ...
    RouterModule,    // لو تستخدم routerLink داخل الـ template
    // FooterComponent   استيراد الفوتر (لا تحتاج declare لأنه standalone)
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // او .scss اذا عندك
})
export class HomeComponent {
  features = [
    { key: 'ai', title: 'AI-Powered Detection', desc: 'Advanced machine learning algorithms detect dental diseases with high accuracy.' },
    { key: 'instant', title: 'Instant Results', desc: 'Get comprehensive analysis in seconds, not days.' },
    { key: 'security', title: 'Medical-Grade Security', desc: 'Your data is encrypted and handled with the highest security standards.' }
  ];

  steps = [
  { num: '01', title: 'Upload Image', desc: 'Upload a dental X-ray or photo from your device' },
  { num: '02', title: 'AI Analysis', desc: 'Our AI processes the image and detects any abnormalities' },
  { num: '03', title: 'Get Results', desc: 'Receive detailed results with recommendations' }
];

cta = {
    title: 'Ready to Transform Your Dental Care?',
    subtitle: 'Join thousands of users who trust ORAVISION for accurate dental\n disease detection',
    btnLabel: 'Get Started Now',
    btnLink: '/diagnosis'
  };
}
