'use server'

export async function search(artist: string) {
  const response = await fetch(`https://api.discogs.com/database/search?token=${process.env.DISCOGS_TOKEN}&artist=${artist}&per_page=5`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const result = await response.json();

  return result;
}