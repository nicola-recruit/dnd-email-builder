import {　Component, Input　} from '@angular/core';
import { TemplateEditorTool } from '../template-editor.interfaces';

@Component({
    selector: 'template-tool-card',
    templateUrl: './template-tool-card.component.html',
    styleUrls: ['./template-tool-card.component.scss']
})
export class TemplateToolCard {
    
    @Input() public tool: TemplateEditorTool;


}
