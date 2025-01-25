import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './dashboard/components/menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './dashboard/components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './dashboard/components/header/header.component';
import { TableModule } from 'primeng/table';
import { Service } from './dashboard/components/services/service';
import { SuppliesComponent } from './dashboard/pages/supplies/supplies.component';
import { HomeComponent } from './dashboard/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    BreadcrumbComponent,
    HeaderComponent,
    SuppliesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    PanelMenuModule,
    BreadcrumbModule,
    MenubarModule,
    CardModule,
    TableModule,
    PaginatorModule,
    TagModule,
    ToastModule,
    ToolbarModule,
    RippleModule,
    CheckboxModule,
    TriStateCheckboxModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
