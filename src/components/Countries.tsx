import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router"
import type { SoccerNation } from "../types/countryTypes"

export default function Countries() {
    const [countries, setCountries] = useState<SoccerNation[]>([])
    const [searchParams, setSearchParams] = useSearchParams()

    // Read the active confederation filter from the URL (e.g. ?type=UEFA)
    const typeFilter = searchParams.get("type")

    // Fetch all nations from the backend on mount
    useEffect(() => {
        async function getCountries() {
            try {
                const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'
                const response = await fetch(`${apiUrl}/api/nations`)
                if(!response.ok) {
                    throw new Error('Error fetching countries')
                }
                const data: SoccerNation[] = await response.json()
                setCountries(data)
            } catch (err) {
                // TODO: display an error state to the user
            }
        }
        getCountries()
    }, [])

    // Show all countries or only those matching the selected confederation
    const filteredCountries = typeFilter
        ? countries.filter((country) => country.region === typeFilter)
        : countries

    // Render a card for each country linking to its detail page
    const countryElem = filteredCountries.map((country) => {
        return (
            <Link to={`/${country.code.toLowerCase()}`} key={country.name} className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                <div className="h-44">
                    <img src={`https://flagcdn.com/${country.flagCode}.svg`} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{country.name}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-200 mb-1"><span className="font-semibold">Confederation: </span><span className="font-light">{country.region}</span></p>
                    <p className="text-sm text-gray-600 dark:text-gray-200"><span className="font-semibold">Fifa Ranking: </span><span className="font-light">{country.fifaRanking}</span></p>
                </div>
            </Link>
        )
    })

    return (
        <section className="w-full">
            {/* Confederation filter dropdown — updates the ?type= query param */}
            <div className="flex justify-end px-8 py-6">
                <div className="relative">
                    <select
                        className="appearance-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-transparent px-5 py-3 pr-10 rounded-md shadow-md cursor-pointer focus:outline-none"
                        value={typeFilter ?? ""}
                        onChange={(e) => {
                            const val = e.target.value
                            val ? setSearchParams({ type: val }) : setSearchParams({})
                        }}
                    >
                        <option value="">Filter by Confederation</option>
                        <option value="UEFA">UEFA</option>
                        <option value="CAF">CAF</option>
                        <option value="CONCACAF">CONCACAF</option>
                        <option value="AFC">AFC</option>
                        <option value="CONMEBOL">CONMEBOL</option>
                        <option value="OFC">OFC</option>
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white">▾</span>
                </div>
            </div>

            {/* Country card grid */}
            <div className="grid max-w-7xl mx-auto grid-cols-4 gap-20">
                {countryElem}
            </div>
        </section>
    )
}
