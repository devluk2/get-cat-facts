const assert = require('assert')
const catFacts = require('./index')

describe('random()', function () {
  it('returns 1 cat fact', async function () {
    const data = await catFacts.random()
    assert.equal(data.length, 1)
  })

  it('returns 3 cat facts', async function () {
    const data = await catFacts.random(3)
    assert.equal(data.length, 3)
  })
})
