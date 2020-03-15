export interface GlobalDetails {
  confirmed: {
    value: number;
    details: string;
  };
  recovered: {
    value: number;
    details: string;
  };
  deaths: {
    value: number;
    details: string;
  };
  dailySummary: string;
  dailyTimeSeries: {
    pattern: string;
    example: string;
  };
  image: string;
  source: string;
  countries: string;
  countryDetail: {
    pattern: string;
    example: string;
  },
  lastUpdate:string
}