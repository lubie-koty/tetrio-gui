import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment.development';


class GeneralResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getServerStatistics() {
    return this.httpClient.get(`${environment.apiUrl}/general/stats`)
  }

  getServerActivity() {
    return this.httpClient.get(`${environment.apiUrl}/general/activity`)
  }
}


class UsersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getLeaderboard() {
    return this.httpClient.get(`${environment.apiUrl}/users/lists/league`)
  }

  getLeadearboardXP() {
    return this.httpClient.get(`${environment.apiUrl}/users/lists/xp`)
  }
}


class NewsResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getNews() {
    return this.httpClient.get(`${environment.apiUrl}/news`)
  }
}


@Injectable({
  providedIn: 'root'
})
export class TetrioService {
  public general: GeneralResource;
  public users: UsersResource;
  public news: NewsResource;

  constructor(
    private httpClient: HttpClient
  ) {
    this.general = new GeneralResource(this.httpClient);
    this.users = new UsersResource(this.httpClient);
    this.news = new NewsResource(this.httpClient);
  }
}
