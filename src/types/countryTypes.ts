// All six FIFA confederations
type Region =
  | "UEFA"
  | "CONMEBOL"
  | "CONCACAF"
  | "CAF"
  | "AFC"
  | "OFC"

// Shape of a single nation returned from the API
export interface SoccerNation {
  code: string          // 3-letter FIFA country code (e.g. "BRA")
  name: string
  region: Region
  flagCode: string      // 2-letter ISO code used by flagcdn.com (e.g. "br")
  fifaRanking: number
  worldCups: {
    appearances: number
    wins: number
    bestFinish:
      | "Winner"
      | "Runner-up"
      | "Semi-finals"
      | "Quarter-finals"
      | "Group stage"
      | "Round of 16"
      | "Fourth place"
      | "Debut"
  }
}
