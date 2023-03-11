import { globalStyle } from '@vanilla-extract/css'
import { globalVars } from './global-theme.css'

/*
  1. Use a more-intuitive box-sizing model.
*/
globalStyle('*, *::before, *::after', {
  boxSizing: `border-box`,
})

globalStyle('*', {
  margin: 0,
})

globalStyle('html, body', {
  height: '100%',
  fontFamily: globalVars.fonts.text,
})

globalStyle('blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre', {
  margin: 0,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: 'inherit',
  fontWeight: 'inherit',
  fontFamily: globalVars.fonts.heading,
})

globalStyle('ol, ul', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

globalStyle('img, svg, video, canvas, audio, iframe, embed, object', {
  display: 'block',
  verticalAlign: 'middle',
})

globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
})

globalStyle('*, ::before, ::after', {
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: `var(--default-border-color,currentColor)`,
})

globalStyle('button:focus', {
  outline: `5px auto -webkit-focus-ring-color`,
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('#root', {
  isolation: 'isolate',
})
globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

// TODO: delete
globalStyle('body', {
  backgroundColor: globalVars.colors.plum2,
})
