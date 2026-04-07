import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';
import { NoteFormComponent } from '../note-form/note-form';
import {NoteService} from '../../services/note';

@Component({
  selector: 'app-note-list',
  standalone: true,
  imports: [CommonModule, NoteFormComponent],
  templateUrl: './note-list.html',
  styleUrls: ['./note-list.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  loading = true;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getAll().subscribe({
      next: (data) => { this.notes = data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  onNoteAdded(note: Note) {
    this.notes.unshift(note);
  }
}
