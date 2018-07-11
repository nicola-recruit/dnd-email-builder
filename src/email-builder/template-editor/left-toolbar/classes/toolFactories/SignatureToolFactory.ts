import { TemplateEditorToolFactory } from 'email-builder/template-editor/template-editor.interfaces';
import { SignatureTool } from '../tools/SignatureTool';

export class SignatureToolFactory implements TemplateEditorToolFactory {

    public buildTool (): SignatureTool {
        return new SignatureTool('fingerprint', 'Signature');
    }
}