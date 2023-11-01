import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PercentagesService {
  public percentage = signal(0);
}
