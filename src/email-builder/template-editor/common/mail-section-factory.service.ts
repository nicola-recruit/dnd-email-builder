import { Injectable } from '@angular/core';
import { TemplateEditorToolCategory, MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { UserSignatureService } from 'email-builder/template-editor/common/user-signature.service';
import { TitleMailSection } from './classes/mail-sections/TitleMailSection';
import { TextMailSection } from './classes/mail-sections/TextMailSection';
import { DividerMailSection } from './classes/mail-sections/DividerMailSection';
import { NullMailSection } from './classes/mail-sections/NullMailSection';
import { BaseMailSection } from './classes/mail-sections/BaseMailSection';
import { ButtonMailSection } from './classes/mail-sections/ButtonMailSection';
import { LinkMailSection } from './classes/mail-sections/LinkMailSection';
import { SignatureMailSection } from './classes/mail-sections/SignatureMailSection';
import { SocialMailSection } from './classes/mail-sections/SocialMailSection';
import { ImageMailSection } from './classes/mail-sections/ImageMailSection';

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
