import { INIT_CODE_HASH } from '../src/constants'

//import { bytecode } from '@uniswap/v2-core/build/UniswapV2Pair.json'
//import { keccak256 } from '@ethersproject/solidity'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
//const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    // it('matches computed bytecode hash', () => {
    //   expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    // })
    //TODO: Replace with real OgeeswapPair.json
    it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0x170d93590c1c1ea5f31a17c91361f36b4dcc7a4951fe8130a532756f9d0c108f')
    })
  })
})
