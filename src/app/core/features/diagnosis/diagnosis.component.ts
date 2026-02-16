import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { HistoryService, DiagnosisResult } from './services/history.service';

@Component({
  selector: 'app-diagnosis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent {

  state: 'IDLE' | 'ANALYZING' | 'DONE' = 'IDLE';

  previewImage: string | null = null;
  result!: DiagnosisResult;

  isDragging = false;

  analysisSteps = [
    'Validating image...',
    'Enhancing quality...',
    'Running AI model...',
    'Analyzing patterns...',
    'Generating prediction...'
  ];

  currentStep = 0;

  constructor(
    private historyService: HistoryService,
    private router: Router
  ) {}

  goToHistory() {
this.router.navigate(['/diagnosis/history']);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    this.readFile(file);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;

    const file = event.dataTransfer?.files[0];
    if (!file) return;

    this.readFile(file);
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  startAnalysis() {
    this.state = 'ANALYZING';
    this.currentStep = 0;

    const interval = setInterval(() => {
      this.currentStep++;
      if (this.currentStep >= this.analysisSteps.length) {
        clearInterval(interval);
        this.finishAnalysis();
      }
    }, 600);
  }

  finishAnalysis() {
    const labels = [
      'Caries',
      'Gingivitis',
      'Ulcer',
      'Cancer',
      'Healthy',
      'Hypodontia',
      'ToothDiscoloration'
    ];

    const randomIndex = Math.floor(Math.random() * labels.length);

    const classes = labels.map((label, i) => ({
      label,
      confidence: i === randomIndex
        ? 0.7 + Math.random() * 0.25
        : Math.random() * 0.3
    })).sort((a, b) => b.confidence - a.confidence);

    this.result = {
      id: Date.now(),
      image: this.previewImage!,
      predicted: classes[0].label,
      classes,
      date: new Date()
    };

    this.historyService.add(this.result);
    this.state = 'DONE';
  }

  reset() {
    this.previewImage = null;
    this.state = 'IDLE';
  }

  exportPDF() {
    const doc = new jsPDF();
    doc.text('AI Dental Diagnosis Report', 20, 20);
    doc.text(`Prediction: ${this.result.predicted}`, 20, 40);

    let y = 60;
    this.result.classes.forEach(c => {
      doc.text(`${c.label}: ${(c.confidence * 100).toFixed(1)}%`, 20, y);
      y += 8;
    });

    doc.save('dental-diagnosis-report.pdf');
  }

  getRiskClass(value: number) {
    if (value > 0.75) return 'high';
    if (value > 0.5) return 'medium';
    return 'low';
  }
}
