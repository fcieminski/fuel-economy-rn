import { GestureResponderEvent } from 'react-native';

export type Fuelling = {
  distance: number;
  cost: number;
  fuelAmount: number;
  date: string;
  timestamp: number;
};

export type Car = {
  brand: string;
  model: string;
  engine: string;
  mileage: number;
};
export interface ModalDialog {
  visible: boolean;
  toggle: (event: GestureResponderEvent) => void;
  children?: React.ReactNode;
  title?: string;
  type?: string;
}

export type Note = {
  text: string;
  timestamp: number;
  isImportant: boolean;
};
