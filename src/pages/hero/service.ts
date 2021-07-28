import { request } from 'alita';

export async function query(): Promise<any> {
    // return request('https://pvp.qq.com/web201605/js/herolist.json', { method: 'get' });
    return request('/api/herolist.json', { method: 'get' });;
}