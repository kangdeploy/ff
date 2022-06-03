const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
    
     Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
     Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
     Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
     Balance : $${toCommas(getBalance(sender, balance))}
     Note : Spam bot = Baned
  
    *Group Menu*
  • ${prefix}linkgrup
  • ${prefix}setppgrup
  • ${prefix}setnamegc
  • ${prefix}setdesc
  • ${prefix}group *Open/Close*
  • ${prefix}revoke
  • ${prefix}hidetag *Text*
  • ${prefix}kick *@tag*
  • ${prefix}add *@tag*
  
    *Main Menu*
  • ${prefix}menu
  • ${prefix}owner
  • ${prefix}donasi
  • ${prefix}speed
  • ${prefix}runtime
  • ${prefix}cekprem
  • ${prefix}listprem
  • ${prefix}far *Text*
  • ${prefix}ana *Text*

    *Converter/Tools*
  • ${prefix}stiker *ReplyGambar*
  • ${prefix}attp *text*

    *Downloader*
  • ${prefix}play *Querry*
  • ${prefix}youtube *LinkYt*
  • ${prefix}tiktok *LinkTt*
  • ${prefix}tiktokaudio *LinkTt*
  • ${prefix}ytmp4 *LinkYt*
  • ${prefix}ytmp3 *LinkYt*
  • ${prefix}igv *Instagram Video*
  • ${prefix}igf *Instagram Image*
  • ${prefix}facebook *LinkFb*
  • ${prefix}mediafire *LinkMediaFire*
  
    *Random Menu*
  • ${prefix}quotes
  • ${prefix}katagalau
  • ${prefix}buylimit *Jumlah*
  • ${prefix}buyglimit *Jumlah*
  • ${prefix}transfer @tag *jumlah*
  • ${prefix}limit
  • ${prefix}balance
  • ${prefix}topbalance

    *Premium User*
  • ${prefix}asupan
  • ${prefix}xnxx link
  • ${prefix}ahegao
  • ${prefix}bloewjob
  • ${prefix}hentai
  • ${prefix}masturbation
  • ${prefix}pussy
  
    *Other menu*
  • ${prefix}ppcp
  • ${prefix}meme
  • ${prefix}lirik *Judul*
  • ${prefix}grupwa *Pencarian*
  • ${prefix}ytsearch *Pencarian*
  • ${prefix}pinterest *Querry*

    *Menu Tulis*
  • ${prefix}nuliskanan *Text*
  • ${prefix}nuliskiri *Text*
  • ${prefix}foliokanan *Text*
  • ${prefix}foliokiri *Text*
  
    *Game & Fun Menu*
  • ${prefix}tictactoe @tag
  • ${prefix}delttc
  • ${prefix}tebakgambar
  • ${prefix}apakah *Query*
  • ${prefix}kapankah *Query*
  • ${prefix}rate *Query*
  • ${prefix}gantecek *Nama*
  • ${prefix}cantikcek *Nama*
  • ${prefix}sangecek *Nama*
  • ${prefix}gaycek *Nama*
  • ${prefix}lesbicek *Nama*
  • ${prefix}gimana *Query*
  • ${prefix}bisakah *Query*
  
    *Owner Menu*
  > evalcode
  x evalcode-2
  $ executor
  • ${prefix}setppbot
  • ${prefix}exif
  • ${prefix}leave
  • ${prefix}addprem
  • ${prefix}delprem
  • ${prefix}broadcast

  *THANKS TO*
  - Allah SWT
  - @irfann._x (Iyan)
  - @arsrfi.jpg (Arasya)`
}
