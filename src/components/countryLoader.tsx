import type { LoaderFunctionArgs } from "react-router-dom"

// React Router loader for the /:postId route.
// Fetches a single nation by its FIFA code before the page renders.
// Throws a 404 Response if the code is missing or the API returns an error.
export async function countryLoader({params}: LoaderFunctionArgs) {
    const { postId } = params
    if (!postId) {
        throw new Response("Not Found", {status: 404})
    }
    const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'
    const response = await fetch(`${apiUrl}/api/nations/${postId}`)

    if (!response.ok) {
        throw new Response("Not Found", {status: 404})
    }
    const data = await response.json()
    return data
}
