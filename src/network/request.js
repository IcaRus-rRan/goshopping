// 封装axios
import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000/',
		timeout: 5000
	})

	return instance(config)
}

export function requestt(config) {
	const instance = axios.create({
		baseURL: 'http://localhost:999/',
		timeout: 5000
	})

	return instance(config)
}
