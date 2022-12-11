import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ParamRatingDTO, RatingDTO } from '../dto/rating.dto';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  getRating(): Observable<RatingDTO[]> {
    return this.http.get<RatingDTO[]>(
      environment.apiBNShop + `rating/`)
  }
  getRatingId(id: number): Observable<RatingDTO> {
    return this.http.get<RatingDTO>(
      environment.apiBNShop + `rating/${id}/`)
  }
  createRating(id: number, data: ParamRatingDTO): Observable<any> {
    return this.http.post<any>(
      environment.apiBNShop + `rating/${id}/`, data)
  }
  replyRating(id: number, data: {
    content: string,
    user: 0
  }): Observable<any> {
    return this.http.post<any>(
      environment.apiBNShop + `rating/reply/${id}/`, data)
  }
}
