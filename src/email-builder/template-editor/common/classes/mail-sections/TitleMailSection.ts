import { TemplateEditorToolCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { PaddingAndColorConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/PaddingAndColorConfigurationBlock';
import { TextFeatureConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextFeatureConfigurationBlock';

import { BaseMailSection } from './BaseMailSection';

export class TitleMailSection extends BaseMailSection {

    public title: string;
    private paddingAndColorConfiguration: PaddingAndColorConfigurationBlock;
    private textFeatureConfiguration: TextFeatureConfigurationBlock;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Title;
        this.paddingAndColorConfiguration = new PaddingAndColorConfigurationBlock();
        this.textFeatureConfiguration = new TextFeatureConfigurationBlock();
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.paddingAndColorConfiguration, this.textFeatureConfiguration];
    }

    protected getJSONState (): any {
        const state = {
            title: this.title
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.title = state.title;
    }

    public getPaddingAndColorConfiguration (): PaddingAndColorConfigurationBlock {
        return this.paddingAndColorConfiguration;
    }

    public getTextFeatureConfiguration (): TextFeatureConfigurationBlock {
        return this.textFeatureConfiguration;
    }
}