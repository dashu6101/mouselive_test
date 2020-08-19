export interface Event {
  id: string;
  name: string;
  address: string;
  photo: string;
  date: Date;
}

export class EvenModel implements Event {
  id: string;
  name: string;
  address: string;
  photo: string;
  date: Date;
}

