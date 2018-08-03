import { BaseMailSection } from './BaseMailSection';
import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';

export class NullMailSection extends BaseMailSection {

    constructor () {
        super();
        this.category = null;
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [];
    };

    protected getJSONState (): any {
        return {};
    }

    protected setJSONState (state: any): void {}
}