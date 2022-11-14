import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreCommonService } from '@core/services';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceCustom {

  constructor(private apiService: CoreCommonService, private http:HttpClient ) { }

  putImgCompany(id: string | null, file: File): Observable<TDSSafeAny> {
    const formData = new FormData();
    formData.append('File', file);
    return this.http.put<TDSSafeAny>(
      environment.apiTHRM + `/api/v1/companies/update-avatar?id=${id}`, formData, {
      // reportProgress: true,
      // observe: 'events'
    })
  }
}
