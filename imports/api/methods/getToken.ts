import MP from '@knawat/mp';
import { Meteor } from 'meteor/meteor';

import { CONSUMER_KEY, CONSUMER_SECRET } from '../../constants';
import { fetch } from '../../utils';


Meteor.methods({
  'getToken'() {
    try {
      const data = {
        data: {
          consumerKey: CONSUMER_KEY,
          consumerSecret: CONSUMER_SECRET
        }
      };
      
      return fetch("/token", data, "POST"); 
    } catch (err) {
      throw new Meteor.Error(500, 'There was an error processing your request')
    }
  }
})