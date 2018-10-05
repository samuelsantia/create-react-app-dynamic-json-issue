import loader from './loader'

describe('loader', () => {
  it('should import json in default key', async () => {
    const actual = await loader()

    expect(actual).toHaveProperty('default')
  })
})
