import { Component, Input, OnInit } from '@angular/core';
import { AppUserDto } from '@commom/hrm/models';
import { TDSModalRef } from 'tds-ui/modal';

@Component({
  selector: 'hrm-modal-duplicate-staff',
  templateUrl: './modal-duplicate-staff.component.html',
  styleUrls: ['./modal-duplicate-staff.component.scss']
})
export class ModalDuplicateStaffComponent implements OnInit {

  @Input() listDataOfStaffDuplicate!: AppUserDto;

  constructor(
    private modal: TDSModalRef,
  ) { }

  ngOnInit(): void { 
  }

  cancel() {
    this.modal.destroy(null);
  }
}
