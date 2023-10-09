// src/note.model.ts
export class Note {
  id: number; // You can include an ID property if needed
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
