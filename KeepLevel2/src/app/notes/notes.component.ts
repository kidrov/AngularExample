import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../models/note.model';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteModalComponent } from '../update-note-modal/update-note-modal.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService, public dialog: MatDialog) { }

  ngOnInit(): void 
  {
    this.loadNotes();
  }

  loadNotes(): void 
  {
    this.notesService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }

  updateNoteDialog(note: Note): void 
  {
    const dialogRef = this.dialog.open(UpdateNoteModalComponent, {
      width: '400px',
      data: { note }
    });

    dialogRef.afterClosed().subscribe(updatedNote => {
      if (updatedNote) {
        this.updateNote(updatedNote);
      }
    });
  }

  updateNote(updatedNote: Note): void {
    this.notesService.updateNote(updatedNote).subscribe(
      () => {
        this.loadNotes();
        alert('Note updated successfully.');
      },
      error => {
        alert('Error updating note. Please try again.');
      }
    );
  }


  deleteNote(noteId: number): void {
    console.log(noteId);
    this.notesService.deleteNote(noteId).subscribe(
      (response)=> 
      {
        alert("Delete Sucessful");
        this.loadNotes();
      },
      error=>
      {
        alert('Error updating note. Please try again.');
      });
  }
}
