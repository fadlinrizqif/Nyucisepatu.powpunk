
export interface payloadType {
  email: string;
  password: string;
}

export interface payloadRegister {
  name: string;
  email: string;
  password: string;
}

export type LoginRespond = {
  body?: string;
  error?: string;
}

export type RegisterRespond = {
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

export async function handleLogin(payload: payloadType): Promise<ResultTuple<LoginRespond>> {

  try {
    const res = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(payload)
    })

    const data: LoginRespond = await res.json()
    if (!res.ok || data.error) {
      const errorMessage = data.error || `Request failed with status ${res.status}`;
      return [null, new Error(errorMessage)];
    }

    return [data, null]

  } catch (err) {

    const errorInstace = err instanceof Error ? new Error("apakah errornya disini") : new Error("Something wrong in Network")

    return [null, errorInstace];
  }

}


export async function handleRegister(payload: payloadRegister): Promise<ResultTuple<RegisterRespond>> {
  try {
    const res = await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload)
    })
    const data: RegisterRespond = await res.json()

    if (!res.ok || data.error) {
      const errorMessage = data.error || `Request failed with status ${res.status}`;
      return [null, new Error(errorMessage)];
    }

    return [data, null];

  } catch (err) {

    const errorInstace = err instanceof Error ? err : new Error("Something wrong in Network")
    return [null, errorInstace]
  }

}


export async function handleLogout(): Promise<ResultTuple<null>> {
  try {
    const res = await fetch("http://localhost:8080/api/logout", {
      credentials: "include",
      cache: "no-store"

    })

    const data: LoginRespond = await res.json()
    if (!res.ok || data.error) {
      const errorMessage = data.error || `Request failed with status ${res.status}`;
      return [null, new Error(errorMessage)];
    }

    return [null, null]
  } catch (err) {

    const errorInstace = err instanceof Error ? new Error("apakah errornya disini") : new Error("Something wrong in Network")

    return [null, errorInstace];
  }
}
