import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';

@Injectable()
export class NoteService {

  notes: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private _http: Http) { 
  }

  getNotes(){
    this._http.get('/show').subscribe(
      (note) => 
      { console.log("getNotes: ", note.json())
        this.notes.next(note.json())
      }); 
 }

  addNote(new_message: any){
    console.log('new_message added in addNote/service.ts', new_message);
    this._http.post(`/add/${new_message}`, new_message ).subscribe(
      (response) => { this.getNotes(); }
    );
  }
}
