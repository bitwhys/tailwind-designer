import { createGlobalTheme } from '@vanilla-extract/css'
import { plum, plumDark } from '@radix-ui/colors'

export const globalVars = createGlobalTheme(':root', {
  fonts: {
    text: '"DM Sans", sans-serif',
    heading: '"Space GroteskVariable", sans-serif',
    mono: 'DM Mono, Menlo, monospace',
  },
  colors: {
    ...plum,
    ...plumDark,
  },
})
