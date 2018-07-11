import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { LinkTool } from '../tools/LinkTool';

export class LinkToolFactory implements TemplateEditorToolFactory {

    public buildTool (): LinkTool {
        return new LinkTool('insert_link', 'Link');
    }
}