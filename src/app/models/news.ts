export enum NewsType {
  Leaderboard = 'leaderboard',
  PersonalBest = 'personalbest',
  Badge = 'badge',
  Rankup = 'rankup',
  Supporter = 'supporter',
  SupporterGift = 'supporter_gift',
}

export interface LeaderboardRecord {
  username: string; // The username of the person who got the leaderboard spot.
  gametype: string; // The game mode played.
  rank: number; // The global rank achieved.
  result: number; // The result (score or time) achieved.
  replayid: string; // The replay's shortID.
}

export interface PersonalBestRecord {
  username: string; // The username of the player.
  gametype: string; // The game mode played.
  result: number; // The result (score or time) achieved.
  replayid: string; // The replay's shortID.
}

export interface BadgeRecord {
  username: string; // The username of the player.
  type: string; // The badge's internal ID, and the filename of the badge icon (all PNGs within /res/badges/)
  label: string; // The badge's label.
}

export interface RankupRecord {
  username: string; // The username of the player.
  rank: string; // The new rank.
}

export interface SupporterRecord {
  username: string; // The username of the player.
}

export interface SupporterGiftRecord {
  username: string; // The username of the recipient.
}

type Record =
  | LeaderboardRecord
  | PersonalBestRecord
  | BadgeRecord
  | RankupRecord
  | SupporterRecord
  | SupporterGiftRecord;

export interface NewsEntry {
  stream: string; // The item's stream.
  type: NewsType; // The item's type.
  data: Record; // The item's records.
  ts: Date; // The item's creation date.
}

export interface NewsData {
  news: NewsEntry[];
}
