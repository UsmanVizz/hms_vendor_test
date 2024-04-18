import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageBranchService {
  constructor(private http: HttpClient) {}

  manageBranchUrl = 'http://localhost:3001/api/building/branch';

  getManageBranch(): Observable<any> {
    return this.http.get(this.manageBranchUrl);
  }
}
