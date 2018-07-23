import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';
import { TextConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextConfigurationBlock';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';

import { TextBasedMailSection } from './TextBasedMailSection';

export class TextMailSection extends TextBasedMailSection {

    public text: string;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Text;
        this.text = '<Click and edit>';
    }

    protected buildTextConfiguration (): TextConfigurationBlock {
        const textConfiguration = new TextConfigurationBlock();
        textConfiguration.fontSize = 12;
        return textConfiguration;
    }

    protected buildOrientationConfiguration (): OrientationConfigurationBlock {
        const orientationConfiguration = new OrientationConfigurationBlock();
        orientationConfiguration.orientation = orientationConfiguration.left;
        return orientationConfiguration;
    }

    protected getJSONState (): any {
        const state = {
            text: this.text
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.text = state.text;
    }
}