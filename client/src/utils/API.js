import axios from 'axios';

export default {
  // Gets all posts
  getDates: function () {
    return axios.get('/api/dates');
  },
  // Gets the post with the given id
  getDate: function (id) {
    return axios.get('/api/dates/' + id);
  },
  // Deletes the post with the given id
  deleteDate: function (id) {
    return axios.delete('/api/dates/' + id);
  },
  editDate: function (id, editData) {
    return axios.put('/api/dates/' + id, editData);
  },
  // Saves a post to the database
  saveDate: function (postData) {
    return axios.post('/api/dates', postData);
  },
};
