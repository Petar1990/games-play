import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getAllGames() {
    return api.get('/data/games?sortBy=_createdOn%20desc');
}

export async function createMaterial(item) {
    return api.post('/data/posts', item);
}
export async function getCurrentMaterial(id) {
    return api.get(`/data/posts/${id}`)
}
export async function delItem(id) {
    return api.del(`/data/posts/${id}`)
}
export async function editCurrentMaterial(id, data) {
    return api.put(`/data/posts/${id}`, data)
}

export async function getMyMaterials(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}

// like request
export async function makeDonate(postId) {
    return api.post('/data/donations', {postId});
}

export async function getCountOfDonate(postId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export async function getMyDonation(postId,userId) {
    return api.get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

// search request