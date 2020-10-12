import axios from 'axios';

export default {
  // Gets all posts
  getDates: function () {
    return axios.get('/api/dates');
  },
  // Gets the post with the given id
  getADate: function (id) {
    return axios.get('/api/dates/' + id);
  },
  // Deletes the post with the given id
  deleteDate: function (id) {
    return axios.delete('/api/dates/delete/' + id);
  },
  editDate: function (id, editData) {
    return axios.put('/api/dates/' + id, editData);
  },
  // Saves a post to the database
  saveDate: function (postData) {
    return axios.post('/api/dates', postData);
  },
};
