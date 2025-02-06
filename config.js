const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos/Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobo/Empire_Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/6ntq2i.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by 𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163707678";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'   // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/6ntq2i.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_49_02_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICA1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgOSxcbiAgICAgICAgNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODUsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyLFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZodXlScVNhaVJJYWgzRmNaZ2NPYU8xSlRueUt3KzRBN05XQUwwZWtaMzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlluLW9FRHpoUnR1am5ZLVFvTXBzTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmRkYmZkZmYtNjJjMS00ZjI3LWJjNDMtNTI2ZDRjYjdjMWU4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNixcbiAgICAgIDMyLFxuICAgICAgNDQsXG4gICAgICAyLFxuICAgICAgOTgsXG4gICAgICAxNjMsXG4gICAgICAxNzgsXG4gICAgICAxNTYsXG4gICAgICAyMDQsXG4gICAgICAxNjgsXG4gICAgICAxMDksXG4gICAgICA3NSxcbiAgICAgIDE5MSxcbiAgICAgIDEyNSxcbiAgICAgIDE1MixcbiAgICAgIDE0NixcbiAgICAgIDEzNCxcbiAgICAgIDI0NSxcbiAgICAgIDIyLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMTI0LFxuICAgICAgMTMzLFxuICAgICAgMzEsXG4gICAgICAyMDQsXG4gICAgICAyNDYsXG4gICAgICA4NSxcbiAgICAgIDExNixcbiAgICAgIDczLFxuICAgICAgMTUxLFxuICAgICAgMjAwLFxuICAgICAgMTcxLFxuICAgICAgMTI0LFxuICAgICAgMTM2LFxuICAgICAgMTU1LFxuICAgICAgMTYyLFxuICAgICAgNTIsXG4gICAgICA4MCxcbiAgICAgIDMxLFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFIVDZQWFFQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTYzNzA3Njc4OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2Nzc3NTA4NzI1NTYzOToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNalR1OTRCRVBHems3MEdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdwbTlJQit3RlRoMndMVEpyU1RFRlh2dmxjNTkyd3JHYXJWbzZWTFJBVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUNwMGpjMXNXZEVpTlhxdVRuRk1FazVCNzFGMWVEa08vUUd6aTdqVGxEUGl1SHNxV1pwMkJLd1FiODVrc3gvdjQzcnlIWFNHZzBVZVM1MXduVDRUQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieFJUQTJaZzZGY0gyOUp0TXpLbUZ0TUVFMTRzVXVpN2U4Y3JXZVZhU0U5ZVRXUHl3bnJrVVBBdGN1UEFIYjRoVjRBaFhQOUNwc0gwNU9vbW5YdUErQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2MzcwNzY3ODoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczODg1Njk0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJlRFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmVELmpzb24iOiAie1wia2V5RGF0YVwiOlwiT2dwUFBoZVkzTjhDZkkxRWVkcUhIOCtVZHZLZU1vZDVaZ0hqY0Jka3FXMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjY1NDUwOTQsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞 』```", //*『sᴜʙsᴄʀɪʙᴇ • Empire_Md』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "Empire_Md",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "𝐎𝐧𝐥𝐲_𝐨𝐧𝐞_🥇𝐄𝐦𝐩𝐢𝐫𝐞",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-c5_mjyTPg76Sl7gx6yADErKcLzUlfhs4KcNxFBFso4T3BlbkFJQpbBq0QN6CAr8ia7bqJmveKPTmentTE6guHxlLUnUA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_59adeb8a55b9c60aba5ed8b8001135049f773814fb35e722";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
