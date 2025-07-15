import fs from 'fs'
import path from 'path'

// 复制KaTeX CSS文件到public目录
const sourcePath = path.join(process.cwd(), 'node_modules/katex/dist/katex.min.css')
const targetPath = path.join(process.cwd(), 'public/katex.min.css')

try {
  fs.copyFileSync(sourcePath, targetPath)
  console.log('✅ KaTeX CSS copied to public directory')
} catch (error) {
  console.error('❌ Failed to copy KaTeX CSS:', error.message)
}
