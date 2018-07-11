import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { TextTool } from '../tools/TextTool';

export class TextToolFactory implements TemplateEditorToolFactory {

    public buildTool (): TextTool {
        return new TextTool('notes', 'Text');
    }
}