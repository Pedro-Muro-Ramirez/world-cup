export type Region =
  | "UEFA"
  | "CONMEBOL"
  | "CONCACAF"
  | "CAF"
  | "AFC"
  | "OFC";

export interface SoccerNation {
  code: string;
  name: string;
  region: Region;
  flagCode: string;
  fifaRanking: number;
  qualified2026: boolean;
  worldCups: {
    appearances: number;
    wins: number;
    bestFinish:
      | "Winner"
      | "Runner-up"
      | "Semi-finals"
      | "Quarter-finals"
      | "Group stage"
      | "Round of 16"
      | "Fourth place"
      | "Debut";
  };
  keyPlayers: string[];
}