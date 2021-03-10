const express = require('express');
const check = require('check-types');

/**
 * all params are required
 * @param {Number} status
 * @param {String} message
 * @param {Object} data
 */
express.response.gen = function (status, message, data) {
    check.assert.number(status);
    check.assert.hasLength(String(status), 3);
    check.assert.string(message);
    check.assert.object(data);

    return this.status(status).json({ status, message, data });
};
