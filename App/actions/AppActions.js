/*
 * AppActions
 */

'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let AppConstants = require('../constants/AppConstants');

let AppActions = {

    setWelcomeMessage(message) {
        // remove localstorage, then dispatch
        AppDispatcher.dispatch({
            actionType: AppConstants.SET_MESSAGE,
            message: message
        });
    }

};

module.exports = AppActions;
