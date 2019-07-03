import request from './request'

export function fetchTodos() {
    return request({
        url: '/todos',
        method: 'get',
    })
}

export function add(data) {
    return request({
        url: '/todos',
        method: 'post',
        data
    })
}

export function update(id, data) {
    return request({
        url: `/agents/${id}`,
        method: 'PUT',
        data
    })
}