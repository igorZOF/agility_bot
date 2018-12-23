const TelegramBot = require('node-telegram-bot-api')
const debug = require('./helpers')
const fs = require('fs')
const TOKEN = '717876330:AAGsuXi-Jyw7xHhS73u5hZDxC_ZE-MHHKWQ'

console.log('Bot has been started ....')

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 100,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.onText(/\/antimage_ability/, msg => {

  bot.sendPhoto(msg.chat.id, './antimage_ability1.jpg', {
    caption: 'This is first ability'
  })
    bot.sendPhoto(msg.chat.id, './antimage_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './antimage_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './antimage_ability4.jpg', {
        caption: 'This is fourth ability'
    })

})

bot.onText(/\/antimage_main/, msg => {

    bot.sendPhoto(msg.chat.id, './antimage_main.jpg', {
        caption: 'This is characteristic'
    })

    bot.sendPhoto(msg.chat.id, './antimage_lasttopgame.jpg', {
        caption: 'This is last top game'
    })


})


bot.onText(/\/arcwarden_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './arc-warden_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './arc-warden_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './arc-warden_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './arc-warden_ability4.jpg', {
        caption: 'This is fourth ability'
    })

})

bot.onText(/\/arcwarden_main/, msg => {

    bot.sendPhoto(msg.chat.id, './arc-warden_main.jpg', {
        caption: 'This is characteristic'
    })

    bot.sendPhoto(msg.chat.id, './arc-warden_lasttopgame.jpg', {
        caption: 'This is last top game'
    })

})


bot.onText(/\/bloodseeker_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './bloodseeker_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './bloodseeker_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './bloodseeker_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './bloodseeker_ability4.jpg', {
        caption: 'This is fourth ability'
    })

})

bot.onText(/\/bloodseeker_main/, msg => {

    bot.sendPhoto(msg.chat.id, './bloodseeker_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './bloodseeker_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/bountyhunter_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './bountyhunter_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './bountyhunter_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './bountyhunter_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './bountyhunter_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/bountyhunter_main/, msg => {

    bot.sendPhoto(msg.chat.id, './bountyhunter_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './bountyhunter_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/broodmother_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './broodmother_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './broodmother_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './broodmother_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './broodmother_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/broodmother_main/, msg => {

    bot.sendPhoto(msg.chat.id, './broodmother_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './broodmother_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/clinkz_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './clinkz_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './clinkz_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './clinkz_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './clinkz_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/clinkz_main/, msg => {

    bot.sendPhoto(msg.chat.id, './clinkz_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './clinkz_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/drowranger_ability/, msg => {

    bot.sendPhoto(msg.chat.id,'./drowranger_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './drowranger_ability2.jpg', {
        caption: 'This is second ability'
    })
   bot.sendPhoto(msg.chat.id, './drowranger_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './drowranger_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/drowranger_main/, msg => {

    bot.sendPhoto(msg.chat.id, './drowranger_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './drowranger_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/emberspirit_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './emberspirit_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './emberspirit_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './emberspirit_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './emberspirit_ability4.jpg', {
        caption: 'This is forth ability'
    })
})

bot.onText(/\/emberspirit_main/, msg => {

    bot.sendPhoto(msg.chat.id, './emberspirit_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './emberspirit_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/facelessvoid_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './facelessvoid_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './facelessvoid_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './facelessvoid_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './facelessvoid_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/facelessvoid_main/, msg => {

    bot.sendPhoto(msg.chat.id, './facelessvoid_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './facelessvoid_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/gyrocopter_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './gyrocopter_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './gyrocopter_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './gyrocopter_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './gyrocopter_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/gyrocopter_main/, msg => {

    bot.sendPhoto(msg.chat.id, './gyrocopter_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './gyrocopter_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/juggernaut_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './juggernaut_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './juggernaut_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './juggernaut_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './juggernaut_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/juggernaut_main/, msg => {

    bot.sendPhoto(msg.chat.id, './juggernaut_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './juggernaut_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/lonedruid_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './lonedruid_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './lonedruid_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './lonedruid_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './lonedruid_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './lonedruid_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/lonedruid_main/, msg => {

    bot.sendPhoto(msg.chat.id, './lonedruid_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './lonedruid_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/luna_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './luna_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './luna_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './luna_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './luna_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/luna_main/, msg => {

    bot.sendPhoto(msg.chat.id, './luna_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './luna_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/medusa_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './medusa_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './medusa_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './medusa_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './medusa_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/medusa_main/, msg => {

    bot.sendPhoto(msg.chat.id, './medusa_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './medusa_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/meepo_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './meepo_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './meepo_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './meepo_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './meepo_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/meepo_main/, msg => {

    bot.sendPhoto(msg.chat.id, './meepo_main.jpg', {
        caption: 'This is main'
    })
    bot.sendPhoto(msg.chat.id, './meepo_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/mirana_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './mirana_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './mirana_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './mirana_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './mirana_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/mirana_main/, msg => {

    bot.sendPhoto(msg.chat.id, './mirana_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './mirana_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/monkeyking_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './monkeyking_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_ability5.jpg', {
        caption: 'This is fifth ability'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_ability6.jpg', {
        caption: 'This is sixth ability'
    })
})

bot.onText(/\/monkeyking_main/, msg => {

    bot.sendPhoto(msg.chat.id, './monkeyking_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './monkeyking_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/morphling_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './morphling_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './morphling_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './morphling_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './morphling_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './morphling_ability5.jpg', {
        caption: 'This is fifth ability'
    })
    bot.sendPhoto(msg.chat.id, './morphling_ability6.jpg', {
        caption: 'This is sixth ability'
    })
})

bot.onText(/\/morphling_main/, msg => {

    bot.sendPhoto(msg.chat.id, './morphling_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './morphling_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/nagasiren_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './nagasiren_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './nagasiren_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './nagasiren_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './nagasiren_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/nagasiren_main/, msg => {

    bot.sendPhoto(msg.chat.id, './nagasiren_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './nagasiren_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/nyxassassin_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './nyx_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './nyx_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './nyx_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './nyx_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './nyx_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/nyxassassin_main/, msg => {

    bot.sendPhoto(msg.chat.id, './nyx_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './nyx_lasttopgame.jpg', {
        caption: 'This is lasttopgame'
    })
})


bot.onText(/\/pangolier_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './pangolier_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './pangolier_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './pangolier_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './pangolier_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/pangolier_main/, msg => {

    bot.sendPhoto(msg.chat.id, './pangolier_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './pangolier_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/phantomassassin_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './phantomassassin_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomassassin_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomassassin_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomassassin_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/phantomassassin_main/, msg => {

    bot.sendPhoto(msg.chat.id, './phantomassassin_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './phantomassassin_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/phantomlancer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './phantomlancer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomlancer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomlancer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './phantomlancer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/phantomlancer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './phantomlancer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './phantomlancer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/razor_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './razor_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './razor_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './razor_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './razor_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/razor_main/, msg => {

    bot.sendPhoto(msg.chat.id, './razor_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './razor_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/riki_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './riki_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './riki_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './riki_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './riki_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/riki_main/, msg => {

    bot.sendPhoto(msg.chat.id, './riki_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './riki_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/shadowfiend_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowfiend_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_ability5.jpg', {
        caption: 'This is fifth ability'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_ability6.jpg', {
        caption: 'This is sixth ability'
    })
})

bot.onText(/\/shadowfiend_main/, msg => {

    bot.sendPhoto(msg.chat.id, './shadowfiend_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './shadowfiend_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/slark_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './slark_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './slark_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './slark_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './slark_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/slark_main/, msg => {

    bot.sendPhoto(msg.chat.id, './slark_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './slark_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/sniper_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './sniper_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './sniper_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './sniper_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './sniper_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/sniper_main/, msg => {

    bot.sendPhoto(msg.chat.id, './sniper_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './sniper_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/spectre_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './spectre_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './spectre_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './spectre_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './spectre_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/spectre_main/, msg => {

    bot.sendPhoto(msg.chat.id, './spectre_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './spectre_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/templarassassin_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './templarassassin_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './templarassassin_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './templarassassin_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './templarassassin_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/templarassassin_main/, msg => {

    bot.sendPhoto(msg.chat.id, './templarassassin_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './templarassassin_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/terrorblade_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './terrorblade_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './terrorblade_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './terrorblade_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './terrorblade_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/terrorblade_main/, msg => {

    bot.sendPhoto(msg.chat.id, './terrorblade_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './terrorblade_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/trollwarlord_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './trollwarlord_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './trollwarlord_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './trollwarlord_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './trollwarlord_ability4.jpg', {
        caption: 'This is fourth ability'
    })
    bot.sendPhoto(msg.chat.id, './trollwarlord_ability5.jpg', {
        caption: 'This is fifth ability'
    })
})

bot.onText(/\/trollwarlord_main/, msg => {

    bot.sendPhoto(msg.chat.id, './trollwarlord_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './trollwarlord_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/ursa_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './ursa_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './ursa_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './ursa_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './ursa_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/ursa_main/, msg => {

    bot.sendPhoto(msg.chat.id, './ursa_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './ursa_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/vengefulspirit_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './vengefulspirit_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './vengefulspirit_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './vengefulspirit_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './vengefulspirit_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/vengefulspirit_main/, msg => {

    bot.sendPhoto(msg.chat.id, './vengefulspirit_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './vengefulspirit_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/venomancer_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './venomancer_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './venomancer_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './venomancer_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './venomancer_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/venomancer_main/, msg => {

    bot.sendPhoto(msg.chat.id, './venomancer_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './venomancer_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/viper_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './viper_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './viper_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './viper_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './viper_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/viper_main/, msg => {

    bot.sendPhoto(msg.chat.id, './viper_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './viper_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})


bot.onText(/\/weaver_ability/, msg => {

    bot.sendPhoto(msg.chat.id, './weaver_ability1.jpg', {
        caption: 'This is first ability'
    })
    bot.sendPhoto(msg.chat.id, './weaver_ability2.jpg', {
        caption: 'This is second ability'
    })
    bot.sendPhoto(msg.chat.id, './weaver_ability3.jpg', {
        caption: 'This is third ability'
    })
    bot.sendPhoto(msg.chat.id, './weaver_ability4.jpg', {
        caption: 'This is fourth ability'
    })
})

bot.onText(/\/weaver_main/, msg => {

    bot.sendPhoto(msg.chat.id, './weaver_main.jpg', {
        caption: 'This is characteristic'
    })
    bot.sendPhoto(msg.chat.id, './weaver_lasttopgame.jpg', {
        caption: 'This is last top game'
    })
})



