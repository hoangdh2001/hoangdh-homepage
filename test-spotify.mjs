// Test Spotify credentials without Next.js
// Run: node test-spotify.mjs

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Read .env.local manually
const envPath = join(__dirname, '.env.local')
const envContent = readFileSync(envPath, 'utf-8')
const env = {}
for (const line of envContent.split('\n')) {
  const trimmed = line.trim()
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...rest] = trimmed.split('=')
    if (key && rest.length) env[key.trim()] = rest.join('=').trim()
  }
}

const client_id = env.SPOTIFY_CLIENT_ID
const client_secret = env.SPOTIFY_CLIENT_SECRET
const refresh_token = env.SPOTIFY_REFRESH_TOKEN

console.log('=== Spotify Credentials ===')
console.log('CLIENT_ID:', client_id ? client_id.slice(0, 8) + '...' : 'MISSING')
console.log('CLIENT_SECRET:', client_secret ? client_secret.slice(0, 8) + '...' : 'MISSING')
console.log('REFRESH_TOKEN:', refresh_token ? refresh_token.slice(0, 20) + '...' : 'MISSING')

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

console.log('\n=== Step 1: Get Access Token ===')
const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    Authorization: `Basic ${basic}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token,
  }),
})
const tokenText = await tokenRes.text()
console.log('Status:', tokenRes.status)
console.log('Body:', tokenText)

let access_token
try {
  const tokenData = JSON.parse(tokenText)
  access_token = tokenData.access_token
  if (!access_token) {
    console.log('\n❌ No access_token in response. Error:', tokenData.error, tokenData.error_description)
    process.exit(1)
  }
  console.log('\n✅ Got access_token:', access_token.slice(0, 20) + '...')
} catch {
  console.log('\n❌ Response is not JSON')
  process.exit(1)
}

console.log('\n=== Step 2: Recently Played ===')
const recentRes = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
  headers: { Authorization: `Bearer ${access_token}` },
})
const recentText = await recentRes.text()
console.log('Status:', recentRes.status)
console.log('Body:', recentText.slice(0, 500))
