import { Component, Input } from '@angular/core';
import { ImageMailSection } from '../classes/ImageMailSection';

@Component({
    selector: 'image-section',
    templateUrl: './image-section.component.html',
    styleUrls: ['./mail-section.component.scss']
})
export class ImageSection {

    @Input() public model: ImageMailSection;

    constructor () {
    }

    public shouldDisplayPlaceholder (): boolean {
        return !this.model.hasImageName();
    }

    public getUploadedImageUrl (): string {

        return 'http://localhost:3000/uploads/' + this.model.imageName;
    }

    public buildStyle (): any {

        const style = {};

        style['text-align'] = this.getTextAlignment();

        return style;
    }

    private getTextAlignment (): string {
        const orientation = this.model.getOrientationConfiguration();
        return orientation.orientation;
    }
}