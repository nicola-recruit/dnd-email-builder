import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export class PaddingAndColorConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;
    public padding: number;
    public backgroundColor: string;

    constructor () {
        this.category = MailSectionConfigurationBlockCategory.PaddingAndColor;
        this.padding = 0;
    }

    public toJSON (): any {
        const state = {
            category: this.category,
            padding: this.padding,
            backgroundColor: this.backgroundColor
        };
        return state;
    }

    public fromJSON (state: any): void {
        this.padding = state.padding;
        this.backgroundColor = state.backgroundColor;
    }
}
