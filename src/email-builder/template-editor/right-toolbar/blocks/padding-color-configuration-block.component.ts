import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PaddingAndColorConfigurationBlock } from 'email-builder/template-editor/common/classes/section-configurations/PaddingAndColorConfigurationBlock';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'padding-color-configuration-block',
    templateUrl: './padding-color-configuration-block.component.html'
})
export class PaddingColorConfigurationBlock implements OnInit, OnDestroy {

    public formChangesSubscription: Subscription;
    public configurationFormGroup: FormGroup;

    @Input() public configurationBlock: PaddingAndColorConfigurationBlock;

    constructor (private formBuilder:FormBuilder) {}

    public ngOnInit (): void {
        this.configurationFormGroup  = this.createFormGroup(this.configurationBlock);
        this.formChangesSubscription = this.configurationFormGroup.valueChanges.subscribe((valueChanges: any) => {
            this.storeFormValuesIntoConfigurationBlock();
        });
    }

    public ngOnDestroy (): void {
        this.formChangesSubscription.unsubscribe();
    }

    public setColor (selectedColor: string): void {
        this.configurationFormGroup.controls['backgroundColor'].setValue(selectedColor);
    }

    private createFormGroup (configurationBlock: PaddingAndColorConfigurationBlock): FormGroup {
        return this.formBuilder.group({
            backgroundColor: [configurationBlock.backgroundColor],
            padding: [configurationBlock.padding]
        });
    }

    private storeFormValuesIntoConfigurationBlock (): void {
        Object.assign(this.configurationBlock, this.configurationFormGroup.value);
    }
}
