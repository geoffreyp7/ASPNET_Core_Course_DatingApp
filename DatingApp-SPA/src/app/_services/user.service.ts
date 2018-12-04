import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }

  setUserMainPhoto(id: number, photoId: number) {
    return this.http.post(this.baseUrl + 'users/' + id + '/photos/' + photoId + '/setMain', {});
  }

  deletePhoto(id: number, photoId: number) {
    return this.http.delete(this.baseUrl + 'users/' + id + '/photos/' + photoId);
  }

}
