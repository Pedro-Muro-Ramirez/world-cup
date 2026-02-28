import { Router } from "express"
import { supabase } from "../db/supabase"
import type { SoccerNation } from "../types/SoccerNations"

type NationRow = {
  id: number
  code: string
  name: string
  region: string
  flag_code: string
  fifa_ranking: number
  qualified_2026: boolean
  wc_appearances: number
  wc_wins: number
  wc_best_finish: string
  key_players: { name: string; sort_order: number }[]
}

const router = Router()

function rowToNation(row: NationRow): SoccerNation {
  return {
    code: row.code,
    name: row.name,
    region: row.region as SoccerNation["region"],
    flagCode: row.flag_code,
    fifaRanking: row.fifa_ranking,
    qualified2026: row.qualified_2026,
    worldCups: {
      appearances: row.wc_appearances,
      wins: row.wc_wins,
      bestFinish: row.wc_best_finish as SoccerNation["worldCups"]["bestFinish"],
    },
    keyPlayers: (row.key_players ?? [])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((p) => p.name),
  }
}

router.get("/", async (_req, res) => {
  const { data, error } = await supabase
    .from("nations")
    .select("*, key_players(name, sort_order)")

  if (error) {
    res.status(500).json({ error: error.message })
    return
  }

  res.json((data as NationRow[]).map(rowToNation))
})

router.get("/:code", async (req, res) => {
  const code = req.params.code.toUpperCase()

  const { data, error } = await supabase
    .from("nations")
    .select("*, key_players(name, sort_order)")
    .eq("code", code)
    .single()

  if (!data || error) {
    res.status(404).json({ error: "Nation not found" })
    return
  }

  res.json(rowToNation(data as NationRow))
})

export default router
