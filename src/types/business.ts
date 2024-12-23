export interface BusinessFormData {
  businessInfo: {
    name: string;
    type: number;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  services: Array<{
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
