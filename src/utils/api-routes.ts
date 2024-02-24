const baseRoute = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;

export const USER_API_ROUTES = {
  SIGNUP: `${baseRoute}/auth/signup`,
  LOGIN: `${baseRoute}/auth/login`,
  ME: `${baseRoute}/auth/me`,
  TRIPDATA: `${baseRoute}/trips`,
  FLIGHT_SCRAPE: `${baseRoute}/flights/scrape`,
  FLIGHT_SCRAPE_STATUS: `${baseRoute}/flights/scrape-status`,
  HOTELS_SCRAPE: `${baseRoute}/hotels/scrape`,
  HOTELS_SCRAPE_STATUS: `${baseRoute}/hotels/scrape-status`,
  GET_ALL_TRIPS: `${baseRoute}/all-trips`,
  GET_ALL_HOTELS: `${baseRoute}/all-hotels`,
  GET_UNIQUE_TRIP_CITIES: `${baseRoute}/home/unique-cities`,
  GET_CITY_HOTELS: `${baseRoute}/home/city-hotels`,
  GET_CITY_TRIPS: `${baseRoute}/city-trips`,
  CREATE_BOOKING: `${baseRoute}/booking`,
  GET_USER_BOOKINGS: `${baseRoute}/booking/get-bookings`,
  GET_ALL_BOOKINGS: `${baseRoute}/booking`,
};

export const ADMIN_API_ROUTES = {
  LOGIN: `${baseRoute}/admin/login`,
  DASHBOARD_SCRAPING_CHART_DATA: `${baseRoute}/admin/dashboard/scraping-chart-data`,
  DASHBOARD_METRICS: `${baseRoute}/admin/dashboard/metrics`,
  CREATE_JOB: `${baseRoute}/admin/create-job`,
  JOB_DETAILS: `${baseRoute}/admin/job-details`,
};
