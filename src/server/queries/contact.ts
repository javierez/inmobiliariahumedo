

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina de La Rúa",
  "address": {
  "street": "Calle La Rúa, 15 - bajo",
  "city": "León",
  "state": "León",
  "country": "España"
},
  "phoneNumbers": {
  "main": "987 21 04 25"
},
  "emailAddresses": {
  "info": "inmo@inmobiliariahumedo.com"
},
  "scheduleInfo": {
  "weekdays": "10:00 - 14:00 y 17:00 - 20:00",
  "saturday": "Cerrado",
  "sunday": "Cerrado"
},
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=42.59738,-5.56992",
  "isDefault": true
}]
};
}

