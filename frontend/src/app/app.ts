import { Component } from '@angular/core';
import { NoteListComponent } from './components/note-list/note-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteListComponent],
  template: `<app-note-list></app-note-list>`
})
export class App {}
