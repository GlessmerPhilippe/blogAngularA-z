import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/toast.component/toast.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'blog-multimedia-angular';
}
