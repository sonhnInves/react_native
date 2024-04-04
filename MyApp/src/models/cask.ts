interface CaskX {
  success: boolean;
  casks: Cask[];
  totals: Total[];
  broker: Broker;
  timeline: Timeline;
  distilleries: Distillery[];
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}
interface Distillery {
  id: number;
  name: string;
  image: string;
  description: string;
  year_founded: string;
  location: string;
  annual_output: string;
  count: number;
}
interface Timeline {
  '2023-10-11': _20231011[];
  '2023-10-10': _20231011[];
  '2022-01-27': _20231011[];
}
interface _20231011 {
  headline: string;
  body: string;
  nicedate: string;
}
interface Broker {
  signature_nice_firstname: string;
  signature_nice_lastname: string;
  signature_nice_email: string;
  signature_nice_phone_usa: string;
  signature_nice_profileimage: string;
  signature_nice_title: string;
  signature_nice_officeaddress3_usa: string;
  broker_id: number;
}
interface Total {
  purchase_price_format: string;
  current_price_format: string;
  current_price: number;
  totalbottles1: number;
  totalbottles2: number;
  totalrla: number;
  totalgal1: number;
  totalgal2?: any;
  totalvol1?: any;
  totalvol2: number;
  totalvol3: number;
  totalinvestments: number;
  firstinvestment: string;
}
export interface Cask {
  id: number;
  caskid: number;
  owner_clientid: number;
  purchase_item_id: number;
  saleid: number;
  sale_item_id: number;
  sale_item_linenumber?: any;
  pending: number;
  received: number;
  received_date: string;
  sold: number;
  available: number;
  volume_gal?: any;
  ola: number;
  rla: number;
  distillation_date: string;
  abv: number;
  cask_number: string;
  rabv: number;
  proof: string;
  batchnumber: string;
  bottlecount: string;
  regauge_date: string;
  void?: any;
  purchase_price: number;
  purchase_currency: string;
  current_price: number;
  current_price_currency: string;
  purchase_date: string;
  assigned_time: string;
  storage_cost: number;
  storage_paid_date: string;
  storage_facility_name: string;
  storage_facility_address?: any;
  title_name?: string;
  title_address?: string;
  title_email?: string;
  title_phone?: string;
  for_sale?: number;
  for_sale_offer?: number;
  for_sale_offer_notes?: any;
  transfer_in_process?: any;
  transfer_name?: any;
  transfer_address?: any;
  transfer_phone?: any;
  transfer_email?: any;
  digital_certificate?: any;
  digital_certificate_date?: any;
  barrel_profile?: any;
  printed_certificate?: any;
  printed_certificate_date?: any;
  is_bottle?: any;
  bottle_bottled_date?: any;
  bottle_age?: any;
  age: number;
  purchase_price_format: string;
  current_price_format: string;
  name: string;
}
export default CaskX;
