"use server";


export async function fetchLocationSuggestions(query: string, sessionToken: string): Promise<string[]> {
  if (query.length === 0) {
    return [];
  }

  const googleApiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!googleApiKey) {
    console.error("Google Places API key is not set.");
    return [];
  }

  const res = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": googleApiKey,
      "X-Goog-FieldMask": "suggestions.placePrediction.text.text,suggestions.placePrediction.placeId"
    },
    body: JSON.stringify({
      input: query,
      sessionToken,
      includedPrimaryTypes: ["locality"],
    }),
  });

  const data = await res.json();
  const places = data.suggestions?.map((suggestion: { placePrediction: { text: { text: string } } }) => suggestion.placePrediction.text.text) || [];

  return places;
}
