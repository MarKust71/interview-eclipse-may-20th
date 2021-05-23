import { ProgressBarProps } from 'ui/progressBar/ProgressBar.types';
import { DeliveryProps } from 'app/delivery/Delivery.types';

export type ProductCardProps = {
  isActive?: boolean;
  recommendation?: string;
  header: string;
  stars: number;
  reviews: string;
  image: string;
  logo: string;
  labels: string[];
  price: number;
  rrp: number;
  progress: ProgressBarProps;
  delivery: DeliveryProps;
};
