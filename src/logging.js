var request = require('request');
// const blocks = require('./engine/blocks');
// const uuidv1 = require('uuid/v1');

/**
 * Posts to the MainEvent table in server.
 * @param {JSON} jsonObject JSON document with details to be inserted
 */
function postMain(jsonObject) {
    request({
        url: "http://localhost:3000/logs/mainevent",
        method: "POST",
        json: true,
        body: jsonObject,
        //mode: 'no-cors',
    }, function (error, response, body) {
        console.log(response && response.statusCode);
        console.log(error);
    });
}

/**
 * Posts to the datasetMetadata table in server.
 */
function postMetadata() {
    var jsonObject = {
        "version": 0,
        "areEventsOrdered": true,
        "isEventOrderingConstant": false,
        "codeStateRepresentation": "Table"
    };
    request({
        url: "http://localhost:3000/logs/metadata",
        method: "POST",
        json: true,
        body: jsonObject,
        //mode: 'no-cors',
    }, function (error, response, body) {
        console.log(response && response.statusCode);
        console.log(error);
    });
}

/**
 * Posts to the codeState table in server.
 * @param {*} jsonObject JSON document with details to be inserted
 */
function postCodeState(jsonObject) {
    request({
        url: "http://localhost:3000/logs/codestate",
        method: "POST",
        json: true,
        body: jsonObject,
        //mode: 'no-cors',
    }, function (error, response, body) {
        console.log(response && response.statusCode);
        console.log(error);
    });
}

module.exports = {postMain, postMetadata, postCodeState};