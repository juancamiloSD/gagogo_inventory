import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
    getData() {
        return [
            {
                id: 1,
                articulo: "caja cubo",
                precio_unitario: 2000,
                cantidad: 10,
                precio_total: 20000,
                estado: "disponible"
            },
            {
                id: 2,
                articulo: "telaraña",
                precio_unitario: 2000,
                cantidad: 0,
                precio_total: 4000,
                estado: "agotado"
            },
            {
                id: 3,
                articulo: "globo metalico 14",
                precio_unitario: 1500,
                cantidad: 12,
                precio_total: 18000,
                estado: "disponible"

            },
            {
                id: 4,
                articulo: "globo halloween 5",
                precio_unitario: 1483,
                cantidad: 12,
                precio_total: 17800,
                estado: "disponible"

            },
            {
                id: 5,
                articulo: "minichips",
                precio_unitario: 1100,
                cantidad: 24,
                precio_total: 26400,
                estado: "disponible"

            },
            {
                id: 6,
                articulo: "bombombun",
                precio_unitario: 350,
                cantidad: 0,
                precio_total: 16800,
                estado: "agotado"

            },
            {
                id: 7,
                articulo: "masmelo millows",
                precio_unitario: 171,
                cantidad: 100,
                precio_total: 17100,
                estado: "disponible"

            },
            {
                id: 8,
                articulo: "dulces halloween",
                precio_unitario: 463,
                cantidad: 30,
                precio_total: 13900,
                estado: "disponible"

            },
            {
                id: 9,
                articulo: "dulces halloween",
                precio_unitario: 495,
                cantidad: 20,
                precio_total: 9900,
                estado: "disponible"
            },
            {
                id: 10,
                articulo: "oasis",
                precio_unitario: 1941,
                cantidad: 17,
                precio_total: 33000,
                estado: "disponible"

            },
            {
                id: 11,
                articulo: "cinta papel",
                precio_unitario: 4500,
                cantidad: 2,
                precio_total: 9000,
                estado: "disponible"
            },
            {
                id: 12,
                articulo: "globo latex r12",
                precio_unitario: 541,
                cantidad: 12,
                precio_total: 6500,
                estado: "disponible"
            },
            {
                id: 13,
                articulo: "pines halloween",
                precio_unitario: 150,
                cantidad: 100,
                precio_total: 15000,
                estado: "disponible"

            },
            {
                id: 14,
                articulo: "cabello angel naranja",
                precio_unitario: 1500,
                cantidad: 1,
                precio_total: 1500,
                estado: "disponible"
            },
            {
                id: 15,
                articulo: "cepillo dulce",
                precio_unitario: 1000,
                cantidad: 12,
                precio_total: 12000,
                estado: "disponible"

            },
            {
                id: 16,
                articulo: "chicle ojo",
                precio_unitario: 85,
                cantidad: 100,
                precio_total: 8500,
                estado: "disponible"
            },
            {
                id: 17,
                articulo: "goma trululu",
                precio_unitario: 169,
                cantidad: 65,
                precio_total: 11000,
                estado: "disponible"

            },
            {
                id: 18,
                articulo: "caja carton",
                precio_unitario: 1650,
                cantidad: 12,
                precio_total: 19800,
                estado: "disponible"

            },
            {
                id: 19,
                articulo: "chocoreo halloween",
                precio_unitario: 2000,
                cantidad: 12,
                precio_total: 24000,
                estado: "disponible"

            },
            {
                id: 20,
                articulo: "galletas brigde",
                precio_unitario: 541,
                cantidad: 24,
                precio_total: 13000,
                estado: "disponible"

            },
            {
                id: 21,
                articulo: "barrilete pintalengua",
                precio_unitario: 242,
                cantidad: 80,
                precio_total: 19400,
                estado: "disponible"

            },
            {
                id: 22,
                articulo: "ataud dracula",
                precio_unitario: 525,
                cantidad: 20,
                precio_total: 10500,
                estado: "disponible"

            },
            {
                id: 23,
                articulo: "dispensador cinta",
                precio_unitario: 18000,
                cantidad: 1,
                precio_total: 18000,
                estado: "disponible"

            },
            {
                id: 24,
                articulo: "cartulina plana",
                precio_unitario: 750,
                cantidad: 12,
                precio_total: 9000,
                estado: "disponible"
            },
            {
                id: 25,
                articulo: "cinta transparente 2",
                precio_unitario: 1800,
                cantidad: 1,
                precio_total: 1800,
                estado: "disponible"
            },
            {
                id: 26,
                articulo: "cinta transparente 1",
                precio_unitario: 500,
                cantidad: 2,
                precio_total: 1000,
                estado: "disponible"
            },
            {
                id: 27,
                articulo: "foamy negro y naranja",
                precio_unitario: 2500,
                cantidad: 2,
                precio_total: 5000,
                estado: "disponible"
            },
            {
                id: 28,
                articulo: "papel seda",
                precio_unitario: 128,
                cantidad: 25,
                precio_total: 3200,
                estado: "disponible"
            },
            {
                id: 29,
                articulo: "silicona",
                precio_unitario: 642,
                cantidad: 28,
                precio_total: 18000,
                estado: "disponible"

            },
            {
                id: 30,
                articulo: "Caja Mickey mouse",
                precio_unitario: 1500,
                cantidad: 12,
                precio_total: 18000,
                estado: "disponible"

            },
        ];
    }

    constructor(private http: HttpClient) {}
    
    // getCustomersMini() {
    //     return Promise.resolve(this.getData().slice(0, 5));
    // }

    // getCustomersSmall() {
    //     return Promise.resolve(this.getData().slice(0, 10));
    // }

    // getCustomersMedium() {
    //     return Promise.resolve(this.getData().slice(0, 50));
    // }

    // getCustomersLarge() {
    //     return Promise.resolve(this.getData().slice(0, 200));
    // }

    // getCustomersXLarge() {
    //     return Promise.resolve(this.getData());
    // }

    getCustomers() {
        return this.http.get<any>('https://www.primefaces.org/data/customers');
    }
};