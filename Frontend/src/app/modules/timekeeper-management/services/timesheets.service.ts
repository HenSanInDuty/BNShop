import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesheetsService {

  constructor(private http: HttpClient) { }

  // xuất file excel bảng chấm công
  exportExcelFile(param: {
    Year?: number;
    Month?: number;
    BranchId?: string;
    DepartmentId?: string;
    SearchText?: string;
    MaxResultCount?: number;
    SkipCount?: number;
    Sorting?: string;
  }): Observable<Blob> {
    return this.http.get(
      environment.apiTHRM +
      `user/keeping-export?SearchText=${param.SearchText}&Month=${param.Month}&Year=${param.Year}&Sorting=${param.Sorting}&BranchId=${param.BranchId}&DepartmentId=${param.DepartmentId}&Sorting${param.Sorting}`,
      {
        responseType: 'blob',
      }
    );
  }

}
