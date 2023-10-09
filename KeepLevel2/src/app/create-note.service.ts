import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class CreateNoteService {

  private baseUrl = 'http://localhost:5141/api';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.baseUrl}/notes`);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.baseUrl}/notes`, note);
  }
}
