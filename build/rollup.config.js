import jsx from 'acorn-jsx'
import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import clear from 'rollup-plugin-clear'
import pkg from '../package.json'

export default {
  input: 'packages/index.ts',
  output: getFormats(),
  acornInjectPlugins: [jsx()],
  plugins: [
    clear({
      targets: ['lib']
    }),
    typescript({ jsx: 'preserve' }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    })
  ],
  external: ['react', 'react-dom']
}

function getFormats() {
  const formats = [{
    file: pkg.main,
    format: 'umd'
  }]

  if (pkg.module) {
    formats.push({
      file: pkg.module,
      format: 'es'
    })
  }

  return formats
}
