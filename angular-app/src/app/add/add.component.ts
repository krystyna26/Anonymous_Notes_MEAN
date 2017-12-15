import { Component, OnInit } from '@angular/core';
import{ NoteService } from './../note.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  note = {message:""}
  notes: any[] = [];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.notes.subscribe(
      (notes) => { this.notes = notes }
    )
  }

  addNote(){
    console.log(this.note);
    this._noteService.addNote(this.note.message);
    this.note = {message:""}
  }
}
