interface Product {
  id: string;
  title: string;
  desc: string;
  img: string;
  prices: number[];
  extraOptions: ExtraOption[];
  createdAt: Date;
  updatedAt: Date;
}

interface ExtraOption {
  text: string;
  price: number;
}

interface Order {
  id: string;
  customer: string;
  address: string;
  total: number;
  status: number;
  method: number;
  createdAt: Date;
}
