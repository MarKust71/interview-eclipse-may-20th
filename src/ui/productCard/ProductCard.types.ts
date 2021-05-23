import { ProgressBarProps } from 'ui/progressBar/ProgressBar.types';
import { DeliveryBoxProps } from '../deliveryBox/DeliveryBox.types';

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
  delivery: DeliveryBoxProps;
};
