import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    class:
      'flex-none w-64 bg-sky-300 box-border m-2 p-2 shadow shadow-slate-400 overflow-auto',
  },
})
export class SidebarComponent {}
