import { MainProtocolSymbols } from '@airgap/coinlib-core'
import { IACMessageDefinitionObjectV3, IACMessageType } from '@airgap/serializer'
import { XPubGenerator } from './xpub-generator'

describe('XPubGenerator', () => {
  let generator: XPubGenerator

  beforeEach(() => {
    generator = new XPubGenerator()
  })

  it('should create', () => {
    expect(generator).toBeTruthy()
  })

  it('should generate an xPub message', async () => {
    const data: IACMessageDefinitionObjectV3 = {
      id: 79370700,
      protocol: MainProtocolSymbols.BTC_SEGWIT,
      type: IACMessageType.AccountShareResponse,
      payload: {
        publicKey: 'zpub6s1D4v39zP2hNjAtAFRZ7J59W8tK9txcqgSM1STVQHq2AyUoM3eyXqCfXbweMCT5c69EQCz4rMgZQeMyKWfCvfeQVLCGQeCsGVdWkmQ3D4F',
        isExtendedPublicKey: true,
        derivationPath: "m/84'/0'/0'/0/1",
        masterFingerprint: '6f01ffc8',
        isActive: true,
        groupId: '6f01ffc8',
        groupLabel: 'Test'
      }
    }

    await generator.create([data], 300, 150)
    const part = await generator.nextPart()
    console.log('part', part)
    expect(part).toBe('zpub6s1D4v39zP2hNjAtAFRZ7J59W8tK9txcqgSM1STVQHq2AyUoM3eyXqCfXbweMCT5c69EQCz4rMgZQeMyKWfCvfeQVLCGQeCsGVdWkmQ3D4F')
  })
})
