import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { ServerActivity, ServerStatistics } from '../models/general';
import { Leaderboard, XPLeaderboard } from '../models/users';
import { NewsData } from '../models/news';

interface APIResponse<Model> {
  data: Model;
}

class GeneralResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getServerStatistics() {
    return this.httpClient.get<APIResponse<ServerStatistics>>(
      `${environment.apiUrl}/general/stats`
    );
  }

  getServerActivity() {
    return this.httpClient.get<APIResponse<ServerActivity>>(
      `${environment.apiUrl}/general/activity`
    );
  }
}

class UsersResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getLeaderboard() {
    return this.httpClient.get<APIResponse<Leaderboard>>(
      `${environment.apiUrl}/users/lists/league`
    );
  }

  getLeaderboardXP() {
    console.log(`${environment.apiUrl}/users/lists/xp`);
    return this.httpClient.get<APIResponse<XPLeaderboard>>(
      `${environment.apiUrl}/users/lists/xp`
    );
  }
}

class NewsResource {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getNews() {
    return this.httpClient.get<APIResponse<NewsData>>(
      `${environment.apiUrl}/news`
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class TetrioService {
  public general: GeneralResource;
  public users: UsersResource;
  public news: NewsResource;

  constructor(private httpClient: HttpClient) {
    this.general = new GeneralResource(this.httpClient);
    this.users = new UsersResource(this.httpClient);
    this.news = new NewsResource(this.httpClient);
  }
}
