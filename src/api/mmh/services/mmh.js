'use strict';

/**
 * mmh service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mmh.mmh');
