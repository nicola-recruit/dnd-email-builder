import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PaddingAndColorConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/PaddingAndColorConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'padding-color-configurator',
    templateUrl: './padding-color-configurator.component.html'
})
export class PaddingColorConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    @Input() public configurationBlock: PaddingAndColorConfigurationBlock;

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
        this.configurationFormGroup.controls['backgroundColor'].setValue(selectedColor);
    }

    protected createFormGroup (configurationBlock: PaddingAndColorConfigurationBlock): FormGroup {
        return this.formBuilder.group({
            backgroundColor: [configurationBlock.backgroundColor],
            padding: [configurationBlock.padding]
        });
    }
}
