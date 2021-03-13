import { SpinnerService } from './spinner.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(
        public service: SpinnerService
    ) {    }

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            this.service.show();

            return next.handle(req).pipe(finalize(()=> this.service.hide()));
        }
}