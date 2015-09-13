/*
 * AppActions
 */

'use strict';

let AppDispatcher = require('../dispatcher/AppDispatcher');
let EventEmitter  = require('events').EventEmitter;
let AppConstants  = require('../constants/AppConstants');
let _ = require('lodash');

let CHANGE_EVENT = 'change';

let _state = {
    message: 'Welcome to React Native!'
};


let AppStore = _.assign({}, EventEmitter.prototype, {

    getMessage: function() {
        return _state.message;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

    switch(action.actionType) {

        case AppConstants.GET_MESSAGE:
            _getStateMessage(action.user);
            AppStore.emitChange();
        break;

        case AppConstants.SET_MESSAGE:
            _setStateMessage(action.user);
            AppStore.emitChange();
        break;

        default:
          // no op
    }

});

// Private Functions

let _getStateMessage = () => _state.message;

let _setStateMessage = (message) => {
    _state.message = message;
};

module.exports = AppStore;
