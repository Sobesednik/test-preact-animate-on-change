const assert = require('assert')
const context = require('../context/')
const testPreactAnimateOnChange = require('../../src/')

const testPreactAnimateOnChangeTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPreactAnimateOnChange, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPreactAnimateOnChange()
        })
    },
}

module.exports = testPreactAnimateOnChangeTestSuite
