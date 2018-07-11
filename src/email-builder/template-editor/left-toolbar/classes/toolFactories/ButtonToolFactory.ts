import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { ButtonTool } from '../tools/ButtonTool';

export class ButtonToolFactory implements TemplateEditorToolFactory {

    public buildTool (): ButtonTool {
        return new ButtonTool('touch_app', 'Button');
    }
}