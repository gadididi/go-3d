import React, {Component} from "react";


function Store(initialState = {page: "Home"}) {
    this.state = initialState;
}
Store.prototype.mergeState = function(partialState) {
    Object.assign(this.state, partialState);
};
Store.prototype.getState = function (){
    return this.state;
}

Store.prototype.setState = function (screen){
    this.state = {page: screen}
}

const myStore = new Store();

export default myStore;