import { Component } from '@angular/core';
import { StatusEmployedService } from '../../../services/status-employed/status-employed.service';
import { StatusEmployed } from '../../../interfaces/status-employed';

@Component({
  selector: 'app-status-employed-list',
  templateUrl: './status-employed-list.component.html',
  styleUrls: ['./status-employed-list.component.scss'],
})
export class StatusEmployedListComponent {
  constructor(private statusEmployedServ: StatusEmployedService) {}

  dataSource: StatusEmployed[] | any;
  ngOnInit(): void {
    this.getAllDocumenttypes();
  }

  getAllDocumenttypes() {
    this.statusEmployedServ
      .getDocumentTypes()
      .subscribe((data) => (this.dataSource = data));
  }

  displayedColumns: string[] = ['code', 'name', 'actions'];
}
