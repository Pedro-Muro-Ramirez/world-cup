import { useLoaderData, Link } from "react-router-dom"
import type { SoccerNation } from "../types/countryTypes"

// Detail page for a single nation.
// Data is pre-fetched by countryLoader before this component renders.
export default function CountryInfo() {
    const country = useLoaderData() as SoccerNation

    return (
        <section className="w-full">
            <div className="mx-auto max-w-6xl px-8 py-16 w-full">
                <Link to="/" className="inline-flex items-center gap-2 mb-12 px-6 py-2 rounded-md shadow-md bg-white dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-white">← Back</Link>
                <div className="flex items-center gap-24">
                    <img src={`https://flagcdn.com/${country.flagCode}.svg`} className="w-[560px] object-contain"/>
                    <div className="text-gray-900 dark:text-white">
                        <h1 className="text-3xl mb-6"><span className="font-extrabold">Country:</span> {country?.name}</h1>
                        <p><span className="font-bold">Confederation:</span> {country.region}</p>
                        <p><span className="font-bold">Fifa Ranking:</span> {country.fifaRanking}</p>
                        <p className="font-bold">World Cup stats:</p>
                        <ul className="ml-6 list-disc">
                            <li>Appearances: {country.worldCups.appearances}</li>
                            <li>Wins: {country.worldCups.wins}</li>
                            <li>Best Finish: {country.worldCups.bestFinish}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
