let moduleMap = {
'assets/internal/index.js' () { return require('assets/internal/index.js') },
'src/scripts/008_2_commonGame/index.js' () { return require('src/scripts/008_2_commonGame/index.js') },
'src/scripts/008_3_common/index.js' () { return require('src/scripts/008_3_common/index.js') },
'src/scripts/008_gameBP/index.js' () { return require('src/scripts/008_gameBP/index.js') },
'src/scripts/008_gameBuy/index.js' () { return require('src/scripts/008_gameBuy/index.js') },
'src/scripts/008_GameBuy2/index.js' () { return require('src/scripts/008_GameBuy2/index.js') },
'src/scripts/008_gamePourBullet/index.js' () { return require('src/scripts/008_gamePourBullet/index.js') },
'src/scripts/008_game_she/index.js' () { return require('src/scripts/008_game_she/index.js') },
'assets/008_main/index.js' () { return require('assets/008_main/index.js') },
'src/scripts/008_MorePlay/index.js' () { return require('src/scripts/008_MorePlay/index.js') },
'assets/008_sdk/index.js' () { return require('assets/008_sdk/index.js') },
'src/scripts/008_skill/index.js' () { return require('src/scripts/008_skill/index.js') },
'assets/008_sm_threeElimination/index.js' () { return require('assets/008_sm_threeElimination/index.js') },
'assets/008_special_weapon/index.js' () { return require('assets/008_special_weapon/index.js') },
'src/scripts/008_sub_mode_cup/index.js' () { return require('src/scripts/008_sub_mode_cup/index.js') },
'assets/008_ui1/index.js' () { return require('assets/008_ui1/index.js') },
'assets/008_ui2/index.js' () { return require('assets/008_ui2/index.js') },
'assets/music/index.js' () { return require('assets/music/index.js') },
'assets/main/index.js' () { return require('assets/main/index.js') },
// tail
};

window.__cocos_require__ = function (moduleName) {
    let func = moduleMap[moduleName];
    if (!func) {
        throw new Error(`cannot find module ${moduleName}`);
    }
    return func();
};