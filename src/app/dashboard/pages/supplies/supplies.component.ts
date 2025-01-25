import { Component, ViewChild } from '@angular/core';
import { Insumos } from '../../components/interfaces/customer';
import { Table } from 'primeng/table';
import { Service } from '../../components/services/service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.scss']
})
export class SuppliesComponent {
  sidebarVisible4: boolean = false;
  insumos: Insumos[] = [
    { id: 1, articulo: "Item1", precio_unitario: 10, cantidad: 2, precio_total: 20 },
  ];
  insumo: Insumos = { id: 1, articulo: "Item1", precio_unitario: 10, cantidad: 2, precio_total: 20 };
  submitted: boolean = false;
  productDialog: boolean = false;
  selectedInsumos!: Insumos[] | null;

  total: number = 0;
  loading: boolean = true;
  unit: number = 0;
  searchText: string = '';
  clonedInsumos: { [s: string]: Insumos } = {};

  @ViewChild('dt1') dt1: Table | undefined;

  constructor(private customerService: Service, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.insumos = this.customerService.getData();
    if(this.insumos){
      this.loading = false;
    }
    this.unitPrice();
    this.valueTotal();
  }

  unitPrice(){
    this.insumos.forEach((val) => {
      if(val.precio_total && val.cantidad){
        this.unit = Math.round(val.precio_total / val.cantidad);
        if(this.unit === Infinity){
          this.unit = 0;
        }
        val.precio_unitario = this.unit;
      }
    });
  }

  valueTotal(){
    this.total = this.insumos.reduce( (acum, current) => {
      return acum + current.precio_total!;
    }, 0)
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  clear(table: Table) {
    table.clear();
    this.searchText = "";
  }

  onRowEditInit(insumo: Insumos) {
    this.clonedInsumos[insumo.id as number] = { ...insumo };
  }

  onRowEditSave(insumo: Insumos) {
      if (insumo && insumo.precio_total! > 0) {
        this.unitPrice();
        delete this.clonedInsumos[insumo.id!];
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Insumo actualizado' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Precio invalido' });
      }
  }

  onRowEditCancel(insumo: Insumos, index: number) {
      this.insumos[index] = this.clonedInsumos[insumo.id!];
      delete this.clonedInsumos[insumo.id!];
  }

  openNew() {
    this.insumo = {} as any;
    this.submitted = false;
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.insumo.articulo?.trim()) {
        if (this.insumo.id) {
            this.insumos[this.findIndexById(this.insumo.id as number)] = this.insumo;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'insumo actualizado', life: 3000 });
        } else {
            this.insumo.id = this.createId();
            this.insumos.push(this.insumo);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Insumo creado', life: 3000 });
            this.unitPrice();
            this.valueTotal();
        }

        this.insumos = [...this.insumos];
        // this.productDialog = false;
        this.insumo = {};
    }
  }

  deleteInsumos(insumo: Insumos) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + insumo.articulo + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.insumos = this.insumos.filter((val) => val.id !== insumo.id);
            this.insumo = {};
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        }
    });
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected products?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.insumos = this.insumos.filter((val) => !this.selectedInsumos?.includes(val));
            this.selectedInsumos = null;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        }
    }); 
  }

  createId(): string | number {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.insumos.length; i++) {
        if (this.insumos[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
  }

  deleteSelectedInsumos() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected products?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.insumos = this.insumos.filter((val) => !this.selectedInsumos?.includes(val));
            this.selectedInsumos = null;
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        }
    });
  }
}
