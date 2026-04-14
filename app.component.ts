import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular Dashboard</h1>
    <div *ngFor="let p of patients">
      {{p.name}} - {{p.condition}}
    </div>
  `
})
export class AppComponent implements OnInit {

  patients: any[] = [];

  constructor(private service: PatientService) {}

  ngOnInit() {
    this.service.getPatients().subscribe((data: any) => {
      this.patients = data;
    });
  }
}