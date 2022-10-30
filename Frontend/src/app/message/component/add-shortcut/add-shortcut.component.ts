import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-shortcut',
  templateUrl: './add-shortcut.component.html',
  styleUrls: ['./add-shortcut.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class AddShortcutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
