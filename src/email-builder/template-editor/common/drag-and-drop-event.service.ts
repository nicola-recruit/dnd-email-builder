import { Injectable } from '@angular/core';
import { DragAndDropEventPayloadData } from '../template-editor.types'

@Injectable({
    providedIn: 'root',
})
export class DragAndDropEventService {

    constructor () {}

    public setDataOnDragEvent (event: DragEvent, payload: DragAndDropEventPayloadData): void {
        const serializedPayload = JSON.stringify(payload);
        event.dataTransfer.setData('application/json', serializedPayload);
    }

    public getDataOnDropEvent (event: DragEvent): DragAndDropEventPayloadData {
        const serializedPayload = event.dataTransfer.getData('application/json');
        return JSON.parse(serializedPayload);
    }
}