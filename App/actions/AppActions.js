/*
 * AppActions
 */

'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let AppActions = {

  setWelcomeMessage(message) {

    // do some async stuff here and dispatch to stores

    AppDispatcher.dispatch({
      actionType: AppConstants.SET_MESSAGE,
      message: message
    });
  }

};

export default AppActions;
