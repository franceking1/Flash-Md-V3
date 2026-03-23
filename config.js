import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'private',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0lYdWdEWjJhdG5ESkZlR0NpR21ManY0cFhPTVBYeUdqZy8waVJ6YWhWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZm5VSTM1Y3B6eHlUUkpNNk9wRHoxM25SOUpjVFdScVFkbmk5dzlWdHl3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQ0RvMGhna2xFL2VUMzR5dzRlSnZwNEo5bE9ObEdMZ2hIRmJ0Z1dydGtRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUOGFaY2syMzZRNW90ODIxYlV0OXlYcGhKRGZmUGlvT01qZGhPQml6QVZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEdVJhVnNGa25taVRsd1ErYXpiRnh2VE5kUmVJam42MXFtM3l2UVlrVkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZHMURmczVQVkJwbVMxNGNnbFlCcjVFZk04cjA1Rmk5WEVvb0VaUlVoaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBWRDhGdzF6YVU4aTU2VlAwRGpzZG1sMEcreXZoK1J5MmtZZ3JFWWluZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURVWnJ6QmRyampVN3kvaHgzNEJFSHN4MjVBRjVGUnB4THloTk55YTB4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFwVHJRUjJjdUh1bTlqUnF1MUZlQmZOT0U4TzVoeVNUQTRJOENremVRVHFLTVp2bDcyRUMrZXVNN3pJMVBtTVN2dHFTeTM5MGh1RHFZTVFYSEo2T2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJ2eGlCV2hHM09PK3pVdEtUdDFQdTFjSCtIcmlpK3BZQ0JJbXpTZldaYkEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDSEFBNko2TiIsIm1lIjp7ImlkIjoiOTQ3NDA3MDcxNTc6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZeX4bSAyoDhtIsg8J2Xvc+D4bSFyarJqsmqIOGDkyIsImxpZCI6IjE2NDk1NzMxMjI3ODYzMTozQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUE84OWprUXVyeUZ6Z1lZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRU9OeW0vRjFIL3dGMHN6VEQ0S2JIOW5KcUh6WUlsWXpKaTJyUTd4TUNuOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTUMrcG9WOHdlMUlGTnJKNGtlcGUxRm1MdDRsSUhISlVQeHA5eEVuMkpidWRZYXlHU25RcUVSVE1xZ2Vaa3I4UVNVcCtubjJsQk4rRmQ2UEVJSG9rQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IjUzTU40VTNxOUVGelRpWUFYS01xT0kxUkRnLzhQWXc3ZVVVQnF0aWVzdXhnQlVrTkQxR1NjRmpYVk01REdSWkRpMStoWG5NUlQ4VG1WemhtanRwY2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDA3MDcxNTc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSRGpjcHZ4ZFIvOEJkTE0wdytDbXgvWnlhaDgyQ0pXTXlZdHEwTzhUQXAvIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQlFnQyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQyODAyNTMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMZXIifQ=='),
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || '16495731227863'),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '254742063632',
  OWNER_NAME: process.env.OWNER_NAME || 'FLASH-MD Owner',
  BOT_NAME: process.env.BOT_NAME || 'Flash-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0'
}

export default CONFIG
