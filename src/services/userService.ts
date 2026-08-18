
export type UserRespond = {
  id?: number;
  created_at?: string;
  updated_at?: string;
  name?: string;
  email?: string;
  error?: string;
}

export type ResultTuple<T, E = Error> =
  | [data: T, error: null]
  | [data: null, error: E]

export async function getUserData(): Promise<ResultTuple<UserRespond>> {
  try {
    const res = await fetch("http://localhost:8080/api/users", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })


    const data: UserRespond = await res.json()
    if (!res.ok || data.error) {
      const errorMessage = data.error || `Request failed with status ${res.status}`;
      return [null, new Error(errorMessage)];
    }



    return [data, null]
  } catch (err) {
    const errorInstace = err instanceof Error ? err : new Error("Something wrong in Network")
    return [null, errorInstace]
  }
}
