const plugin = require('tailwindcss/plugin')
const PluginGradients = require('tailwindcss-plugins/gradients')

const PluginUtility = plugin(function({ addUtilities }) {
  const newUtilities = {
    '.rotate-y-0': {
      transform: 'rotateY(0deg)'
    },
    '.rotate-y-180': {
      transform: 'rotateY(180deg)'
    },
    '.transform-style-3d': {
      transformStyle: 'preserve-3d'
    },
    '.backface-hidden': {
      backfaceVisibility: 'hidden'
    },
    '.perspective': {
      perspective: '1000px'
    }
  }

  addUtilities(newUtilities, ['group-hover'])
})

module.exports = {
  PluginUtility,
  PluginGradients
}
