import { TemplateEditorToolCategory, MailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { TitleMailSection } from './mail-sections/TitleMailSection';
import { NullMailSection } from './mail-sections/NullMailSection';

export class MailSectionFactory {

    public buildMailSection (toolCategory: TemplateEditorToolCategory): MailTemplateSection {

        if (toolCategory === TemplateEditorToolCategory.Title) {
            return this.buildTitleSection();
        }

        return new NullMailSection();
    }

    private getNewUid (): string {
        const currentMillisTimestamp = Date.now();
        return currentMillisTimestamp.toString(36);
    }

    private buildTitleSection (): TitleMailSection {
        const section = new TitleMailSection();
        section.uid = this.getNewUid();
        return section;
    }
}
