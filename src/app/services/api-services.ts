import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export interface ApiResponse {
  status: number;
  error?: string,
  message: string,
  err?: string,
  data?: any
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router,) { }

  public get(url: string) {
    return this.http.get<ApiResponse>(url);
  }

  public post(url: string, postData: any) {
    return this.http.post<ApiResponse>(url, postData);
  }

  public delete(url: string) {
    return this.http.delete<ApiResponse>(url);
  }

  public patch(url: string, postData: any) {
    return this.http.patch<ApiResponse>(url, postData);
  }


  public handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      const e: ApiResponse = {
        status: error.status,
        error: error.statusText,
        message: error.error['message']
      }

      error = e;
    }
  }


}