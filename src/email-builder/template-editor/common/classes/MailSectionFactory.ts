import { TemplateEditorToolCategory, MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { UserSignatureService } from 'email-builder/template-editor/common/user-signature.service';
import { TitleMailSection } from './mail-sections/TitleMailSection';
import { TextMailSection } from './mail-sections/TextMailSection';
import { DividerMailSection } from './mail-sections/DividerMailSection';
import { NullMailSection } from './mail-sections/NullMailSection';
import { BaseMailSection } from './mail-sections/BaseMailSection';
import { ButtonMailSection } from './mail-sections/ButtonMailSection';
import { LinkMailSection } from './mail-sections/LinkMailSection';
import { SignatureMailSection } from './mail-sections/SignatureMailSection';

type MailSectionConstructorRepository = {
    [category: number]: { new(): BaseMailSection }
};

export class MailSectionFactory {

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
            [TemplateEditorToolCategory.Signature]: SignatureMailSection
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
