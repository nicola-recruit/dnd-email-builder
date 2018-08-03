import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { OrientationConfigurationBlock } from '../classes/OrientationConfigurationBlock';
import { BasicConfiguratorComponent } from './BasicConfiguratorComponent';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'orientation-configurator',
    templateUrl: './orientation-configurator.component.html'
})
export class OrientationConfigurator extends BasicConfiguratorComponent implements OnInit, OnDestroy {

    @Input() public configurationBlock: OrientationConfigurationBlock;

    constructor (private formBuilder:FormBuilder) {
        super();
    }

    public ngOnInit (): void {
        this.initForm();
    }

    public ngOnDestroy (): void {
        this.destroyForm();
    }

    public getOrientation (): string {
        return this.configurationBlock.orientation;
    }

    public setOrientation (orientation: string): void {
        this.configurationBlock.orientation = orientation;
    }

    protected createFormGroup (configurationBlock: OrientationConfigurationBlock): FormGroup {
        return this.formBuilder.group({
        });
    }
}
