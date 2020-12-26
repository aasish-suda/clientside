import { Theatre } from './theatre';

export class Show {
    showId: number;
    theatre: Theatre;
    showDate: Date;
    // showTime: time;
    seatAvailable: number;
    errorMessage: string;
}
