export interface BusinessFormData {
  businessInfo: {
    ownerName: string;
    name: string;
    type: number;
    description: string;
    email: string;
    password: string;
  };
  address: {
    phone: string;
    street: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
    zipCode: string;
  };
  services: Array<{
    description: string | null;
    id: number | null;
    name: string;
    price: number;
    duration: number;
  }>;
  schedule: {
    weekdays: string[];
    hours: Record<
      string,
      {
        open: string;
        close: string;
      }
    >;
  };
  photos: string[];
  payment: {
    accountHolder: string;
    accountNumber: string;
    routingNumber: string;
  };
  terms: boolean;
}

export interface BusinessSuccessResponse {
  id: number;
  businessName: string;
  businessTypeId: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  description: string;
  ownerId: number;
  createdAt: string;
  openingHoursId: number;
  imagesId: number;
  locationId: number;
}

export interface IdName {
  id: number;
  name: string;
}
