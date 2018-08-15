import { Injectable } from '@angular/core';
import { TemplateTool } from './classes/TemplateTool';
import { TemplateToolRegistryFactory } from './classes/TemplateToolRegistryFactory';

@Injectable({
    providedIn: 'root',
})
export class LeftToolbarService {

    private templateToolRegistry: TemplateTool[];

    constructor () {
        this.templateToolRegistry = this.buildEditorToolRegistry();
    }

    private buildEditorToolRegistry (): TemplateTool[] {
        const registryFactory = new TemplateToolRegistryFactory();
        return registryFactory.buildToolRegistry();
    }

    public getEditorToolRegistry (): TemplateTool[] {
        return this.templateToolRegistry.slice(0);
    }
}