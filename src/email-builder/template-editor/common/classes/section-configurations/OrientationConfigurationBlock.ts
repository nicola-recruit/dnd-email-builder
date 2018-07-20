import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export class OrientationConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;
    public orientation: string;

    constructor () {
        this.category = MailSectionConfigurationBlockCategory.Orientation;
    }

    public toJSON (): any {
        const state = {
            category: this.category,
            orientation: this.orientation
        };
        return state;
    }

    public fromJSON (state: any): void {
        this.orientation = state.orientation;
    }
}
