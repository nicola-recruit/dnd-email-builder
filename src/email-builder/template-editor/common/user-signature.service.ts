import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserSignatureService {

    constructor () {}

    public getUserSignature (): string {
        return '<p>Your beloved consultant</p>';
    }
}