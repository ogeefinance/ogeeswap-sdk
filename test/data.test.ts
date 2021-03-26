import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x3D760a45D0887DFD89A2F5385a236B29Cb46ED2a') // DAI-Heco
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c') // MDX
    expect(token.decimals).toEqual(18)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.HECOTESTNET, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18) // DAI
    const pair = await Fetcher.fetchPairData(WETH[ChainId.HECOTESTNET], token)
    expect(pair.liquidityToken.address).toEqual('0xA3402dc2616D57F2cbCE2F6e0Aeb7e3F0953d8dd')
  })
})
