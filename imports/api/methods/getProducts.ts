import { Meteor } from 'meteor/meteor';

import { fetch } from '../../utils';

Meteor.methods({
  'getProducts'(token,page) {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      
      return fetch(`/catalog/products?page=${page}`, { headers }) 
    } catch (err) {
      throw new Meteor.Error(500, 'There was an error processing your request' + err)
    }
  }
})