import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private firestore: Firestore, 
    private angularFirestore: AngularFirestore
  ) {}

  getTasks(): Observable<any[]> {
    const tasksCollection = collection(this.firestore, 'tasks');
    return collectionData(tasksCollection, { idField: 'id' });
  }

  updateTask(taskId: string, updatedData: any): Promise<void> {
    return this.angularFirestore.collection('tasks').doc(taskId).update(updatedData);
  }

}