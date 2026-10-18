import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/nosotros/muralla-cubos.jpg",
  "title": "Sobre Nosotros",
  "values": [{
  "icon": "Handshake",
  "title": "Ética y honradez",
  "description": "En Inmobiliaria Húmedo siempre hemos pensado que la ética y la honradez no deben ser palabras vacías."
}, {
  "icon": "Eye",
  "title": "Transparencia",
  "description": "Información clara sobre financiación, subvenciones, fiscalidad y los derechos y obligaciones de cada parte antes de firmar nada."
}, {
  "icon": "Award",
  "title": "Profesionalidad",
  "description": "Un equipo que se forma y recicla constantemente para poder aconsejarle y orientarle en la compra, venta o alquiler de su propiedad."
}, {
  "icon": "Users",
  "title": "Trato personalizado",
  "description": "Un servicio serio y cercano: todo nuestro equipo humano se siente orgulloso de poder atenderle."
}],
  "content": "Somos Inmobiliaria Húmedo, una agencia leonesa que desde mediados de 1991 acompaña a familias y propietarios en la compra, venta y alquiler de pisos, casas, locales, solares y garajes en León y su alfoz. Más de tres décadas de trabajo cercano nos avalan, con miles de clientes satisfechos como nuestra mejor carta de presentación.",
  "showKPI": true,
  "content2": "Nuestra propuesta se basa en la ética, la honradez, la transparencia y la profesionalidad. Formamos y reciclamos constantemente a nuestro equipo para asesorarle con rigor en una decisión tan importante como es comprar, vender o alquilar una vivienda, ofreciéndole siempre un trato personalizado y de confianza.",
  "kpi1Data": "35+",
  "kpi1Name": "Años de experiencia",
  "kpi3Data": "11",
  "kpi3Name": "Zonas de actuación",
  "services": [{
  "icon": "Home",
  "title": "Compra de vivienda"
}, {
  "icon": "Key",
  "title": "Venta de tu propiedad"
}, {
  "icon": "Building2",
  "title": "Alquiler"
}, {
  "icon": "Store",
  "title": "Locales, solares y edificios"
}, {
  "icon": "FileCheck",
  "title": "Certificado de eficiencia energética"
}, {
  "icon": "Calculator",
  "title": "Asesoramiento y valoración de inmuebles"
}, {
  "icon": "Banknote",
  "title": "Préstamos e hipotecas"
}],
  "subtitle": "Ética, honradez, transparencia y profesionalidad desde 1991",
  "buttonName": "Contacta a Nuestro Equipo",
  "originsTitle": "De dónde venimos",
  "originsContent": "Inmobiliaria Húmedo abrió en León a mediados de 1991, a las puertas del Barrio Húmedo, en la Plaza Conde Luna nº 6, donde mantuvo su sede social hasta comienzos de 2004. Desde entonces atiende a sus clientes en la calle peatonal de La Rúa nº 15, en pleno casco histórico. Más de treinta años después, seguimos formándonos para asesorar con criterio en una de las decisiones más importantes de la vida.",
  "extendedServices": [{
  "icon": "Home",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-1-plaza-mayor.jpg",
  "title": "Compra de vivienda",
  "description": "Amplia oferta de pisos, apartamentos, dúplex, chalets y casas en León y su alfoz, tanto de obra nueva como de segunda mano, con asesoramiento durante todo el proceso."
}, {
  "icon": "Key",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-2-casa-botines.jpg",
  "title": "Venta de tu propiedad",
  "description": "Te asesoramos si deseas vender: renta libre o protección oficial, fiscalidad, derechos y obligaciones de cada interviniente y todos los aspectos que hay que tener en cuenta antes de decidir."
}, {
  "icon": "Building2",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-3-plaza-san-martin.jpg",
  "title": "Alquiler",
  "description": "Pisos, casas, locales y garajes en alquiler en León, con el mismo trato personalizado y seguimiento que en una compraventa."
}, {
  "icon": "Store",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-4-musac.jpg",
  "title": "Locales, solares y edificios",
  "description": "Locales comerciales, oficinas, naves industriales, solares, garajes, trasteros y edificios completos en León y provincia."
}, {
  "icon": "FileCheck",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-5-san-isidoro.jpg",
  "title": "Certificado de eficiencia energética",
  "description": "Toda vivienda, local, oficina o edificio necesita el certificado energético para su compraventa o alquiler desde junio de 2013. Lo tramitamos firmado por técnico cualificado, a precio competitivo y con recomendaciones de mejora para cada inmueble."
}, {
  "icon": "Calculator",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-6-botines.jpg",
  "title": "Asesoramiento y valoración de inmuebles",
  "description": "Colaboramos con técnicos colegiados que realizan informes oficiales de tasación y valoración acordes con los valores actuales de mercado, de fincas rústicas y urbanas: actualización de patrimonios, incrementos o pérdidas de valor e intervenciones judiciales."
}, {
  "icon": "Banknote",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/servicios/card-7-muralla-san-isidoro.jpg",
  "title": "Préstamos e hipotecas",
  "description": "Porque no todos son iguales. Te ayudamos y orientamos para conseguir tu préstamo hipotecario en las mejores condiciones del mercado, buscando las opciones que mejor se adaptan a ti y resolviendo las dudas durante la tramitación."
}],
  "aboutSectionTitle": "Nuestra Misión",
  "nosotrosHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/hero/nosotros-hero-catedral.jpg",
  "nosotrosHeroVideo": "",
  "nosotrosPageTitle": "Sobre Nosotros",
  "servicesHeroImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/hero/servicios-hero-san-marcos.jpg",
  "servicesHeroVideo": "",
  "servicesPageTitle": "Nuestros Servicios",
  "maxServicesDisplayed": 6,
  "nosotrosPageSubtitle": "Más de tres décadas acompañando a los leoneses en sus decisiones inmobiliarias",
  "servicesPageSubtitle": "Todo lo que necesita para comprar, vender o alquilar su propiedad en León",
  "servicesSectionTitle": "Nuestros Servicios"
};
}
