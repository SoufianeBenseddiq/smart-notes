import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import {NoteService} from '../../services/note';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.html',
  styleUrls: ['./note-form.css']
})
export class NoteFormComponent {
  @Output() noteAdded = new EventEmitter<Note>();
  note: Note = { title: '', content: '' };
  loading = false;

  constructor(private noteService: NoteService) {}

  submit() {
    if (!this.note.title.trim() || !this.note.content.trim()) return;
    this.loading = true;
    this.noteService.save(this.note).subscribe({
      next: (saved) => {
        this.noteAdded.emit(saved);
        this.note = { title: '', content: '' };
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }
}
