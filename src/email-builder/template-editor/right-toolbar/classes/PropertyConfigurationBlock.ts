import { MailSectionConfigurationBlockCategory, MailSectionConfigurationBlock, ModelPropertyUpdateCallback } from 'email-builder/template-editor/template-editor.types';

export abstract class PropertyConfigurationBlock implements MailSectionConfigurationBlock {

    public category: MailSectionConfigurationBlockCategory;

    constructor (protected modelPropertyUpdateCallback: ModelPropertyUpdateCallback) {}

    public toJSON (): any {
        return {};
    }

    public fromJSON (state: any): void {}

    public abstract updateModel (): void;
}
