export async function fetchJson<Response = any>(url: string, init?: RequestInit): Promise<Response> {
  const response = await fetch(
    `https://swapi.dev/api/${url}/`,
    {
      ...init ?? {},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })

  return response.json()
}

export function stripIndex(url:string): number {
  let index: number = 0;

  try {
    index = Number(url.split('/')[5])
  } catch(error) {
    console.error(error);
  }

  return index;
}
