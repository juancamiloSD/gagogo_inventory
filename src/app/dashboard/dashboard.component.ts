import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumos } from './components/interfaces/customer';
import { Service } from './components/services/service';
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class DashboardComponent {
  
}
