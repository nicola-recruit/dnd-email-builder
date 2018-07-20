import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export class TextFeatureConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;
    public fontFamily: string;
    public fontSize: number;
    public fontColor: string;

    constructor () {
        this.category = MailSectionConfigurationBlockCategory.TextFeature;
    }

    public toJSON (): any {
        const state = {
            category: this.category,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fontColor: this.fontColor
        };
        return state;
    }

    public fromJSON (state: any): void {
        this.fontFamily = state.fontFamily;
        this.fontSize = state.fontSize;
        this.fontColor = state.fontColor;
    }
}