import { Component, OnInit } from '@angular/core';
import{ NoteService } from './../note.service';
import { BehaviorSubject } from 'Rxjs';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  notes: BehaviorSubject<any> = new BehaviorSubject([]);
  
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this._noteService.notes.subscribe(
      (response)=>{
        console.log("response from ngOnInit/show.components.ts", response)
        this.notes = response;
        console.log(this.notes)
      }
    )
    this._noteService.getNotes();
  }
}
