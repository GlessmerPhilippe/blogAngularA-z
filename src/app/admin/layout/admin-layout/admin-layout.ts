import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Topbar } from '../../components/topbar/topbar';
@Component({
  selector: 'app-admin-layout',
  imports: [Sidebar, CommonModule, RouterModule],
  standalone: true,
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss'
})
export class AdminLayout {
sidebarOpen = false;
}
