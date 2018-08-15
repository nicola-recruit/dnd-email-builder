import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FileUploadService {

    private readonly imageServerUrl: string = 'http://localhost:3000/image';

    constructor (private httpClient: HttpClient) { }

    public postFile (fileToUpload: File): Observable<any> {
        const httpUploadOptions = {
            responseType: 'text' as 'text'
        };
        const encapsulatingFormData: FormData = new FormData();
        encapsulatingFormData.append('image', fileToUpload, fileToUpload.name);
        return this.httpClient.post(this.imageServerUrl, encapsulatingFormData, httpUploadOptions);
    }
}