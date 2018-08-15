import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MailTemplateSection } from 'email-builder/template-editor/template-editor.types';

export type SelectedMailSectionEventObserver = (mailSection: MailTemplateSection) => void;

@Injectable({
    providedIn: 'root',
})
export class CanvasEventService {

    private selectedMailSectionEvent: Subject<MailTemplateSection>;

    constructor () {
        this.selectedMailSectionEvent = new Subject<MailTemplateSection>();
    }

    public setSelectedMailSection (mailSection: MailTemplateSection): void {
        this.selectedMailSectionEvent.next(mailSection);
    }

    public subscribeSelectedMailSectionEvent (observable: SelectedMailSectionEventObserver): Subscription {
        return this.selectedMailSectionEvent.subscribe(observable);
    }
}