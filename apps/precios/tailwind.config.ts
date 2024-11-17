import tailwindConfig from '@repo/ui/tailwind.config'
import { Config } from 'tailwindcss'

const config: Config =  {
  ...tailwindConfig,
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}'
  ]
}

export default config
