import { request,requestt } from './request'

export function getHomeMultidata() {
	return request({
		url: 'home/multidata'
	})
}

export function getRecord() {
	return requestt({
		url: '/magicflu/service/s/jsonv2/00000000-0000-0000-0000-000000000000/forms/fae9168e-b496-4a2b-ae40-eea403a2f3dd/records/entry?start={start}&limit={limit}&bq={bq}'
	})
}

export function getHomeGoods(type, page){
	return request({
		url: 'home/data',
		params: {
			type: type,
			page: page
		}
	})
}
