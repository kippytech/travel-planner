export interface DestinationItenaryType {
  place: string;
  totalNights: number;
}

interface SightseeingDescription {
  text: string;
  index: number;
}

interface Activity {
  activityType: string;
  activityDescription: string | SightseeingDescription[];
}

interface DayActivity {
  activities: Activity[];
}

export interface PackageItenaryType {
  city: string;
  daysActivity: DayActivity[];
}

export interface DestinationDetailsType {
  name: string;
  image: string;
  description: string;
}

export interface DetailedItenaryType {
  title: string;
  value: string[];
}

export interface TripType {
  id: string;
  name: string;
  nights: number;
  days: number;
  destinationItenary: DestinationItenaryType[];
  images: string[];
  inclusions: string[];
  themes: string[];
  price: number;
  destinationDetails: DestinationDetailsType[];
  detailedItenary: DetailedItenaryType[];
  description: string;
  packageItenary: PackageItenaryType[];
  scrapedOn: string;
}
