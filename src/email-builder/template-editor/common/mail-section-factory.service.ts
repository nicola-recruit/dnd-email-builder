import { Injectable } from '@angular/core';
import { TemplateEditorToolCategory, MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { UserSignatureService } from 'email-builder/template-editor/common/user-signature.service';
import { TitleMailSection } from 'email-builder/template-editor/editor-canvas/classes//TitleMailSection';
import { TextMailSection } from 'email-builder/template-editor/editor-canvas/classes//TextMailSection';
import { DividerMailSection } from 'email-builder/template-editor/editor-canvas/classes//DividerMailSection';
import { NullMailSection } from 'email-builder/template-editor/editor-canvas/classes//NullMailSection';
import { BaseMailSection } from 'email-builder/template-editor/editor-canvas/classes//BaseMailSection';
import { ButtonMailSection } from 'email-builder/template-editor/editor-canvas/classes//ButtonMailSection';
import { LinkMailSection } from 'email-builder/template-editor/editor-canvas/classes//LinkMailSection';
import { SignatureMailSection } from 'email-builder/template-editor/editor-canvas/classes//SignatureMailSection';
import { SocialMailSection } from 'email-builder/template-editor/editor-canvas/classes//SocialMailSection';
import { ImageMailSection } from 'email-builder/template-editor/editor-canvas/classes//ImageMailSection';

type MailSectionConstructorRepository = {
    [category: number]: { new(): BaseMailSection }
};
@Injectable({
    providedIn: 'root',
})
export class MailSectionFactoryService {

    private constructorRepository: MailSectionConstructorRepository;

    constructor (private userSignatureService: UserSignatureService) {
        this.constructorRepository = this.buildConstructorRepository();
    }

    private buildConstructorRepository (): MailSectionConstructorRepository {
        const repository = {
            [TemplateEditorToolCategory.Title]: TitleMailSection,
            [TemplateEditorToolCategory.Text]: TextMailSection,
            [TemplateEditorToolCategory.Divider]: DividerMailSection,
            [TemplateEditorToolCategory.Button]: ButtonMailSection,
            [TemplateEditorToolCategory.Link]: LinkMailSection,
            [TemplateEditorToolCategory.Signature]: SignatureMailSection,
            [TemplateEditorToolCategory.Social]: SocialMailSection,
            [TemplateEditorToolCategory.Image]: ImageMailSection
        };
        return repository;
    }

    public buildMailSection (toolCategory: TemplateEditorToolCategory): MailTemplateSection {

        if (!this.constructorRepository[toolCategory]) {
            return new NullMailSection();
        }

        const newMailSection = new this.constructorRepository[toolCategory]();

        this.setGeneralProperties(newMailSection);
        this.setTypeSpecificProperties(newMailSection);

        return newMailSection;
    }

    private getNewUid (): string {
        const currentMillisTimestamp = Date.now();
        return currentMillisTimestamp.toString(36);
    }

    private setGeneralProperties (newMailSection: BaseMailSection): void {
        newMailSection.uid = this.getNewUid();
    }

    private setTypeSpecificProperties (newMailSection: any): void {
        if (newMailSection.category === TemplateEditorToolCategory.Signature) {
            newMailSection.signature = this.userSignatureService.getUserSignature();
        }
    }
}
