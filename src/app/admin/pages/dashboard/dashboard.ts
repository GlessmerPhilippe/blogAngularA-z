import { Component } from '@angular/core';
import { StatCardComponent } from '../../components/statcard/statcard';
@Component({
  selector: 'app-dashboard',
  imports: [StatCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
