import { MailSectionConfigurationBlock } from 'email-builder/template-editor/template-editor.types';
import { PaddingAndColorConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/PaddingAndColorConfigurationBlock';
import { TextConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextConfigurationBlock';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';

import { BaseMailSection } from './BaseMailSection';

export abstract class TextBasedMailSection extends BaseMailSection {

    protected paddingAndColorConfiguration: PaddingAndColorConfigurationBlock;
    protected textConfiguration: TextConfigurationBlock;
    protected orientationConfiguration: OrientationConfigurationBlock;

    constructor () {
        super();
        this.paddingAndColorConfiguration = this.buildPaddingAndColorConfiguration();
        this.textConfiguration = this.buildTextConfiguration();
        this.orientationConfiguration = this.buildOrientationConfiguration();
    }

    protected buildPaddingAndColorConfiguration (): PaddingAndColorConfigurationBlock {
        const paddingAndColorConfiguration = new PaddingAndColorConfigurationBlock();
        return paddingAndColorConfiguration;
    } 

    protected abstract buildTextConfiguration (): TextConfigurationBlock;

    protected abstract buildOrientationConfiguration (): OrientationConfigurationBlock;

    public getConfigurationBlocks (): MailSectionConfigurationBlock[] {
        return [this.paddingAndColorConfiguration, this.textConfiguration, this.orientationConfiguration];
    }

    public getPaddingAndColorConfiguration (): PaddingAndColorConfigurationBlock {
        return this.paddingAndColorConfiguration;
    }

    public getTextConfiguration (): TextConfigurationBlock {
        return this.textConfiguration;
    }

    public getOrientationConfiguration (): OrientationConfigurationBlock {
        return this.orientationConfiguration;
    }
}