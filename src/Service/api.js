import axios from 'axios';
// database location
const usersUrl = 'https://express-tb.herokuapp.com/user';
// 
export const getUsers = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getUsers api ', error);
    }
}
//add new item
export const addUser = async (user) => {
    return await axios.post(`${usersUrl}`, user);
}
// delete user
export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
// Edit user
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

// Collection Items
const itemUrl = 'https://express-tb.herokuapp.com/item';
export const getItems = async (id) => {
    id = id || '';
    try {
        return await axios.get(`${itemUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling getItems api ', error);
    }
}
//add new item
export const addItem = async (item) => {
    return await axios.post(`${itemUrl}`, item);
}
// delete item
export const deleteItem = async (id) => {
    return await axios.delete(`${itemUrl}/${id}`);
}
// Edit item
export const editItem = async (id, item) => {
    return await axios.put(`${itemUrl}/${id}`, item)
}