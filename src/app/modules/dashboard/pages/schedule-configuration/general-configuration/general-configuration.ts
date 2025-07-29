import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-configuration',
  imports: [FormsModule],
  templateUrl: './general-configuration.html',
  styleUrl: './general-configuration.css'
})
export class GeneralConfiguration {
  duration: number = 30;
  buffer: number = 5;

  get shiftsPerHour(): number {
    const total = this.duration + this.buffer;
    return total > 0 ? Math.floor(60 / total) : 0;
  }
}
