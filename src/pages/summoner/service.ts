import { request } from 'alita';

export async function query() {
  return request('/api/summoner.json', { method: 'get' });
}
