import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'hrm-confirm-work',
  templateUrl: './confirm-work.component.html',
  styleUrls: ['./confirm-work.component.scss']
})
export class ConfirmWorkComponent implements OnInit {

  checkedPermission: string = 'hr' || 'leader';

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.changePermission(this.checkedPermission);
  }

  changePermission(permission: string) {
    this.checkedPermission = permission;
    this.data.changeRole(permission);
  }

}
