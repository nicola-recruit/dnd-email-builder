import { TemplateEditorToolCategory } from 'email-builder/template-editor/template-editor.types';
import { TextConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextConfigurationBlock';
import { OrientationConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/OrientationConfigurationBlock';

import { TitleAndTextMailSection } from './TitleAndTextMailSection';

export class TitleMailSection extends TitleAndTextMailSection {

    public title: string;

    constructor () {
        super();
        this.category = TemplateEditorToolCategory.Title;
        this.title = '<Click and edit>';
    }

    protected buildTextConfiguration (): TextConfigurationBlock {
        const textConfiguration = new TextConfigurationBlock();
        textConfiguration.fontSize = 24;
        return textConfiguration;
    }

    protected buildOrientationConfiguration (): OrientationConfigurationBlock {
        const orientationConfiguration = new OrientationConfigurationBlock();
        orientationConfiguration.orientation = orientationConfiguration.center;
        return orientationConfiguration;
    }

    protected getJSONState (): any {
        const state = {
            title: this.title
        };
        return state;
    }

    protected setJSONState (state: any): void {
        this.title = state.title;
    }
}