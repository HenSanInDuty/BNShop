import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Injectable({
  providedIn: 'root'
})
export class UploadFaceService {

  constructor(private http: HttpClient) { }

  postImgTimeKeepingForUserByHr(userId: string, direction: string, file: File): Observable<TDSSafeAny> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('direction', direction);
    return this.http.post<TDSSafeAny>(
      environment.apiTHRM + `/api/v1/user/add-face/` + userId, formData, {
    })
  }
}
