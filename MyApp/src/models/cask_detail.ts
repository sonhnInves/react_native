export interface CaskDetail {
  success: boolean;
  cask: Cask;
  news: News[];
  distilleryinfo: Distilleryinfo[];
  broker: Broker;
}

export interface Cask {
  serialid: number;
  spirittype: string;
  rla: number;
  ola: number;
  rla2: any;
  ola2: string;
  title_name: string;
  volume_gal: any;
  volume_gallons: string;
  storage_cost: number;
  storage_paid_date: string;
  storage_paid_date_abr: string;
  storage_facility_name: string;
  storage_facility_address: any;
  title_address: string;
  title_phone: string;
  title_email: string;
  for_sale_offer: number;
  for_sale_offer_notes: any;
  transfer_in_process: any;
  firstname: string;
  lastname: string;
  email: string;
  salescode: string;
  salesid: number;
  clientid: number;
  clientcode: string;
  address1: any;
  address2: any;
  city: any;
  state: any;
  postcode: any;
  country: any;
  phone: any;
  name: string;
  distillery: string;
  id: number;
  caskid: number;
  owner_clientid: number;
  purchase_item_id: number;
  saleid: number;
  sale_item_id: number;
  sale_item_linenumber: any;
  pending: number;
  received: number;
  received_date: string;
  sold: number;
  available: number;
  distillation_date: string;
  abv: number;
  cask_number: string;
  rabv: number;
  proof: string;
  batchnumber: string;
  bottlecount: string;
  regauge_date: string;
  void: any;
  purchase_price: number;
  purchase_currency: string;
  current_price: number;
  current_price_currency: string;
  purchase_date: string;
  assigned_time: string;
  for_sale: number;
  transfer_name: any;
  transfer_address: any;
  transfer_phone: any;
  transfer_email: any;
  digital_certificate: any;
  digital_certificate_date: any;
  barrel_profile: any;
  printed_certificate: any;
  printed_certificate_date: any;
  is_bottle: any;
  bottle_bottled_date: any;
  bottle_age: any;
  casktype: string;
  region: string;
  date_distilled_year: string;
  date_distilled_abr: string;
  age: number;
  purchase_date_abr: string;
  purchase_price_format: string;
  current_price_format: string;
}

export interface News {
  id: number;
  distillery: string;
  title: string;
  description: string;
  url: string;
  date: string;
  image: any;
  cask_distillery_id: number;
  author_id: number;
  date_format: string;
}

export interface Distilleryinfo {
  id: number;
  name: string;
  image: string;
  description: string;
  year_founded: string;
  location: string;
  annual_output: string;
  invitation: Invitation;
}

export interface Invitation {
  id: number;
  name: string;
  expiration_date: string;
}

export interface Broker {
  signature_nice_firstname: string;
  signature_nice_lastname: string;
  signature_nice_email: string;
  signature_nice_phone_usa: string;
  signature_nice_profileimage: string;
  signature_nice_title: string;
  signature_nice_officeaddress3_usa: string;
}
