
// import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-awareness',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './awareness.component.html',
//   styleUrls: ['./awareness.component.css'],
// })
// export class AwarenessComponent implements AfterViewInit, OnDestroy {

//   /* -------------------- Tips Content -------------------- */
//   tips = [
//     { icon: '😊', title: 'Brush Twice Daily', desc: 'Brush your teeth for at least 2 minutes, twice a day with fluoride toothpaste for optimal oral health.' },
//     { icon: '🦷', title: 'Floss Daily', desc: 'Flossing removes plaque and food particles between teeth where your toothbrush cannot reach.' },
//     { icon: '❤️', title: 'Healthy Diet', desc: 'Limit sugary foods and drinks. Choose calcium-rich foods for stronger teeth and bones.' },
//     { icon: '🛡️', title: 'Regular Checkups', desc: 'Visit your dentist every 6 months for cleaning and early problem detection.' },
//     { icon: '🧴', title: 'Use Mouthwash', desc: 'Antibacterial mouthwash helps reduce plaque, prevent gingivitis, and freshen breath.' },
//     { icon: '♻️', title: 'Replace Toothbrush', desc: 'Change your toothbrush every 3–4 months or when bristles become frayed.' }
//   ];

//   /* --------------------- Video content (example) --------------------- */
//   videos = [
//     { title: "Complete Guide to Brushing Techniques", category: "Technique", views: "125K", link: "https://www.youtube.com/watch?v=3oG_JLuQ8T8" },
//     { title: "Understanding Dental Cavities", category: "children", views: "98K", link: "https://www.youtube.com/watch?v=zGoBFU1q4g0" },
//     { title: "Preventing Gum Disease: Essential Tips", category: "Prevention", views: "98K", link: "https://www.youtube.com/watch?v=u9Tr5MWOHbI" },
//     { title: "Understanding Dental Cavities", category: "Technique", views: "98K", link: "https://www.youtube.com/watch?v=5J89gCDt_rk" },
//     { title: "Foods That Harm Your Teeth", category: "Nutrition", views: "98K", link: "https://www.youtube.com/watch?v=AsPB8lYkB-0" },
//     { title: "Flossing: The Right Way", category: "Technique", views: "98K", link: "https://www.youtube.com/watch?v=HmnjzhqA-GU" }
//   ];

//   @ViewChildren('tipCard', { read: ElementRef })
//   tipCards!: QueryList<ElementRef>;

//   private _observer: IntersectionObserver | null = null;

//   ngAfterViewInit(): void {
//     // safety guard: إذا مفيش عناصر لا نعمل شيء
//     if (!this.tipCards || this.tipCards.length === 0) {
//       return;
//     }

//     this._observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry: IntersectionObserverEntry) => {
//           if (entry.isIntersecting) {
//             const el = entry.target as HTMLElement;
//             el.classList.add('in-view');
//             // unobserve each element after it becomes visible
//             this._observer?.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.25 }
//     );

//     // Set stagger delays and observe
//     this.tipCards.forEach((card, i) => {
//       const el = card.nativeElement as HTMLElement;
//       el.style.animationDelay = `${i * 120}ms`;
//       this._observer?.observe(el);
//     });
//   }

//   ngOnDestroy(): void {
//     if (this._observer) {
//       this._observer.disconnect();
//       this._observer = null;
//     }
//   }

//   // استخراج ID من رابط يوتيوب بأمان وارجاع thumbnail
//   getThumbnail(url: string): string {
//     try {
//       const idPart = url.split('v=')[1] || '';
//       const videoId = idPart.split('&')[0] || '';
//       if (!videoId) {
//         return '/assets/img/video-placeholder.png';
//       }
//       return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
//     } catch {
//       return '/assets/img/video-placeholder.png';
//     }
//   }

//   openVideo(url: string) {
//     try {
//       window.open(url, '_blank');
//     } catch (err) {
//       console.error('Unable to open video URL', err);
//     }
//   }
//     // ... داخل class AwarenessComponent { ...

//   // حقائق DID YOU KNOW
//   facts: string[] = [
//     'Your tooth enamel is the hardest substance in your body.',
//     'Tooth decay is the second most common disease after the common cold.',
//     'Your mouth produces over 25,000 quarts of saliva in a lifetime.',
//     'Gum disease is linked to heart disease and diabetes.',
//     'The average person spends 38.5 days brushing their teeth over a lifetime.'
//   ];
// problems = [
//   {
//     title: "Tooth Decay (Cavities)",
//     symptoms: ["Tooth pain", "Sensitivity to hot/cold", "Visible holes or pits"],
//     prevention: ["Brush twice daily", "Limit sugary foods", "Regular dental visits"]
//   },
//   {
//     title: "Gum Disease",
//     symptoms: ["Bleeding gums", "Bad breath", "Receding gums"],
//     prevention: ["Daily flossing", "Professional cleaning", "Antibacterial mouthwash"]
//   },
//   {
//     title: "Tooth Sensitivity",
//     symptoms: ["Pain with hot/cold", "Discomfort when brushing", "Sweet food sensitivity"],
//     prevention: ["Use sensitive toothpaste", "Soft-bristled brush", "Avoid acidic foods"]
//   },
//   {
//     title: "Bad Breath",
//     symptoms: ["Persistent odor", "Bad taste", "Dry mouth"],
//     prevention: ["Good oral hygiene", "Stay hydrated", "Regular tongue cleaning"]
//   }
// ];
// @ViewChildren('problemCard', { read: ElementRef })
// problemCards!: QueryList<ElementRef>;



// }
// src/app/core/features/awareness/awareness.component.ts
import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awareness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awareness.component.html',
  styleUrls: ['./awareness.component.css'],
})
export class AwarenessComponent implements AfterViewInit, OnDestroy {

  /* -------------------- Tips Content -------------------- */
  tips = [
    { icon: '😊', title: 'Brush Twice Daily', desc: 'Brush your teeth for at least 2 minutes, twice a day with fluoride toothpaste for optimal oral health.' },
    { icon: '🦷', title: 'Floss Daily', desc: 'Flossing removes plaque and food particles between teeth where your toothbrush cannot reach.' },
    { icon: '❤️', title: 'Healthy Diet', desc: 'Limit sugary foods and drinks. Choose calcium-rich foods for stronger teeth and bones.' },
    { icon: '🛡️', title: 'Regular Checkups', desc: 'Visit your dentist every 6 months for cleaning and early problem detection.' },
    { icon: '🧴', title: 'Use Mouthwash', desc: 'Antibacterial mouthwash helps reduce plaque, prevent gingivitis, and freshen breath.' },
    { icon: '♻️', title: 'Replace Toothbrush', desc: 'Change your toothbrush every 3–4 months or when bristles become frayed.' }
  ];

  /* --------------------- Video content (example) --------------------- */
  videos = [
    { title: "Complete Guide to Brushing Techniques", category: "Technique", views: "125K", link: "https://www.youtube.com/watch?v=3oG_JLuQ8T8" },
    { title: "Understanding Dental Cavities", category: "children", views: "98K", link: "https://www.youtube.com/watch?v=zGoBFU1q4g0" },
    { title: "Preventing Gum Disease: Essential Tips", category: "Prevention", views: "98K", link: "https://www.youtube.com/watch?v=u9Tr5MWOHbI" },
    { title: "Understanding Dental Cavities", category: "Technique", views: "98K", link: "https://www.youtube.com/watch?v=5J89gCDt_rk" },
    { title: "Foods That Harm Your Teeth", category: "Nutrition", views: "98K", link: "https://www.youtube.com/watch?v=AsPB8lYkB-0" },
    { title: "Flossing: The Right Way", category: "Technique", views: "98K", link: "https://www.youtube.com/watch?v=HmnjzhqA-GU" }
  ];

  /* ----------------- ViewChildren refs ----------------- */
  @ViewChildren('tipCard', { read: ElementRef })
  tipCards!: QueryList<ElementRef>;

  @ViewChildren('problemCard', { read: ElementRef })
  problemCards!: QueryList<ElementRef>;

  /* ----------------- observers (managed) ----------------- */
  private tipObserver: IntersectionObserver | null = null;
  private problemObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    // --- TIP CARDS OBSERVER ---
    if (this.tipCards && this.tipCards.length > 0) {
      this.tipObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('in-view');
              this.tipObserver?.unobserve(el);
            }
          });
        },
        { threshold: 0.25 }
      );

      // stagger delays + observe
      this.tipCards.forEach((card, i) => {
        const el = card.nativeElement as HTMLElement;
        el.style.animationDelay = `${i * 120}ms`;
        this.tipObserver?.observe(el);
      });
    }

    // --- PROBLEM CARDS OBSERVER ---
    if (this.problemCards && this.problemCards.length > 0) {
      this.problemObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('in-view');
              this.problemObserver?.unobserve(el);
            }
          });
        },
        { threshold: 0.18 }
      );

      // stagger delays + observe
      this.problemCards.forEach((card, i) => {
        const el = card.nativeElement as HTMLElement;
        el.style.animationDelay = `${i * 120}ms`;
        this.problemObserver?.observe(el);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.tipObserver) {
      this.tipObserver.disconnect();
      this.tipObserver = null;
    }
    if (this.problemObserver) {
      this.problemObserver.disconnect();
      this.problemObserver = null;
    }
  }

  // استخراج ID من رابط يوتيوب بأمان وارجاع thumbnail
  getThumbnail(url: string): string {
    try {
      const idPart = url.split('v=')[1] || '';
      const videoId = idPart.split('&')[0] || '';
      if (!videoId) {
        return '/assets/img/video-placeholder.png';
      }
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } catch {
      return '/assets/img/video-placeholder.png';
    }
  }

  openVideo(url: string) {
    try {
      window.open(url, '_blank');
    } catch (err) {
      console.error('Unable to open video URL', err);
    }
  }

  openChatbot() {
  window.location.href = "/chatbot";
}


  // DID YOU KNOW
  facts: string[] = [
    'Your tooth enamel is the hardest substance in your body.',
    'Tooth decay is the second most common disease after the common cold.',
    'Your mouth produces over 25,000 quarts of saliva in a lifetime.',
    'Gum disease is linked to heart disease and diabetes.',
    'The average person spends 38.5 days brushing their teeth over a lifetime.'
  ];

  // PROBLEMS DATA
  problems = [
    {
      title: "Tooth Decay (Cavities)",
      symptoms: ["Tooth pain", "Sensitivity to hot/cold", "Visible holes or pits"],
      prevention: ["Brush twice daily", "Limit sugary foods", "Regular dental visits"]
    },
    {
      title: "Gum Disease",
      symptoms: ["Bleeding gums", "Bad breath", "Receding gums"],
      prevention: ["Daily flossing", "Professional cleaning", "Antibacterial mouthwash"]
    },
    {
      title: "Tooth Sensitivity",
      symptoms: ["Pain with hot/cold", "Discomfort when brushing", "Sweet food sensitivity"],
      prevention: ["Use sensitive toothpaste", "Soft-bristled brush", "Avoid acidic foods"]
    },
    {
      title: "Bad Breath",
      symptoms: ["Persistent odor", "Bad taste", "Dry mouth"],
      prevention: ["Good oral hygiene", "Stay hydrated", "Regular tongue cleaning"]
    }
  ];

}
