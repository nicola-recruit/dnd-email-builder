import { TextBasedMailSection } from './TextBasedMailSection';
import { MailSectionConfigurationBlock, UrlBasedMailTemplateSection } from 'email-builder/template-editor/template-editor.types';
import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';
import { TextConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextConfigurationBlock';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';
import { UrlConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/UrlConfigurationBlock';

export class LinkMailSection extends TextBasedMailSection implements UrlBasedMailTemplateSection {

    public url: string;
    public label: string;
    private urlConfiguration: UrlConfigurationBlock;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Link;
        this.urlConfiguration = this.buildUrlConfiguration();
        this.label = '<Click and edit>';
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.urlConfiguration, this.paddingAndColorConfiguration, this.textConfiguration, this.orientationConfiguration];
    };

    protected getJSONState (): any {
        const state = {
            url: this.url,
            label: this.label
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.url = state.url;
        this.label = state.label;
    }

    private setLinkUrl (url: any): void {
        this.url = url;
    }

    private buildUrlConfiguration (): UrlConfigurationBlock {
        const urlConfiguration = new UrlConfigurationBlock(this.setLinkUrl);
        return urlConfiguration;
    }

    protected buildTextConfiguration (): TextConfigurationBlock {
        const textConfiguration = new TextConfigurationBlock();
        textConfiguration.fontSize = 16;
        textConfiguration.underline = true;
        return textConfiguration;
    }

    protected buildOrientationConfiguration (): OrientationConfigurationBlock {
        const orientationConfiguration = new OrientationConfigurationBlock();
        orientationConfiguration.orientation = orientationConfiguration.center;
        return orientationConfiguration;
    }
}