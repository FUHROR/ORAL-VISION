import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HistoryService, DiagnosisResult } from '../services/history.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: DiagnosisResult[] = [];

  constructor(
    private historyService: HistoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.history = this.historyService.getAll();
  }

  deleteItem(id: number) {
    this.historyService.delete(id);
    this.loadHistory();
  }

  goBack() {
    this.router.navigate(['/diagnosis']);
  }

  clearAll() {
    this.historyService.clear();
    this.loadHistory();
  }
}
