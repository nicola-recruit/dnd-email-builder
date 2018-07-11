import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { SocialTool } from '../tools/SocialTool';

export class SocialToolFactory implements TemplateEditorToolFactory {

    public buildTool (): SocialTool {
        return new SocialTool('share', 'Social');
    }
}