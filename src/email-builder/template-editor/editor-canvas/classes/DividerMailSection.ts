import { BaseMailSection } from './BaseMailSection';
import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';

export class DividerMailSection extends BaseMailSection {

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Divider;
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [];
    };

    protected getJSONState (): any {
        return {};
    }

    protected setJSONState (state: any): void {}
}