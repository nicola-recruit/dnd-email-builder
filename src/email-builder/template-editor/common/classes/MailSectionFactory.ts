import { TemplateEditorToolCategory, MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { TitleMailSection } from './mail-sections/TitleMailSection';
import { TextMailSection } from './mail-sections/TextMailSection';
import { DividerMailSection } from './mail-sections/DividerMailSection';
import { NullMailSection } from './mail-sections/NullMailSection';
import { BaseMailSection } from 'email-builder/template-editor/common/classes/mail-sections/BaseMailSection';

type MailSectionConstructorRepository = {
    [category: number]: { new(): BaseMailSection }
};

export class MailSectionFactory {

    private constructorRepository: MailSectionConstructorRepository;

    constructor () {
        this.constructorRepository = this.buildConstructorRepository();
    }

    private buildConstructorRepository (): MailSectionConstructorRepository {
        const repository = {
            [TemplateEditorToolCategory.Title]: TitleMailSection,
            [TemplateEditorToolCategory.Text]: TextMailSection,
            [TemplateEditorToolCategory.Divider]: DividerMailSection
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

    private setTypeSpecificProperties (newMailSection: BaseMailSection): void {
    }
}
