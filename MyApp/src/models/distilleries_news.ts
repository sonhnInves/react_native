interface DistilleriesNews {
  success: boolean;
  data: Datum[];
  pagination: Pagination;
}
interface Pagination {
  totalRecords: number;
  page: number;
  limit: number;
}
interface Datum {
  id: number;
  distillery: string;
  title: string;
  description: string;
  url: string;
  date: string;
  image?: any;
  cask_distillery_id?: number;
  author_id: number;
  author?: Author;
}
interface Author {
  id: number;
  display_name: string;
}
