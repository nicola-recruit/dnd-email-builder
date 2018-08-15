import { Component, OnInit, OnDestroy } from '@angular/core';
import { MailTemplateSection, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { CanvasEventService } from 'email-builder/template-editor/common/canvas-event.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'right-toolbar',
    templateUrl: './right-toolbar.component.html',
    styleUrls: ['./right-toolbar.component.scss']
})
export class RightToolbar implements OnInit, OnDestroy {
    
    private selectedMailSectionEventSubscription: Subscription;
    private configurationBlocks: MailSectionConfigurationBlock[];

    constructor (private canvasEventService: CanvasEventService) {
    }

    public ngOnInit (): void {
        this.selectedMailSectionEventSubscription = this.canvasEventService.subscribeSelectedMailSectionEvent((mailSection: MailTemplateSection) => {
            this.updateSelectedMailSection(mailSection);
        });
    }

    private updateSelectedMailSection (section: MailTemplateSection): void {
        this.configurationBlocks = section.getConfigurationBlocks();
    }

    public ngOnDestroy (): void {
        this.selectedMailSectionEventSubscription.unsubscribe();
    }
}
