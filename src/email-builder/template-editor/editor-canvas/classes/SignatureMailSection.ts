import { BaseMailSection } from './BaseMailSection';
import { TemplateEditorToolCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/right-toolbar/classes/OrientationConfigurationBlock';

export class SignatureMailSection extends BaseMailSection {

    public signature: string;
    protected orientationConfiguration: OrientationConfigurationBlock;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Signature;
        this.orientationConfiguration = new OrientationConfigurationBlock();
    }

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.orientationConfiguration];
    };

    protected getJSONState (): any {
        const state = {
            signature: this.signature
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.signature = state.signature;
    }

    public getOrientationConfiguration (): OrientationConfigurationBlock {
        return this.orientationConfiguration;
    }
}