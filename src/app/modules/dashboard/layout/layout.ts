import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
