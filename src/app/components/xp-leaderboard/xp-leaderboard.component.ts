import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { Role, RoleNameMap, XPUser } from '../../models/users';

@Component({
  selector: 'app-xp-leaderboard',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, MatListModule],
  templateUrl: './xp-leaderboard.component.html',
  styleUrl: './xp-leaderboard.component.scss',
})
export class XpLeaderboardComponent {
  @Input({ required: true }) userData: XPUser[] = [];
  public RoleEnum = Role;
  public roleNameMap = RoleNameMap;
}
