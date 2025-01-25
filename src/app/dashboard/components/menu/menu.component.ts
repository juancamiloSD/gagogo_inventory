import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Insumos',
                routerLink: "insumos"
                // icon: 'pi pi-fw pi-file',
            },
            {
                label: 'Productos',
                // icon: 'pi pi-fw pi-pencil',
            },
            {
                label: 'Agenda',
                // icon: 'pi pi-fw pi-user',
            },
            {
                label: 'Rutas',
                // icon: 'pi pi-fw pi-calendar',
            }
        ];
    }
}
