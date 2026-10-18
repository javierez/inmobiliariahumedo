
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Inmobiliaria Húmedo, S.L.",
  "description": "Inmobiliaria en León desde 1991. Ética, honradez y trato cercano en cada operación.",
  "socialLinks": {

},
  "officeLocations": [{
  "name": "Oficina de La Rúa",
  "address": ["Calle La Rúa, 15 - bajo", "León, León"],
  "phone": "987 21 04 25",
  "email": "inmo@inmobiliariahumedo.com"
}],
  "copyright": "© 2026 Inmobiliaria Húmedo. Todos los derechos reservados."
};
}
