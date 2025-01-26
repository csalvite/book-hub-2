import { BusinessFormData } from '../types/business';

type InputData = {
  weekdays: string[];
  hours: {
    [key: string]: {
      open: string;
      close: string;
    };
  };
};

type OutputData = {
  [key: string]: string;
};

function transformSchedule(data: InputData): OutputData {
  // Lista estándar de días de la semana
  const allDays = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const defaultHours = '09:00-17:00';

  const schedule: OutputData = {};

  allDays.forEach((day) => {
    const dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1); // Capitalizar el día
    if (data.weekdays.includes(dayCapitalized)) {
      if (data.hours[dayCapitalized]) {
        // Si tiene horario definido
        schedule[
          day
        ] = `${data.hours[dayCapitalized].open}-${data.hours[dayCapitalized].close}`;
      } else {
        // Si está en weekdays pero sin horario definido
        schedule[day] = defaultHours;
      }
    } else {
      // Si no está en weekdays
      schedule[day] = '';
    }
  });

  return schedule;
}

export function adaptBusinessToCreate(business: BusinessFormData) {
  const adaptedBusiness = {
    business: {
      name: business.businessInfo.name,
      type: business.businessInfo.type,
      password: business.businessInfo.password,
      owner: {
        name: business.businessInfo.ownerName,
        mail: business.businessInfo.email,
        phone: business.address.phone.trim().split(' ').join(''), // Remove spaces
      },
    },
    location: {
      address: business.address.street,
      city: business.address.city,
      state: business.address.state,
      zipCode: business.address.zipCode,
      country: business.address.country,
      latitude: business.address.latitude,
      longitude: business.address.longitude,
    },
    openingHours: transformSchedule(business.schedule),
    services: business.services.map((service) => ({
      name: service.name,
      type: business.businessInfo.type.toString(),
      description: service.description,
      price: service.price,
      duration: service.duration,
    })),
    images: {
      hero: business.photos[0],
      additionalImages: business.photos.slice(1),
    },
  };

  return adaptedBusiness;
}
