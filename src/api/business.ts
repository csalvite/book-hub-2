import { BusinessFormData } from '../types/business';
import { adaptBusinessToCreate } from '../utils/business';
import { get, post } from './main';

export async function getBusinessTypes(term: string) {
  const endpoint = `/business/type?search=${term}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await get(endpoint);
  return response.data;
}

export async function getServices(businessTypeId: number) {
  const endpoint = `/services/recommended?businessTypeId=${businessTypeId}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await get(endpoint);
  return response.data;
}

export async function createBusiness(business: BusinessFormData) {
  const request = adaptBusinessToCreate(business);

  console.log('Request:', request);

  const endpoint = '/business';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response: any = await post(endpoint, request);
  return response.data;
}
