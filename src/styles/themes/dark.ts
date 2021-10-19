import { DefaultTheme } from 'styled-components'

const darkTheme: DefaultTheme = {
  colors: {
    primary: '#0066ff',
    secondary: '#c00c00',
    background: '#121212',
    dp1: '#1E1E1E',
    dp2: '#232323',
    dp3: '#252525',
    dp4: '#272727',
    disabled: 'rgba(255, 255, 255, 0.12)',
    utterance: '#999999'
  },
  elevations: {
    dp1: '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    dp2: '0px 3px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    dp3: '0px 3px 3px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
    dp4: '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)'
  }
}

export default darkTheme
