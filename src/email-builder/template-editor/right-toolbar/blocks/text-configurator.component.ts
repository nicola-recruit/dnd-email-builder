import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TextConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/TextConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'text-configurator',
    templateUrl: './text-configurator.component.html'
})
export class TextConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    public readonly italicFont: string = 'italic';
    public readonly underlineFont: string = 'underline';
    public readonly boldFont: string = 'bold';

    @Input() public configurationBlock: TextConfigurationBlock;

    constructor (private formBuilder:FormBuilder) {
        super();
    }

    public ngOnInit (): void {
        this.initForm();
    }

    public ngOnDestroy (): void {
        this.destroyForm();
    }

    public setColor (selectedColor: string): void {
        this.configurationFormGroup.controls['fontColor'].setValue(selectedColor);
    }

    public getTextStyles (): string[] {
        const textStyle = [];
        if (this.configurationBlock.italic) {
            textStyle.push(this.italicFont);
        }
        if (this.configurationBlock.bold) {
            textStyle.push(this.boldFont);
        }
        if (this.configurationBlock.underline) {
            textStyle.push(this.underlineFont);
        }
        return textStyle;
    }

    public setTextStyles (textStyle: string[]): void {
        this.configurationBlock.italic = textStyle.includes(this.italicFont);
        this.configurationBlock.bold = textStyle.includes(this.boldFont);
        this.configurationBlock.underline = textStyle.includes(this.underlineFont);
    }

    protected createFormGroup (configurationBlock: TextConfigurationBlock): FormGroup {
        return this.formBuilder.group({
            fontColor: [configurationBlock.fontColor],
            fontSize: [configurationBlock.fontSize]
        });
    }
}
