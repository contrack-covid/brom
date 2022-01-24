const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const hx = require('hxz-api')
const xa = require('xfarr-api')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
virgam = fs.readFileSync(`./media/virgam.jpeg`)
const gp = JSON.parse(fs.readFileSync('./database/json/grupo.json'))
const { menu } = require('./src/menu')
const prem = JSON.parse(fs.readFileSync('./database/json/premium.json'));
const {
  dellprem
 } = require('./lib/leveling.js')


ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
music = false
baterai = {
battery: "" || "No detectado",
isCharge: "" || false
}
offline = false
publik = true
waktuafk = 'Nada'
alasanafk = 'Nada'
NombreBot = settings.NombreBot
NumeroOwner = settings.NumeroOwner
NombreOwner = settings.NombreOwner
multi = true
emergencia = false
const hr = moment().tz('Asia/Jakarta').format("HH:mm:ss")

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Horas ${pad(minutes)}Minutos ${pad(seconds)}Segundos`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDis + hDis + mDis + sDis;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

module.exports = cnf = async (cnf, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = cnf.user
		m = simple.smsg(cnf, mek)
		const antibot = m.isBaileys
		const isBaileys = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		cnf.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    		var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'


        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./alcatraz.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Por favor espere',
			success: 'Listo',
			error: {
				stick: 'No se puede acceder a los videos!',
				Iv: 'Link invalido!',
                api: 'Error :v'
			},
			only: {
				group: 'Solo se puede utilizar en grupos!',
				ownerG: 'Solo un admin oh el creador de el grupo puede utilizar este comando!',
				ownerB: 'Solo mi Creador puede utilizar este comando',
				admin: 'Solo un administrador puede utilizar este comando',
				Badmin: 'Primero debo ser administrador -_-*'
			}
		}
		const botNumber = cnf.user.jid
		const ownerNumberr = [`${NumeroOwner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? cnf.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? cnf.user.jid : cnf.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? cnf.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await cnf.chats.all()
		const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumberr.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             cnf.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = cnf.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '60128225553-1407930923@g.us', "inviteCode": 'https://chat.whatsapp.com/CMn8zNddsIyAALctqol6V0', "groupName": `${NombreBot}`, "footerText": "*𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            cnf.relayWAMessage(grup)
        }
		idttt = []
	    ers1 = []
	    ers2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false
		try {
		pporang = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./alcatraz.jpg')
		const sekarang = new Date().getTime();
 
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Media noche"; break;
                case 1: jamss = "Media noche"; break;
                case 2: jamss = "Media noche"; break;
                case 3: jamss = "Media noche"; break;
                case 4: jamss = "Media noche"; break;
                case 5: jamss = "Amanecer"; break;
                case 6: jamss = "Mañana"; break;
                case 7: jamss = "Mañana"; break;
                case 8: jamss = "Mañana"; break;
                case 9: jamss = "Mañana"; break;
                case 10: jamss = "Mañana"; break;
                case 11: jamss = "Tarde"; break;
                case 12: jamss = "medio día"; break;
                case 13: jamss = "Tarde"; break;
                case 14: jamss = "Tarde"; break;
                case 15: jamss = "Tarde"; break;
                case 16: jamss = "Tarde"; break;
                case 17: jamss = "Noche"; break;
                case 18: jamss = "Noche"; break;
                case 19: jamss = "Noche"; break;
                case 20: jamss = "Noche"; break;
                case 21: jamss = "Noche"; break;
                case 22: jamss = "Media Noche"; break;
                case 23: jamss = "Media Noche"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric'
		       })
		       
  const isPremium= prem.includes(sender)	 
if (groupAdmins) {
prema = 'Admin🤓'
}
if(isPremium) {
prema = 'VIP🤑'
} else {
prema = 'Random💤'
}
if (isOwner) {
prema = `Mi Owner🕴🏽`
}

		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `By Team-Papitas-Fritas`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;By Team-Papitas-Fritas,;;;\nFN:By Team-Papitas-Fritas,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': ofrply, thumbnail: ofrply,sendEphemeral: true}}}

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply 
					},
					"title": `${tampilUcapan}`, 
					"description": `${tampilUcapan}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan}`, 
                            orderTitle: `${tampilUcapan}`,
                            thumbnail: dfrply, 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCALIZACION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENTO
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan}`,
                 "h": `${tampilUcapan}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// INVITACION
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "60128225553-1407930923@g.us",
			"inviteCode": `${tampilUcapan}`,
			"groupName": `${tampilUcapan}`, 
            "caption": `${tampilUcapan}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDIENTE"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan}`,
                 "h": `${tampilUcapan}`,
                 'duration': '99999', 
                 'gifback': 'true', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXTO Y IMAGEN
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan}`,
                 "title": `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await cnf.relayWAMessage(
        cnf.prepareMessageFromContent(
          target,
          cnf.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
//Boton en texto
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
cnf.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Boton en imagen
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton en Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await cnf.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton en localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hola ${pushname}, Lo siento, parece que en este momento esta Offline\n\n*Razón :* ${alasanafk}\n*Fecha :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPóngase en contacto de nuevo después cuando este Online`, "*𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓*", [{buttonId: 'simi', buttonText: {disText: 'Esta bien'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === cnf.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hola ${pushname}, Lo siento, parece que en este momento esta Offline\n\n*Razon :* ${alasanafk}\n*Fecha :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPóngase en contacto de nuevo cuando este Online`, "*𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓*", [{buttonId: 'simi', buttonText: {disText: 'Esta bien'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Descargando sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					cnf.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Sticker enviado con éxito'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        cnf.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Creador ${NombreBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        cnf.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG: Contacto\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await cnf.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        cnf.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			cnf.sendMessage(from, teks, text, { quoted: mek })
		}
		const simir = (teks) => {
			cnf.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			cnf.sendMessage(hehe, teks, text, { quoted: ftok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : cnf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
cnf.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
cnf.sendMessage(from, hasil, type, options).catch(e => {
cnf.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await cnf.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				cnf.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            }
			// AUTO

			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Se ha muteado al bot en este grupo.')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}

			
			
			
			
			if (bad.includes(messagesD)) {
				reply('_No seas Toxico!_')
				}
				if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detectado\n\n' + require('util').format(m.key))
await cnf.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}                     
                      
           if (budy.startsWith('~>')){
if (!isOwner)return reply(`Este comando no puede ser ejecutado por ti`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval v2`))
ras = budy.slice(2)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('∆')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('^')){
if (!mek.key.fromMe && !isOwner) return
try {
return pemuda.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}                      
                      
if (!settings.autoread) {
cnf.chatRead(from)
}
if (!settings.autocomposing) {
cnf.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
cnf.updatePresence(from, Presence.recording)
}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Ganador👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Ganador👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'))}
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Etiqueta un sticker!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
/*				 			 if (m.message && m.isBaileys && mek.quoted.isBaileys) {				 		        	
				reply('Enlace detectado!')
				
			}*/

anu = await fetchJson(`https://api-alc.herokuapp.com/api/keys`)
alphakey = anu.alpha
confukey = anu.alc

        switch (command) {
        case 'menu':
        case 'help':
        case 'comandos':
        case 'comands':
        case 'comando':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
sendButLocation(from, `*𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓*`, menu(hr, prema, pushname), {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break



case 'dellprem': 
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} fue removido de la lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

                
        				case 'ytmp3':	
        				  reply(mess.wait)
	  play = body.slice(6)    
try {	    
try {
  anu = await fetchJson(`https://api-alc.herokuapp.com/api/download/play?query=${play}&apikey=${confukey}`)
    if (anu.error) return reply(anu.error)
  lagu = await getBuffer(anu.link)
  cnf.sendMessage(from, lagu, audio, {
  mimetype: 'audio/mp4', filename: `${anu.titulo}.mp3`, quoted: mek})
} catch {

  anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${play}&apikey=Alphabot`)
  if (anu.error) return reply(anu.error)
  lagu = await getBuffer(anu.results.result)
  cnf.sendMessage(from, lagu, audio, {
  mimetype: 'audio/mp4', filename: `${anu.results.title}.mp3`, quoted: mek})
}
              } catch {              
      
         reply('Lo siento ah ocurrido un error')
            }
          break
case 'addprem':
case 'df':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
reply(`👑@${mentioned[0].split('@')[0]} fue añadido a la lista de usuários premium👑`)
break
case 'ytmp4':  		  
try {
                cnf.sendMessage(from, mess.wait, text,{quoted : mek})
				play = args.join(" ")
     	    	try {
				anu = await fetchJson(`https://api-alc.herokuapp.com/api/download/ytmp4?url=${play}&apikey=ConfuMods`)
				if (anu.error) return reply(anu.error)
				buffer1 = await getBuffer(anu.link)		
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.titulo}.mp4`, quoted: mek, caption: 'Aqui tienes 💕🦈'})				
                } catch { 				             			   
				anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${play}&apikey=Alphabot`)
				if (anu.error) return reply(anu.error)
				buffer1 = await getBuffer(anu.results.result)		
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.results.title}.mp4`, quoted: mek, caption: 'Aqui tienes 💕🦈'})				          
           }
                } catch {
                reply('Lo siento ah ocurrido un error')
           }

          break
          
          
/*          case 'ytmp3': 
			if (args.length === 0) return reply(`*${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link no válido!')
			var mulaikah = args.join(' ')
			await reply(mess.wait)
                xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE MP3 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                    })
                .catch((err) => {
                    reply('error')
                })
                break
case 'ytmp4': 
			if (args.length === 0) return reply(`*${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Error!')
			var mulaikah = args.join(' ')
			xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Calidad :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, 'uwu', mek)
                    }).catch((err) => {
                    reply('error')
                })
                break
*/
              
           case 'play': 
           case 'song':
  if(!c) return reply('Que musica deseas buscar?')           
 	    	try {
			if (args.length === 0) return reply(`Enviar *${prefix}play* _Happier Than Ever_`)
			var srch = args.join(' ')
				    	
  anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/search?query=${srch}&apikey=Alphabot`)
 	
						const captions = `*---- 「 PLAY MUSIC 」----*
					
• Titulo : ${anu.results.all[1].title}

• ID : ${anu.results.all[1].videoId}

• Vistas: ${anu.results.all[1].views} 

• Duracion : ${anu.results.all[1].duration.timestamp}

• Link : ${anu.results.all[1].url}`

var thumbyt = await getBuffer(anu.results.all[1].thumbnail)

sendButLocation(from, captions, '𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', thumbyt, [{buttonId: `.ytmp4 ${srch}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${srch}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						
		              } catch {
             reply('Lo siento ah ocurrido un error')
            }
			break

                
/*case 'simi':
					if (args.length < 1) return cnf.sendMessage(from, `¿si?`, text, { quoted: mek })				
                teks = args.join(' ')                
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${teks}&lc=es`)             
                     const sami = simi.success
                 es = ['es']    
                     const gtts = require('./lib/gtts')('es')				
                     var dtt = sami
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break*/

//FIN
case 'jadibot':
case 'serbot':
case 'instalarbot':
case 'qrcode':
case 'qr':
if(from.endsWith('@g.us')) return reply('Solo se puede utilizar en pv')
client.version = [2, 2143, 3]
client.browserDescription = ['AlcatrazBot 2','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await cnf.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: '¡Escanea este QR para convertirte en un bot temporal!\n1. Haga clic en los tres puntos en la esquina superior derecha.\n2. Toca WhatsApp Web\n3. Escanea este QR \n\nEl QR caduca en 20 segundos'})    
setTimeout(() => {
       cnf.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Puede iniciar sesión sin qr con el siguiente mensaje`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./cnf.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Conectado exitosamente con WhatsApp.*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('¡Error! solo 1 persona puede acceder a la función Jadibot')
}
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Okay')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Listo')
client.close()
}
break
case 'culik':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('_*Ingrese la identificación del grupo*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
cnf.groupAdd(args[0], pantek)
break

       case 'owner':
        case 'wner':
        case 'creador':
        case 'creator':
        case 'developer':
		case 'author':
		case 'creadores':
		case 'desarrolladores':
		case 'desarolladores':
		case 'developer':
	   case 'developers':
	   
//////////////CONFU		
const vcConfu = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Confu\n' 
            + 'ORG:Editor;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=51923568749:+51923568749\n' 
            + 'END:VCARD' 
////////////////HIRO-BEET

const vcHiro = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Hiro-Beet\n' 
            + 'ORG:Editor;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=447309247974:+447309247974\n' 
            + 'END:VCARD' 
////////////////ABADON

const vcAbadon = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Abadon\n' 
            + 'ORG:Estilista;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=573225236629:+573225236629\n' 
            + 'END:VCARD' 

                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Confu", vcard: vcConfu}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Hiro", vcard: vcHiro}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Abadon", vcard: vcAbadon}, MessageType.contact, { quoted: mek})
if(!isGroup) return
reply('He enviado los numeros de mis desarrolladores a tu priv!')
break
  
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Usar : ${command} comando y Etiqueta sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Listo")
} else {
reply('Etiqueta un sticker')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Usa : ${command} Etiqueta un sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Listo")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LISTA DE CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*⬣ ID :* ${i.id}\n*⬣ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'bugtroli':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
const memekkkk = '1000@s.whatsapp.net'
cnf.sendMessage(memekkkk, 'XDXDXD', MessageType.text)
break

      case 'igstory': 
              if(!c) return reply('*Usuario?*')
              hx.igstory(c)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              cnf.sendMessage(from,link,video,{quoted: mek,caption: `Tipo : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              cnf.sendMessage(from,link,image,{quoted: mek,caption: `Tipo : ${i.type}`})                  
              }
              }
              });
              break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Link?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)


res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await cnf.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Etiqueta  imágen/video')
            }
            break
case 'viewonce':
res = await cnf.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
cnf.relayWAMessage(res)
break

case 'pinterest':
if (!c) return reply('qué estás buscando?')
reply(mess.wait)


pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
    if (!m.quoted) return reply('Etiqueta!')
    let qse = cnf.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('el mensaje que respondió no contiene una respuesta!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = cnf.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${cnf.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Me sali xd' : 'Estoy dentro'}]`).join`\n\n`
  reply(txs)
  break
  case 'get':
case 'fetch':
            if(!c) return reply('Link?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Usa ${prefix}autorespon on/off`)
           if (c === 'on'){
              autorespon = false
                    reply(`Activar la respuesta automática con éxito`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Desactivar con éxito la respuesta automática`)
                } else {
                    reply(mess.error.api)
                }
                break
                           
////////////////
                
        case 'test':
				case 'cek':
				case 'tes':
				runtime = process.uptime()
				reply(`- Activo!\n${waktu(runtime)}`)
				break
				case 'tictactoe':



case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a tu oponente! ')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
cnf.sendMessage(from, `*🎳 Tictactoe 🎲*

[@${er2.split('@')[0]}] Te desafían a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.

Escribe ${prefix}delttc , Para reiniciar los juegos en el grupo!`, text, {contextInfo: {mentionedJid: [er2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('No hay juego en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Listo')
break
case 'getscmd':
duda = fs.readFileSync('./sticker/menu.webp')
cnf.sendMessage(from, duda, sticker, {quoted: mek})
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await cnf.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await cnf.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				cnf.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Cambio exitoso del modo self a public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Éxito en cambiar el modo public a self')
			break
		case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('¿Qué quieres buscar?')
reply(mess.wait)


teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Ocurre un error o no se encuentran resultados_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados de búsqueda de :* ${teks}`})
}
}
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('¿Qué estás buscando?')
teks = args.join(' ')
reply(mess.wait)


res = await ggs({'Resultado de' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Titulo* : ${i.title}
*Link* : ${i.link}
*Información* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Qué buscar? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Resultado de error no encontrado') 
}) 
result = `*Titulo :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (args.length < 1) return reply('Link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
reply(mess.wait)


teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nombre :* ${res[0].nama}
*Peso :* ${res[0].size}

_Se está enviando el archivo. Espere unos minutos._`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'lirik':
if (args.length < 1) return reply('Titulo??')
reply(mess.wait)


teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break


				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await cnf.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await cnf.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await cnf.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await cnf.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await cnf.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Leído por :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

				case 'd':
				case 'del':
				case 'delete':
					cnf.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
		if (!isQuotedSticker) return reply(`Etiqueta un sticker*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await cnf.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Eliminar chat con éxito' + from)
                await sleep(4000)
                cnf.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await cnf.chats.all()
					cnf.setMaxListeners(10)
					for (let _ of anu) {
						cnf.deleteChat(_.jid)
					}
					reply('Todos los mensajes se borraron con éxito')
					break
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('El bot ha sido silenciado en este chat.')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
__path = process.cwd()
reply(`_Reiniciando ${NombreBot}_`)
exec(`cd ${__path} && node index`)
sleep(4000)
reply('Listo')
break
				case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await cnf.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await cnf.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						cnf.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`para activar usa : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya activa')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Activar con éxito la función antienlace')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Desactivada')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Desactivar con éxito la función antienlace')
					} else {
						reply('1 para encender, 0 para apagar')
					}
					break
				case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
cnf.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break


/*case 'tts':
					if (args.length < 1) return cnf.sendMessage(from, `¿Cuál es el código de idioma? ejemplo : ${prefix}tts es Hola`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return cnf.sendMessage(from, `¿Dónde está el texto? ejemplo : ${prefix}tts es Hola`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('El texto es demasiado largo')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								cnf.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break*/
				case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupDemoteAdmin(from, [demote])
						reply('Listo')
						break
					case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupMakeAdmin(from, [promote])
						reply('Listo')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await cnf.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink de el grupo ${groupName}`
					cnf.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'welcome':		  
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Activado✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Desactivado✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}                    
          break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         cnf.query({json, expect200: true})
          reply('Restablecer con éxito el enlace de grupo')
         break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Abriendo Grupo : ${groupName}`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Cerrando grupo : ${groupName}`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Usa ${prefix}spam texto|Cantidad`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Usa ${prefix}spam Texto|Cantidad`)
				if (Number(argzi[1]) >= 5000) return reply('Supera el limite!')
				if (isNaN(argzi[1])) return reply(`Tiene que ser un número`)
				for (let i = 0; i < argzi[1]; i++){
					cnf.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                cnf.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                cnf.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					cnf.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Éxito al cambiar el nombre del grupo a ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					cnf.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Se cambió correctamente la descripción del grupo a ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
				cnf.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Etiqueta una imagen!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await cnf.downloadAndSaveMediaMessage(enmediau)
					await cnf.updateProfilePicture(botNumber, mediau)
					reply('Listo')
					break
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				cnf.updatePresence(from, Presence.composing)
				cnf.groupLeave(from)
						break
				case 'bc':
					cnf.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Y el texto?')
					anu = await cnf.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Éxito de la transmisión:\n${body.slice(4)}`)
					}
					break
				case 'tomp4':
					if (!isQuotedSticker) return reply('Etiqueta un sticker gif')
                                        reply(mess.wait)


            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await cnf.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Etiqueta un sticker gif!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					cnf.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Etiqueta un video')
					reply(mess.wait)


					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await cnf.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						cnf.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            cnf.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nEjemplo : 🍌 : 🍌 : 🍌 <=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Usa ${prefix}kontak @tag|nombre`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Usa ${prefix}kontak @tag|nombre`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
				try {
					anu = from
			   metadete = await cnf.groupMetadata(anu)
				cnf.sendMessage(from, metadete.desc, text, {quoted:mek})
				 } catch (e) {
             reply(`No eh logrado proporcionar la descripción esto se puede deber a que no soy admin o el grupo no tiene una.`)
}
				  
				    break
					case 'getbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await cnf.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = cnf.contacts[ambl] != undefined ? cnf.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : cnf.contacts[ambl].notify || cnf.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await cnf.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            cnf.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
			if (args.length < 1) return reply(`Usa ${prefix}chat 52###|texto`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            cnf.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Enviar chat con éxito :\n${org}, @${nomor}`)
            break
				case 'attp':
					if (!c) return reply(`¿Dónde está el texto?\nEjemplo :\n${prefix}attp Alcatraz`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					cnf.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
			if (args === 0) return reply('Donde esta el emoji?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('Fallo'))
           })
    	   break
				case 'tag':
			if (args.length < 1) return reply(`Usa ${prefix}tag 52#######`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					cnf.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					cnf.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'listadmins':
  case 'listadmin':
    case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
       case 'listonline':
             if (!isGroup) return reply(`*Solo puede ser usado en grupos*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
             cnf.sendMessage(from, '*Lista de personas online:*\n\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
case 'joinn':
if (isGroup && !itsMe) return reply('Solo se puede usar en chat privado!')
if (args.length < 1) return reply(`Usa *${prefix}join* link`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
cnf.acceptInvite(code)
 .then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
      case 'join': 
             if (args.length == 0) return reply(`Ejemplo : ${prefix}join https://chat.whatsapp.com/#######`)
             if (!c) return reply('*Donde esta el link?*')
             
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*El enlace no es válido*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = cnf.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*Listo*')
             break
				case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`Etiqueta una imagen/ documento/ gif/ sticker/ audio/ video`)
        }
        break
				case 'status':
				case 'estado':
case 'stats':
				var groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await cnf.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = cnf.user.phone
					stamtus = `⍟ ────────────────── ⍟

Chats privados : ${privat.length}
Chats grupales : ${groups.length}
Total Chat : ${totalChat.length}
Velocidad : ${latensi.toFixed(4)} second
Bateria : ${baterai.battery}
Cargado : ${baterai.isCharge}
Modo : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Uso de RAM : ${ram2}
Nombre de host : ${os.hostname()}
Plataforma : ${os.platform()}
Tiempo de actividad : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Modelo de dispositivo: ${cnf.user.phone.device_model}
Manufactura : ${device_manufacturer}
Wa Version: ${cnf.user.phone.wa_version}
Android Version: ${cnf.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				cnf.updatePresence(from, Presence.composing)
					anu = await cnf.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('Etiqueta sticker/audio')
							}
					break
                  
					case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = false
				reply('Estado : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Función OFFLINE activada')
				break
case 'tagall':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
            case 'hidetag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break


	case 'creditos':
	case 'credits':
	case 'credito':  
    hmm4 = fs.readFileSync(`./alcatraz.jpg`)
imeu = await cnf.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await cnf.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "4626803044093248", 
  "title": 'AlcBot By Alcatraz-Team',
"description": 'Creditos', 
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "51910041609@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, 
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, 
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 }
				})
  cnf.relayWAMessage(res)
  break

                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Listo')
				break
/*				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)


								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Empezado : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Envíe una imagen/video con la etiqueta ${prefix}sticker o etiqueta la imagen / video que ya alla sido enviada\nNota: La duración máxima del video es de 8 segundos`)
						}
						break*/
					case 'sticker':
					case 's':
					case 'stiker':
					case 'stick':
							if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Iniciado : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Listo')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
					} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							/*if (!wmsti.includes('|')) return reply(`Envía una imagen o responde a una imagen con *${prefix}stickerwm nombre|author*`)*/
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Iniciado : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Listo')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Envíe una imagen/video con la etiqueta ${prefix}stickerwm nombre|author o etiquete la imagen/video que ya alla sido enviada\nNota: La duración máxima del video es de 8 segundos`)
						}
						break
     		    case 'robar':
					case 'take':
						if (!isQuotedSticker) return reply(`Usa *${prefix}takestick nombre|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break

			case 'speed':
			case 'velocidad':
			case 'ping':
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Ping: ${latensyi.toFixed(4)} Segundos`)
					break

                 case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Etiqueta un sticker')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							cnf.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break

				break
				case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await cnf.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				cnf.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Donde esta el texto?')
					iyek = body.slice(8)
					cnf.setStatus(`${iyek}`)
					reply(`Éxito al cambiar la biografía a ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Donde esta el texto?')
                anu = body.slice(9)
                cnf.updateProfileName(anu)
                reply(`Éxito al cambiar el nombre a ${body.slice(9)}`)
                break
//------------ <Add/Kick >-----------------\\
		case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`Usa ${prefix}add 502######`)
					if (args[0].startsWith('011')) return reply('Utilice el código de país ejemplo : +52..')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque esta en modo privado')
					}
					break
case 'kick2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)		
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta un mensaje oh utiliza @!')
				    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta un mensaje oh utiliza @!')
			bai = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupRemove(from, [bai])
					break

			    case 'kick':			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							     if (!isGroupAdmins) return reply(mess.only.admin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cnf.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cnf.groupRemove(from, mentioned)
					}			
          break 

                    
//------------ <Add/Kick >-----------------\\
                    case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usa ${prefix}creategrup nombre|@tag`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					cnf.groupCreate(argz[0], anu)
					reply(`Éxito en la creación de el grupo ${argz[0]}`)
                }
				break

			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Usa ${prefix}addrespon Hola|Hola amiko`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Ya existe`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Respuesta agregada con éxito ${argz[0]}`)
				break

			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Usa ${prefix}delrespon ola`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`No esta en la base de datos`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Se eliminó la respuesta con éxito ${body.slice(11)}`)
				break

////////////////// COMANDOS BOT2 /////////////////

                    case 'test-gay':				 
					const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
					wiw = fs.readFileSync(`./alcatraz.jpg`)
					cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan gay eres*\n\n'+ gai })									
                    break

					case 'test-puta':			 
					const puuta =['Eres 0% puta' , 'Eres 1% puta' , 'Eres 88% puta' , 'Eres 89% puta' , 'Eres 90% puta' , 'Eres 91% puta' , 'Eres 92% puta' , 'Eres 93% puta' , 'Eres 94% puta' , 'Eres 95% puta' , 'Eres 96% puta' , 'Eres 97% puta' , 'Eres 98% puta' , 'Eres 99% puta' , 'Eres 100% puta','Eres infinitamente puta!']									
					const gaii = puuta[Math.floor(Math.random() * puuta.length)]
					wiw = fs.readFileSync(`./alcatraz.jpg`)
					cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan puta eres*\n\n'+ gaii })					
                    break

                    case 'test-lesbi':		
                    const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
                	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./alcatraz.jpg`)						
					cnf.sendMessage(from, wnw, image, { caption: '*Que tan lesbi eres*\n\n'+ rii, quoted: mek })					
                    break                                      

					case 'reto':		
					const daare =['Te reto a poner en tu info de Whatsapp que te gusta Anuel por 24 horas','Te reto a decirle a tu crush que la amas y pasar cap en el grupo','Te reto a poner en tu estado que buscas pareja','Te reto a poner en tu perfil la foto de tu crush','Te reto a decirle a alguien que te gusta...','Te reto a mandar un audio cantando','Te reto mandar audio hablando con vos de niña de 5 años','Te reto a poner en tu info que te gusta tu vecin@','Te reto mandar una foto tuya sin taparte la cara','Te reto a decir que apodo tenias cuando eras un/a niñ@ aun','Te reto a enviar un vídeo bailando','Te reto a enviar el último meme que allas visto','Te reto a enviar tu canción favorita']
					const deer = daare[Math.floor(Math.random() * daare.length)]
				    wbw = fs.readFileSync(`./alcatraz.jpg`)							
				    cnf.sendMessage(from, wbw, image, { quoted: mek, caption: '*Reto 😈*\n\n'+ deer })					
                    break	
                    									
   					case 'verdad':
					const trrut =['Con quien de los que están aqui en el grupo te besarías? (etiqueta)','¿Alguna vez te ha gustado alguien? ¿Cuanto tiempo?','Alunga vez te llegó a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu último beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre l@s administradores','Tienes novi@?','Cuantas veces te as sentido ignorad@ por tu pareja o insuficiente para el/ella?','Que opinas de la nueva política de Whatsapp?','Que opinas sobre Telegram?','Tienes canal de Youtube?','Que opinas sobre Este bot?','Que opinas sobre el grupo?','Que tal te parece esta función de verdad o reto?']
					const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./alcatraz.jpg`)						
					cnf.sendMessage(from, wuw, image, { caption: '*Verdad😇*\n\n'+ ttrrth, quoted: mek })
					 break

/////////////////// COMANDOS +18 //////////////////////

				  case 'nsfw':
	               if (!isGroup) return reply(mess.only.group)
			       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`para activar usa : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply('Ya activa')
					nsfww.push(from)
					fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
					reply('Activar correctamente la función nsfw')
					cnf.sendMessage(from, `Libre para usar comandos HENTAI :v`, text)
					} else if (Number(args[0]) === 0) {
					if (!isNsfw) return reply('Desactivado')
					var ini = nsfww.indexOf(from)
					nsfww.splice(ini, 1)
					fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
					reply('Desactive con éxito la función nsfw')
					} else {
					reply('1 para encender, 0 para apagar')
					}
					break


case 'checkbin':
if (!c) return fakegroup('Donde esta el número?')
cc = args.join(' ')
uwus = ['```']
	anu = await fetchJson(`https://lookup.binlist.net/${cc}`)
reply(`${uwus}Numero : ${cc}
Esquema : ${anu.scheme}
Marca : ${anu.brand}
Tipo : ${anu.type}
Pais : ${anu.country.emoji}${anu.country.name}${anu.country.emoji}
Emoji : ${anu.country.emoji}

Localización : 
Longitud ${anu.country.latitude}
Latitud ${anu.country.longitude}

Banco : ${anu.bank.name}
Numero : ${anu.bank.phone}
Url : ${anu.bank.url}
Ciudad : ${anu.bank.city}${uwus}`)
break

case 'unirse':
if (!c) return reply('Donde esta el Link de el grupo????')
 ar = args.join(' ')
 teks = `${ar.replace('https://chat.whatsapp.com/', '')}`
 cnf.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
break


            /*case 'telesticker':		  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api-alc.herokuapp.com/api/download/telesticker?url=${ini_url}&apikey=M`)
                    ini_sticker = ini_url.result
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break*/








/*case 'i':
       if (!isGroup) return reply('esta función es solo para grupos')
       if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
       reply(mess.wait)
       anu = await fetchJson(`https://x-restapi.herokuapp.com/api/kemonomimi-nsfw?apikey=BETA`)
       yoiz = await getBuffer(anu.url)
       buttons = [{buttonId: `kemono2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋𝐂𝚫𝐓𝐑𝚲𝐙『 𖡗 』𝐁𝚯𝐓', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
         break
*/

////////////////RANDOM IMAGENES////////////////

         case 'badgirl': 
         case 'darkgirl':
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/badgirl?&apikey=${confukey}`)					
buttons = [{buttonId: `badgirl`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐁𝐚𝐝𝐆𝐢𝐫𝐥`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
            } catch {
            reply('Lo siento ah ocurrido un error')
            }
	 	 break

////////////////

         case 'brasil': 
         case 'brasileñas':
         case 'menina':
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/brasil?&apikey=${confukey}`)					
buttons = [{buttonId: `brasil`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐁𝐫𝐚𝐬𝐢𝐥`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'muslo': 
         case 'muslos':        
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=${confukey}`)					
buttons = [{buttonId: `muslos`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐌𝐮𝐬𝐥𝐨𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'chica': 
         case 'chicas':  
         case 'girls':
         case 'random-girls':      
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/random-girls?&apikey=${confukey}`)					
buttons = [{buttonId: `girls`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐑𝐚𝐧𝐝𝐨𝐦-𝐆𝐢𝐫𝐥𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'say':  
         case 'saycat':
         case 'say-cat':      
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/say_cat?&apikey=${confukey}`)					
buttons = [{buttonId: `saycat`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐒𝐚𝐲-𝐂𝐚𝐭`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'ari':  
         case 'arigameplay':
         case 'ari-gameplay':   
         case 'ari-gameplays':
         case 'arigameplays':
         case 'chica-gamer':   
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/ari?&apikey=${confukey}`)					
buttons = [{buttonId: `ari`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐫𝐢-𝐆𝐚𝐦𝐞𝐩𝐥𝐚𝐲𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break


////////////////

         case 'china': 
         case 'chinas':        
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/china?apikey=${confukey}`)					
buttons = [{buttonId: `china`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐂𝐡𝐢𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'vietnam': 
         case 'vietnamita':        
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/vietnam?apikey=${confukey}`)					
buttons = [{buttonId: `vietnam`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐕𝐢𝐞𝐭𝐧𝐚𝐦`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

case 'thailand':
case 'thailandia':
case 'thailandesa':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/thailand?apikey=${confukey}`)
buttons = [{buttonId: `thailandesa`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐓𝐡𝐚𝐢𝐥𝐚𝐧𝐝𝐞𝐬𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

////////////////

case 'indo':
case 'indonesia':
case 'indonesa':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/indonesia?apikey=${confukey}`)
buttons = [{buttonId: `indo`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐈𝐧𝐝𝐨𝐧𝐞𝐬𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'coreana':
case 'coreanas':
case 'koreana':
case 'corea':
case 'korea':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/korea?apikey=${confukey}`)
buttons = [{buttonId: `corea`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐂𝐨𝐫𝐞𝐚𝐧𝐚𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
            reply('Lo siento ah ocurrido un error')
            }

break

////////////////

case 'japon':
case 'japom':
case 'japonesa':
case 'japonesas':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/japan?apikey=${confukey}`)
buttons = [{buttonId: `japon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐉𝐚𝐩𝐨𝐧𝐞𝐬𝐚𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'malaysia':
case 'malasia':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/chicas/malaysia?apikey=${confukey}`)
yoiz = await getBuffer(anu.buff)
buttons = [{buttonId: `malasia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐌𝐚𝐥𝐚𝐬𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
             reply('Lo siento ah ocurrido un error')
            }

break

////////////////

case 'jenny':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jenni?apikey=Alphabot`)
buttons = [{buttonId: `jenny`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐉𝐞𝐧𝐧𝐲`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
             reply('Lo siento ah ocurrido un error')
            }

break

////////////////

case 'jisso':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/jiso?apikey=Alphabot`)
buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐉𝐢𝐬𝐬𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
             reply('Lo siento ah ocurrido un error')
            }

break

////////////////

case 'lisa':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/lisa?apikey=Alphabot`)
buttons = [{buttonId: `lisa`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐋𝐢𝐬𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
             reply('Lo siento ah ocurrido un error')
            }

break

////////////////

case 'rose':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alphabot.herokuapp.com/api/cecan/rose?apikey=Alphabot`)
buttons = [{buttonId: `rose`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐑𝐨𝐬𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
              } catch {
             reply('Lo siento ah ocurrido un error')
            }

break



////////////////FIN////////////////


////////////////RANDOM ANIMES////////////////

case 'wallpaper':
case 'fondo':
case 'wp':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/wallpaper?&apikey=${confukey}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'wallpaper2':
case 'fondo2':
case 'wp2':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/wallpaper2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `wallpaper2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'padoru':
case 'pador':
case 'pandoru':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/padoru?&apikey=${confukey}`)
buttons = [{buttonId: `padoru`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐏𝐚𝐝𝐨𝐫𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'waifu':
case 'anime':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/waifu?&apikey=${confukey}`)
buttons = [{buttonId: `waifu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐖𝐚𝐢𝐟𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'megu':
case 'megumi':
case 'megumin':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/megumin?&apikey=${confukey}`)
buttons = [{buttonId: `megu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐠𝐮𝐦𝐢𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'megu2':
case 'megumi2':
case 'megumin2':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/megumin2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `megu2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐠𝐮𝐦𝐢𝐧 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'neko':
case 'nekos':
case 'furro':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/neko?&apikey=${confukey}`)
buttons = [{buttonId: `neko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐤𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'neko2':
case 'nekos2':
case 'furros':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/awoo?&apikey=${confukey}`)
buttons = [{buttonId: `neko2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐤𝐨𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'loli':
case 'lolis':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/loli?&apikey=${confukey}`)
buttons = [{buttonId: `loli`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐥𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'loli2':
case 'lolis2':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/loli2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `loli2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐥𝐢 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'naruto':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/naruto?&apikey=${confukey}`)
buttons = [{buttonId: `naruto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐚𝐫𝐮𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sasuke':
case 'saske':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/sasuke?&apikey=${confukey}`)
buttons = [{buttonId: `sasuke`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐬𝐮𝐤𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sakura':
case 'saku':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/sakura?&apikey=${confukey}`)
buttons = [{buttonId: `sakura`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐤𝐮𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'hina':
case 'hinata':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/hinata?&apikey=${confukey}`)
buttons = [{buttonId: `hinata`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐇𝐢𝐧𝐚𝐭𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kann':
case 'kanna':
case 'kamui':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/kanna?&apikey=${confukey}`)
buttons = [{buttonId: `kanna`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐧𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shoto':
case 'todoroki':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/todoroki-shoto?&apikey=${confukey}`)
buttons = [{buttonId: `shoto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐨𝐝𝐨𝐫𝐨𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'akiyama':
case 'akiyam':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/akiyama?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `akiyama`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐤𝐢𝐲𝐚𝐦𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'anna':
case 'ana':
case 'kobayakawa':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kobayakawa-anna?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `anna`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐧𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'ayuzawa':
case 'misaki':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/misaki-ayuzawa?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `misaki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐲𝐮𝐳𝐚𝐰𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'boruto':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/boruto?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `boruto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐁𝐨𝐫𝐮𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'chitoge':
case 'kirisaki':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/chitoge?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `chitoge`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐂𝐡𝐢𝐭𝐨𝐠𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'deidara':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/deidara?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `deidara`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐃𝐞𝐢𝐝𝐚𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'doraemon':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/doraemon?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `doraemon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'elaina':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/elaina?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `elaina`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐥𝐚𝐢𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'emilia':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/emilia?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `emilia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐦𝐢𝐥𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'erza':
case 'scarlet':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/erza?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `erza`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐫𝐳𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'rias':
case 'gremory':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/rias-gremory?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `rias`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐑𝐢𝐚𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'hestia':
case 'estia':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/hestia?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `hestia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐇𝐞𝐬𝐭𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'inori':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/inori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `inori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐧𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'isuzu':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/isuzu?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `isuzu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐬𝐮𝐳𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'itachi':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/itachi?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `itachi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐭𝐚𝐜𝐡𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaga':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaga?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaga`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐠𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kagura':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kagura?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kagura`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐠𝐮𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kakashi':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kakashi?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kakashi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐤𝐚𝐬𝐡𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaori':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaneki':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaneki?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaneki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐧𝐞𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kotori':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kotori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kotori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐨𝐭𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kurumi':
case 'tokisaki':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kurumi-tokisaki?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `tokisaki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐮𝐫𝐮𝐦𝐢-𝐓𝐨𝐤𝐢𝐬𝐚𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'madara':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/madara?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `madara`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐚𝐝𝐚𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'mikasa':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/mikasa-ackerman?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `mikasa`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐤𝐚𝐬𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'miku':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/miku?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `miku`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐤𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'minato':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/minato?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `minato`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐧𝐚𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'onepiece':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/onepiece?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `onepiece`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐎𝐧𝐞𝐏𝐢𝐞𝐜𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'nezuko':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/nezuko?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `nezuko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐳𝐮𝐤𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'pokemon':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/pokemon?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `pokemon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐏𝐨𝐤𝐞𝐦𝐨𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'ppcouple':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/ppcouple?apikey=${confukey}`)
yoiz = await getBuffer(anu.result.femenino)
yoizz = await getBuffer(anu.result.masculino)
cnf.sendMessage(from, yoiz, image, {quoted: mek, caption: 'Perfil Femenino'})								
cnf.sendMessage(from, yoizz, image, {quoted: mek, caption: 'Perfil Masculino'})								
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sagiri':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/sagiri?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `sagiri`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐠𝐢𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shina':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shina?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shina`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shinka':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shinka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shinka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐧𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shota':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shota?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shota`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐨𝐭𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shizuka':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shizuka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shizuka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐳𝐮𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'touka':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/touka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `touka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐨𝐮𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'tsunade':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/tsunade?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `tsunade`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐬𝐮𝐧𝐚𝐝𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

//NSFW//

////////////////

case 'stickcum':
case 'scum':
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break

case 'stickhentai':	
	  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await getBuffer(`https://api.lolhuman.xyz/api/random2/classic?apikey=${lolh}`)			
            resi = await upload(anu)            
			exec(`wget ${resi} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)			
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
          break


case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':


if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break

case 'stickbj':
case 'stickblowjob':
case 'sbj':
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break

case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }			
			break

case 'stickneko':
case 'sneko':
case 'nekostick':
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }

			break

case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
case 'neko4':
case 'yuri2':
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función Nsfw no está activa en este grupo\nPor favor escribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/nsfw/${command}?apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case  'trapnime':
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`La función Nsfw no está activa en este grupo\nPor favor escribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break


case 'neko3':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/nsfw/neko?apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `neko3`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'yaoi':
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/nsfw/yaoi?apikey=${confukey}`)
buttons = [{buttonId: `yaoi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break


////////////////

//Encode&Decode 64

////////////////

case 'encode-64':
case 'decode-64':
case 'encode-32':
case 'decode-32':
texto = args.join(" ")
anu = await fetchJson(`https://api-alc.herokuapp.com/api/encode-decode/${command}?text=${texto}&apikey=${confukey}`)
reply(anu.result)
break

////////////////

//SIMI//

////////////////

case 'simi':
texto = args.join(" ")
anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/simi?text=${texto}&apikey=${confukey}`)
reply(anu.result)
break

////////////////

//EDIT IMG//

////////////////

		case 'triggered':
		case 'gay':
		case 'glass':
		case 'passed':
		case 'jail':
		case 'comrade':
		case 'green':
		case 'blue':
		case 'sepia':
		case 'wasted':
		case 'greyscale':
		case 'blurple2': 
		case 'blurple': 
		case 'red': 
		case 'invertgreyscale': 
		case 'invert':
					var imgbb = require('imgbb-uploader')
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          					reply(mess.wait)
					owgi = await cnf.downloadMediaMessage(ger)
				    anu = await upload(owgi)
					anu4 = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${anu}`)
					cnf.sendMessage(from, anu4, image, {quoted: mek})								
					} else {
					reply(`Etiquetar una imagen con substitulo ${command} por favor`)
					}					
					break 

////////////////

//TEXTPRO//

////////////////

case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (args.length < 1) return reply('Falta el texto')
var m = args.join(" ")
reply(mess.wait)
	    	try {
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
				cnf.sendMessage(from, textpro, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  

////////////////

 case 'blackpink':
 case 'rainbow2':
 case 'water_pipe':
 case 'halloween':
 case 'sketch':
 case 'sircuit':
 case 'discovery':
 case 'metallic2':
 case 'fiction':
 case 'demon':
 case 'transformer':
 case 'berry':
 case 'thunder':
 case 'magma':
 case '3dstone':
 case 'neon':
 case 'glitch':
 case 'harry_potter':
 case 'embossed':
 case 'broken':
 case 'papercut':
 case 'gradient':
 case 'glossy':
 case 'watercolor':
 case 'multicolor':
 case 'neon_devil':
 case 'underwater':
 case 'bear':
 case 'wonderfulg':
 case 'christmas':
 case 'neon_light':
 case 'snow':
 case 'cloudsky':
 case 'luxury2':
 case 'gradient2':
 case 'summer':
 case 'writing':
 case 'engraved':
 case 'summery':
 case '3dglue':
 case 'metaldark':
 case 'neonlight':
 case 'oscar':
 case 'minion':
 case 'holographic':
 case 'purple':
 case 'glossyb':
 case 'deluxe2':
 case 'glossyc':
 case 'fabric':
 case 'neonc':
 case 'newyear':
 case 'newyear2':
 case 'metals':
 case 'xmas':
 case 'blood':
 case 'darkg':
 case 'joker':
 case 'wicker':
 case 'natural':
 case 'firework':
 case 'skeleton':
 case 'balloon':
 case 'balloon2':
 case 'balloon3':
 case 'balloon4':
 case 'balloon5':
 case 'balloon6':
 case 'balloon7':
 case 'steel':
 case 'gloss':
 case 'denim':
 case 'decorate':
 case 'decorate2':
 case 'peridot':
 case 'rock':
 case 'glass':
 case 'glass2':
 case 'glass3':
 case 'glass4':
 case 'glass5':
 case 'glass6':
 case 'glass7':
 case 'glass8':
 case 'captain_as2':
 case 'robot':
 case 'equalizer':
 case 'toxic':
 case 'sparkling':
 case 'sparkling2':
 case 'sparkling3':
 case 'sparkling4':
 case 'sparkling5':
 case 'sparkling6':
 case 'sparkling7':
 case 'decorative':
 case 'chocolate':
 case 'strawberry':
 case 'koifish':
 case 'bread':
 case 'matrix':
 case 'blood2':
 case 'neonligth2':
 case 'thunder2':
 case '3dbox':
 case 'neon2':
 case 'roadw':
 case 'bokeh':
 case 'gneon':
 case 'advanced':
 case 'dropwater':
 case 'wall':
 case 'chrismast':
 case 'honey':
 case 'drug':
 case 'marble':
 case 'marble2':
 case 'ice':
 case 'juice':
 case 'rusty':
 case 'abstra':
 case 'biscuit':
 case 'wood':
 case 'scifi':
 case 'metalr':
 case 'purpleg':
 case 'shiny':
 case 'jewelry':
 case 'jewelry2':
 case 'jewelry3':
 case 'jewelry4':
 case 'jewelry5':
 case 'jewelry6':
 case 'jewelry7':
 case 'jewelry8':
 case 'metalh':
 case 'golden':
 case 'glitter':
 case 'glitter2':
 case 'glitter3':
 case 'glitter4':
 case 'glitter5':
 case 'glitter6':
 case 'glitter7':
 case 'metale':
 case 'carbon':
 case 'candy':
 case 'metalb':
 case 'gemb':
 case '3dchrome':
 case 'metalb2':

if (args.length < 1) return reply('Falta el texto')
texto = args.join(" ")
reply(mess.wait)
	    	try {
let textpro2 = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=${alphakey}&text=${texto}`)
				cnf.sendMessage(from, textpro2, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
case 'horny':
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const imagenn = await getBuffer(pporan)
					
				    anuu = await upload(imagenn)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/horny?imagen=${anuu}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'simp':
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		 imag = await getBuffer(pporan)
					
				    anuu = await upload(imag)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid		
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/simp?imagen=${anuu}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek, caption: `Autorizado para ser Simp de @${mentioned[0].split('@')[0]}`})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'tweet':
const queri = args.join(' ')
					const texto1 = queri.split('|')[0]
					const texto2 = queri.split('|')[1]
					const texto3 = queri.split('|')[2]			
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		 ima = await getBuffer(pporan)
					
				    anuu = await upload(ima)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/twfake?imagen=${anuu}&username=${texto1}&username2=${texto2}&comment=${texto3}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

////////////////

case 'ytcomment':
 queryy = args.join(' ')
					 texto11 = queryy.split('|')[0]
					 texto21 = queryy.split('|')[1]						
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		  imaj = await getBuffer(pporan)
					
				    anuu = await upload(imaj)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/ytfake?imagen=${anuu}&username=${texto11}&comment=${texto21}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break







/*yoiz = await getBuffer(anu.result)
anu = await fetchJson*/

/*                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Alcatraz`)

					makell = args.join(" ")
*/



		default:break



		}
		if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.er1.split('@')[0]}`
  cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
cnf.sendMessage(from, `Ya @${tty.er2.split('@')[0]} se niega a participar :(

*(Le teme al éxito 👎👎👎👎)*`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros vacíos')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲

*El ganador es : *@${tty.er1.split('@')[0]} UwU*\n`
ucapan2 = `*🎳 Result 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*_Empate 🐢_*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.er2.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese el número correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲*

El ganador es : *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*Empate 🐢👎*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.er1.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERROR|', 'red'), color(e, 'cyan'))
    /* cnf.sendMessage(`${settings.NumeroOwner}@s.whatsapp.net`, `─────「 *ALERTA-DE-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Desarrollador del 𝚲𝐋⃖͢𝐂𝚫𝐓𝐑⃖͢͢𝚲𝐙『 𝟐ྂ.⃪࿆𝟎࿆ྂ 』𝐁͢𝚯⃖𝐓",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./alcatraz.jpg'),sourceUrl:"https://youtube.com/c/ConfuMods"}}})*/
	}
    }
    }
    }
    }
    }
    }