// toggle-proxy.ts
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Compatible with ES module __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const configPath = path.resolve(__dirname, '../src/config.ts')
const proxyPath = path.resolve(__dirname, '../src/pages/api/proxy.ts')
const backupPath = path.resolve(__dirname, '../src/pages/api/proxy.ts.bak')
const astroConfigPath = path.resolve(__dirname, '../astro.config.ts')

// Read config.ts content
const configContent = fs.readFileSync(configPath, 'utf-8')

// Use regex to extract linkCard config (assuming the format does not change)
const match = configContent.match(/linkCard:\s*(true|false)/)
if (!match) {
  console.error('linkCard config not found')
  process.exit(1)
}
const linkCardEnabled: boolean = match[1] === 'true'

// Helper to comment/uncomment adapter lines in astro.config.ts
function toggleAstroAdapter(comment: boolean) {
  const astroConfig = fs.readFileSync(astroConfigPath, 'utf-8').split('\n')
  // 16: import netlify..., 19: adapter: netlify() (0-based)
  const importIdx = 16
  const adapterIdx = 19
  if (comment) {
    if (!astroConfig[importIdx].trim().startsWith('//')) {
      astroConfig[importIdx] = '// ' + astroConfig[importIdx]
    }
    if (!astroConfig[adapterIdx].trim().startsWith('//')) {
      astroConfig[adapterIdx] = '// ' + astroConfig[adapterIdx]
    }
  } else {
    if (astroConfig[importIdx].trim().startsWith('//')) {
      astroConfig[importIdx] = astroConfig[importIdx].replace(/^\/\/\s?/, '')
    }
    if (astroConfig[adapterIdx].trim().startsWith('//')) {
      astroConfig[adapterIdx] = astroConfig[adapterIdx].replace(/^\/\/\s?/, '')
    }
  }
  fs.writeFileSync(astroConfigPath, astroConfig.join('\n'), 'utf-8')
}

if (!linkCardEnabled) {
  // If linkCard is disabled, rename proxy.ts and comment adapter
  if (fs.existsSync(proxyPath)) {
    fs.renameSync(proxyPath, backupPath)
    console.log('🟡 proxy.ts disabled')
  }
  toggleAstroAdapter(true)
  console.log('🟡 adapter config commented')
} else {
  // If linkCard is enabled, restore proxy.ts and uncomment adapter
  if (fs.existsSync(backupPath)) {
    fs.renameSync(backupPath, proxyPath)
    console.log('🔵 proxy.ts enabled')
  }
  toggleAstroAdapter(false)
  console.log('🔵 adapter config uncommented')
}
