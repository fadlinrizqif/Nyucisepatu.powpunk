interface FilterProductParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: "service" | "cleaner";
}

type Features = {
  coverage: string;
  material: string;
  bonus: string;
  estimasi: string;
}

type Product = {
  id: number;
  name: string;
  category: "service" | "cleaner";
  description: string;
  features: Features;
  price: number;
  stock: number
}

export type ProductsResponse = {
  data?: Product[];
  total?: number;
  error?: string
}

type ResultTuple<T, E = Error> =
  | [data: T, error: null]
  | [data: null, error: E]


export async function getProducts(params: FilterProductParams): Promise<ResultTuple<ProductsResponse>> {
  try {
    const url = new URL("http://localhost:8080/api/products");

    if (params.page !== undefined) url.searchParams.append("page", params.page.toString());
    if (params.limit !== undefined) url.searchParams.append("limit", params.limit.toString());
    if (params.search) url.searchParams.append("search", params.search);
    if (params.category) url.searchParams.append("category", params.category);

    const res = await fetch(url.toString())
    const data: ProductsResponse = await res.json()
    if (!res.ok || data.error) {
      return [null, new Error("Something wrong in server" + res.body)]
    }
    return [data, null];

  } catch (err) {
    const errorInstance = err instanceof Error ? err : new Error("Prblem in Network or Runtime")
    return [null, errorInstance]
  }
}
