import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CoreCommonService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSUploadFile } from 'tds-ui/upload';
import { UsePersonalDTO } from '../../dashboard/models/user.dto';
@Injectable({
  providedIn: 'root'
})
export class TimeKeepingPersonalService {

  constructor(private apiService: CoreCommonService, private http: HttpClient) { }

  getKeepingByUserExport(params: UsePersonalDTO): Observable<Blob> {
    return this.http.get(
      environment.apiTHRM + `/api/v1/user/keeping-by-user-export?year=${params.year}&month=${params.month}`,
      {
        responseType: 'blob',
      }
    )
  }

  postImgTimeKeepingUser(userId: string, direction: string, file: File): Observable<TDSSafeAny> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('direction', direction);
    return this.http.post<TDSSafeAny>(
      environment.apiTHRM + `/api/v1/user/add-face`, formData, {
      // reportProgress: true,
      // observe: 'events'
    })
  }

  postMultiImgTimeKeepingUser(userId: string, File: File[] ): Observable<TDSSafeAny> {
    const formData:TDSSafeAny = new FormData();
    // File.forEach((file) => { formData.append('Images', file, file.name); });
    for(let i=0 ; i < File.length ; i++) {
      formData.append('Images', File[i]);
    }
    return this.http.post<TDSSafeAny>(
      environment.apiTHRM + `/api/v1/user/add-faces`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
  //   changePassword(params?: changPasswordUser): Observable<TDSSafeAny> {
  //     let api = {
  //       url: environment.apiTHRM + `user-profile/change-password`,
  //       method: CoreApiMethodType.post
  //     }
  //     return this.apiService.create<TDSSafeAny>(api, params);
  //   }
}
