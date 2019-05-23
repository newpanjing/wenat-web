/**
 * Created by sun on 2017/3/27.
 */


var config = require('../config/config').config;
var uuid = require('../utils/uuid-utils');
var mappers = {};
var socket;
exports.start = function () {
    var io = require('socket.io-client');
    socket = io.connect('http://'+config.routing.host+':'+config.routing.port);
    socket.on("connect", function () {
        console.log("连接上了");
    });
    socket.on("clients", function (data) {
        var id = data.id;
        var cb = mappers[id];
        if (cb) {
            cb(data);
            delete mappers[id];
        }
    })

}
exports.getClients = function (cb) {

    if (socket) {
        var id = uuid.getUUID();
        mappers[id] = cb;
        socket.emit("getClients", id);
    }
}

