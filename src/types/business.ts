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

export interface IdName {
  id: number;
  name: string;
}

// {
//     "business": {
//         "name": "",
//         "type": 0,
//         "password": "",
//         "owner": {
//             "name": "",
//             "mail": "",
//             "phone": "",
//             "prefix": ""
//         }
//     },
//     "location": {
//         "address": "",
//         "addressNum": "",
//         "city": "",
//         "state": "",
//         "zipCode": "",
//         "country": "",
//         "latitude": 0,
//         "longitude": 0
//     },
//     "openingHours": {
//         "monday": "",
//         "tuesday": "",
//         "wednesday": "",
//         "thursday": "",
//         "friday": "",
//         "saturday": "",
//         "sunday": ""
//     },
//     "services": [],
//     "images": {
//         "hero": "",
//         "additionalImages": []
//     }
// }
