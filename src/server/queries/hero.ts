import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["León"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Tu inmobiliaria en León desde 1991",
  "subtitle": "Compra, venta y alquiler de viviendas en León y su alfoz",
  "contactButton": "Contáctanos",
  "backgroundType": "video",
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/hero/avenida-cubos-sunny-poster.jpg",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/hero/avenida-cubos-sunny.mp4",
  "type": "video"
}],
  "backgroundVideo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/158/website/hero/avenida-cubos-sunny.mp4",
  "findPropertyButton": "Explorar Propiedades"
};
}
