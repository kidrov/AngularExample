import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-update-note-modal',
  templateUrl: './update-note-modal.component.html',
  styleUrls: ['./update-note-modal.component.css']
})
export class UpdateNoteModalComponent {

  updatedNote: Note = { ...this.data.note };

  constructor(
    public dialogRef: MatDialogRef<UpdateNoteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { note: Note }
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.updatedNote);
  }

}
