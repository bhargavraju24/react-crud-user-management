import axios from "axios";

// Base URL for all user-related API calls
const API_URL = "https://6991884b6279728b0154bd01.mockapi.io/users";


// Get all users (READ)
const getUsers = () => {
  return axios.get(API_URL);
};

// Add new user (CREATE)
const addUser = (data) => {
  return axios.post(API_URL, data);
};

// Update existing user (UPDATE)
const updateUser = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

// Delete user (DELETE)
const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Export all functions at bottom
export { getUsers, addUser, updateUser, deleteUser };
