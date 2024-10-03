import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private firestore: Firestore) {}

  getTasks(): Observable<any[]> {
    const tasksCollection = collection(this.firestore, 'tasks');
    return collectionData(tasksCollection, { idField: 'id' });
  }
}