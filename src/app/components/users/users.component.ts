import { Component, OnInit } from '@angular/core';

import { TetrioService } from '../../services/tetrio.service';

import { User, XPUser } from '../../models/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  public xpLeaderboardData!: XPUser[];
  public mainLeaderboardData!: User[];

  constructor(private tetrioService: TetrioService) {}

  ngOnInit(): void {
    this.tetrioService.users
      .getLeaderboard()
      .subscribe(
        (response) => (this.mainLeaderboardData = response.data.users)
      );
    this.tetrioService.users
      .getLeaderboardXP()
      .subscribe((response) => (this.xpLeaderboardData = response.data.users));
  }
}
