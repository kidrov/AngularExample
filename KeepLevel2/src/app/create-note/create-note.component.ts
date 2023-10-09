import { Component, OnInit } from '@angular/core';
import { CreateNoteService } from '../create-note.service';
import { Note } from '../models/note.model';
import { Router } from '@angular/router';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  notes: Note[] = [];
  newNote: Note = { id: 0, title: '', description: '' };

  constructor(private createnote: CreateNoteService, private router: Router) { }

  ngOnInit(): void {
    this.createnote.getNotes().subscribe((notes)=>{
      this.notes = notes;
      this.newNote.id = Math.floor(Math.random()*100+1);
    })
  }

  createNote(): void {
    this.createnote.addNote(this.newNote).subscribe(() => {
      this.router.navigate(['/notes']);
    });
  }
}
