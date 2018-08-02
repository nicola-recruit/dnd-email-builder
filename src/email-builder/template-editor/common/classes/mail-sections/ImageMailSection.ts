import { BaseMailSection } from './BaseMailSection';
import { TemplateEditorToolCategory, MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';

export class ImageMailSection extends BaseMailSection {

    public imageUid: string;
    protected orientationConfiguration: OrientationConfigurationBlock;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Image;
        this.orientationConfiguration = new OrientationConfigurationBlock();
    }
    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.orientationConfiguration];
    };

    protected getJSONState (): any {
        const state = {
            imageUid: this.imageUid
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.imageUid = state.imageUid;
    }

    public getOrientationConfiguration (): OrientationConfigurationBlock {
        return this.orientationConfiguration;
    }
}