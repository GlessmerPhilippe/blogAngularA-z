import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';0
import { Navbar } from '../../shared/navbar/navbar';
@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout {

}
