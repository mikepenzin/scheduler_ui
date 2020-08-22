import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

enum DriverStatus {
  AT_WORK = 'AT_WORK',
  SICK_LEAVE = 'SICK_LEAVE',
  NOT_EMPLOYED = 'NOT_EMPLOYED',
  VACATION = 'VACATION'
}

enum DriverRole {
  DRIVER = 'DRIVER',
  STEWARD = 'SICK_LEAVE',
  ADMINISTRATOR = 'NOT_EMPLOYED'
}

export interface IDriver {
  id: number;
  name: string;
  surname: string;
  role: DriverRole;
  status: DriverStatus;
  statusColor: string;
  primaryPhoneNumber: number;
  secondaryPhoneNumber: number;
  profilePic: string;
  address: string;
  city: string;
}

export interface IDriverResponse {
  data: IDriver[];
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class DriversService {
  constructor(private http: HttpClient) { }

  getProducts() {
    // const url = environment.apiUrl + '/cakes/paging';
    const url = 'assets/api/dummy.json';
    let params = new HttpParams();
    params = params.append('pageSize', '');

    return this.http.get(url, { params })
      .pipe(
        map((res: IDriverResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}
