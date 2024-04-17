import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { User, Role, RoleNameMap } from '../../models/users';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatListModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  @Input({ required: true }) userData: User[] = [];
  public RoleEnum = Role;
  public roleNameMap = RoleNameMap;
}
