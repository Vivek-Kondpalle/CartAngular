import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from './api.service'

describe('Api Service Testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let service: ApiService

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        })

        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('can test HttpClient.get', () => {
        const testData = {
            "id": 1,
            "title": "Fjallraven",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        };

        httpClient.get('https://fakestoreapi.com/products')
            .subscribe(data =>
                expect(data).toEqual(testData)
            );

        const req = httpTestingController.expectOne('https://fakestoreapi.com/products');
        console.log('req in api test', req)
        expect(req.request.method).toEqual('GET');

        req.flush(testData);

        httpTestingController.verify();
    });
})