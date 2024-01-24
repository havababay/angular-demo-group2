import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Person } from '../shared/model/person';
import { PersonsService } from '../services/persons.service';
import { MatDialog } from '@angular/material/dialog';
import { DeletePersonDialogComponent } from '../delete-person-dialog/delete-person-dialog.component';

@Component({
  selector: 'app-persons-list',
  standalone: true,
  imports: [
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './persons-list.component.html',
  styleUrl: './persons-list.component.css',
})
export class PersonsListComponent implements OnInit {
  ngOnInit(): void {
    this.allPersons = this.personsService.list();
  } 

  displayedColumns: string[] = ['fullName','email', 'actions'];
  allPersons: Person[] = []

  constructor(private personsService : PersonsService, private dialog : MatDialog) {}

  deletePerson(id : number, fullName : string) {
    let dialogRef = this.dialog.open(DeletePersonDialogComponent, {data : fullName});

    dialogRef.afterClosed().subscribe(deletionSelection =>
      {
        if (deletionSelection) {
          this.personsService.delete(id);
          this.allPersons = this.personsService.list();
        }
      });
  }
}
