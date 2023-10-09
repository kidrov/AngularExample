import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = 'http://localhost:5141/api';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}/Notes`);
  }

  updateNote(updatedNote: Note): Observable<Note> {
    return this.http.put<Note>(`${this.baseUrl}/Notes/${updatedNote.id}`, updatedNote);
  }

  deleteNote(noteId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/notes/${noteId}`);
  }
}
