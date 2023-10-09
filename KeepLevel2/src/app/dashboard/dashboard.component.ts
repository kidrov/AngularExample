import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Note } from '../model/note.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notes: Note[] = [];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.fetchNotes();
  }

  fetchNotes(): void {
    this.notesService.getNotes().subscribe(
      (notes) => {
        this.notes = notes;
      },
      (error) => {
        console.error('Error fetching notes:', error);
      }
    );
  }
}
