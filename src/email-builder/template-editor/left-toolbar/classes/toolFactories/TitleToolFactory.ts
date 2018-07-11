import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { TitleTool } from '../tools/TitleTool';

export class TitleToolFactory implements TemplateEditorToolFactory {

    public buildTool (): TitleTool {
        return new TitleTool('title', 'Title');
    }
}