import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      dp1: string
      dp2: string
      dp3: string
      dp4: string
      disabled: string
      utterance: string
    }
    elevations: {
      dp1: string
      dp2: string
      dp3: string
      dp4: string
    }
  }
}
