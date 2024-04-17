export enum Role {
  Anonymous = 'anon',
  User = 'user',
  Bot = 'bot',
  JuniorModerator = 'halfmod',
  Moderator = 'mod',
  Administrator = 'admin',
  SystemOperator = 'sysop',
}

export const RoleNameMap = {
  [Role.Anonymous]: 'Anonymous',
  [Role.User]: 'User',
  [Role.Bot]: 'Bot',
  [Role.JuniorModerator]: 'Junior Moderator',
  [Role.Moderator]: 'Moderator',
  [Role.Administrator]: 'Administrator',
  [Role.SystemOperator]: 'System Operator',
};

interface League {
  gamesplayed: number; // The amount of TETRA LEAGUE games played by this user.
  gameswon: number; // The amount of TETRA LEAGUE games won by this user.
  rating: number; // This user's TR (Tetra Rating), or -1 if less than 10 games were played.
  rank: string; // This user's letter rank. Z is unranked.
  bestrank: string; // This user's highest achieved rank this season.
  apm?: number; // This user's average APM (attack per minute) over the last 10 games.
  pps?: number; // This user's average PPS (pieces per second) over the last 10 games.
  vs?: number; // This user's average VS (versus score) over the last 10 games.
}

export interface User {
  username: string; // The user's username.
  role: Role; // The user's role (one of "anon", "user", "bot", "halfmod", "mod", "admin", "sysop").
  xp: number; // The user's XP in points.
  country?: string; // The user's ISO 3166-1 country code, or null if hidden/unknown. Some vanity flags exist.
  supporter: boolean; // Whether this user is currently supporting TETR.IO <3
  verified: boolean; // Whether this user is a verified account.
  league: League; // This user's current TETRA LEAGUE standing.
}

export interface Leaderboard {
  users: User[];
}

export interface XPUser {
  username: string; // The user's username.
  role: Role; // The user's role (one of "anon", "user", "bot", "halfmod", "mod", "admin", "sysop").
  ts?: string; // When the user account was created. If not set, this account was created before join dates were recorded.
  country?: string; // The user's ISO 3166-1 country code, or null if hidden/unknown. Some vanity flags exist.
  supporter: boolean; // Whether this user is currently supporting TETR.IO <3
  verified: boolean; // Whether this user is a verified account.
  xp: number; // The user's XP in points.
  gamesplayed: number; // The amount of online games played by this user. If the user has chosen to hide this statistic, it will be -1.
  gameswon: number; // The amount of online games won by this user. If the user has chosen to hide this statistic, it will be -1.
  gametime: number; // The amount of seconds this user spent playing, both on- and offline. If the user has chosen to hide this statistic, it will be -1.
}

export interface XPLeaderboard {
  users: XPUser[];
}
