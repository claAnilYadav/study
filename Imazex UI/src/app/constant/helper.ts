import { environment } from '../env/environment.dev';

export const API_URL = environment.IMAGEX_URL;

//https://bkg-rm-api-production.up.railway.app/api/stats/location/ac4c11d6-04ec-4cd1-8fdd-63a5a7bee644
//https://bkg-rm-api-production.up.railway.app/auth
export default  {
  statictics: API_URL + 'stats/client/',
  statisticsbyLocation: API_URL + 'api/stats/location/',
  createclient: API_URL + 'admin/client/',
  createlocation: API_URL + 'admin/',
  auth: API_URL + 'auth/',
};
