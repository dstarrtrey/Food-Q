export function formatPhoneNumber(pn) {
  if (!parseInt(pn)) return 'Invalid Phone Number';
  if (pn.length !== 10) return pn;
  return `(${pn.substring(0,3)}) ${pn.substring(3,6)}-${pn.substring(6,10)}`
}
