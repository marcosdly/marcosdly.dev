const uncss = require('postcss-uncss')
const combineDuplicates = require('postcss-combine-duplicated-selectors')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    uncss({ html: ['index.html'] }),
    combineDuplicates({
      removeDuplicatedProperties: true,
      removeDuplicatedValues: true,
    }),
  ],
}
