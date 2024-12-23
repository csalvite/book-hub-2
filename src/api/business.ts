import { get } from './main';

export async function getBusinessTypes(term: string) {
  const endpoint = `/business/type?search=${term}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await get(endpoint);
  return response.data;
}
