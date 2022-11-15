import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {
  public isUpdateUser : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
}
