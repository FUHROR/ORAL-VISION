import { Injectable } from '@angular/core';

export interface DiagnosisClass {
  label: string;
  confidence: number;
}

export interface DiagnosisResult {
  id: number;
  image: string;
  predicted: string;
  classes: DiagnosisClass[];
  date: Date;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private storageKey = 'ai-dental-history';

  getAll(): DiagnosisResult[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  add(result: DiagnosisResult) {
    const history = this.getAll();
    history.unshift(result);
    localStorage.setItem(this.storageKey, JSON.stringify(history));
  }

  delete(id: number) {
    const updated = this.getAll().filter(item => item.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(updated));
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}
