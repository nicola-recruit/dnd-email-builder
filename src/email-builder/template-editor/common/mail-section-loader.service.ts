import { Injectable } from '@angular/core';
import { MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MailSectionLoaderService {

    constructor () {}

    public loadMailSections (): Observable<MailTemplateSection[]> {
        return of([]);
    }
}