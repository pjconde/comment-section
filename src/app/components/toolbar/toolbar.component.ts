import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  forHomePage: boolean = false;

  @Input()
  postTitle: string | undefined = '';

  homepageTitle: string | undefined  = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.homepageTitle = this.forHomePage ? 'Home' : this.postTitle
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationDialogComponent);
  }

}
