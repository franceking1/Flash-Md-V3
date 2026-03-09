require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '254723431293',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'STERO',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUU5R28wNWZQaU5qcWFMdVg4MW0vbUVNYUpwcU1NY29Va2c5amxYdnIxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME0yNmRHcHFnRjBuMmE5dU1Bbm9UUUN0Q0VSeVRBVlJlNDRRQzV6bU9tdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ01OMVcyUklDdnZ6R0ZLNFZ2L0tPU0RseDEreHoralhwcGxIL0llNlVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SzVCUXF6WnRMVGU5STB0UnFwM1o1SHRzVm1rVEVaVFc1MG9ZdnFONHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1NMTU3V3lWeXhrZXRHaU11RWhTRFREcHg5NEtJWFJwZnF4NzZqbm0yMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNmb0NERlJLWUMra0t5amRMR1JzVlNxL2JBbVpKUXgrRzFWMXg2WTlFRWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9ldXNRREFrSDVWdTNXZGI1d2hldWpMQWd0NUg2SndtY1Z4VnpZMmIwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtkZzk3ai9Xak9HTlZkc3JKYktaUDdORVdHd3NYQkowTUxGRGord0dVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY2UUhWaEY2cGpvTmRySndyQ0tacFUyekg0dzVTb1c5K2M4UHBzdmpsTmt3d3VDNi9ROCtHSHdQRmFEUzkrSWlmOEhoUGVwMW5FNVNHZ1FTYURSUERBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiJnZnIvNklRZ1prdmpCbFdXUVhMTEVGQmdBcWViNVdzcU5sZ1JBOXFOZ2hBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJHWTQxM1JDQSIsIm1lIjp7ImlkIjoiMjU0NzIzNDMxMjkzOjQzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODk4ODk5MjQyNDM1MzA6NDNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMTHl0N2NDRU9LcHVzMEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3VitlaWxMRjNZbUlxQ2QxWnNJOVplT2lmZmYvNHNZTkxHN21jbkJzdkFBPSIsImFjY291bnRTaWduYXR1cmUiOiJtbXB1WUZFT3R5VUhHN3d6SGZqWGJJREFiZmRWeTdVbXc2NEhXdm80UjcwMkJZK0pFd2JINWNkdnY5SDhWL0lPL3ZoWlVEazMrWnhScW4vcHR2ZFBEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYXBwNTVuY1FCRXRGTUNkMzlKM3ZzUWNDemNSbDAzT294cmErYytvWHhITnN5Q2Nway9MOGgrUlpwalZLSmN0VGpRS1ZreGt3SEVRZWxmc2ZNb2w5REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MjM0MzEyOTM6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0Zmbm9wU3hkMkppS2duZFdiQ1BXWGpvbjMzLytMR0RTeHU1bkp3Ykx3QSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzczMDQ5MDYyLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUllQiJ9',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
