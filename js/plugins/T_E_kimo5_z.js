//=============================================================================
// T_E_kimo5_z.js
//=============================================================================
/*:
* @plugindesc 非表示項目
* @author T_E_P
*
* @help
* 非表示項目
* 
* 
*/

 (function() {

//-----------------------------------------------------------------------------
// Window_MenuStatus

//変更　メニュー位置
Window_MenuCommand.prototype.initialize = function(x, y) {
    //Window_Command.prototype.initialize.call(this, x, y);
    Window_Command.prototype.initialize.call(this, 310, 210);
    this.selectLast();
};

//変更
Window_MenuCommand.prototype.windowWidth = function() {
    //return 240;
    return 180;
};

//変更追加
Window_MenuCommand.prototype.windowHeight = function() {
    return 210;
};

//変更　非表示
Window_MenuCommand.prototype.addMainCommands = function() {
    var enabled = this.areMainCommandsEnabled();
    //if (this.needsCommand('item')) {
    //    this.addCommand(TextManager.item, 'item', enabled);
    //}
    //if (this.needsCommand('skill')) {
    //    this.addCommand(TextManager.skill, 'skill', enabled);
    //}
    //if (this.needsCommand('equip')) {
    //    this.addCommand(TextManager.equip, 'equip', enabled);
    //}
    //if (this.needsCommand('status')) {
    //    this.addCommand(TextManager.status, 'status', enabled);
    //}
};

Window_MenuCommand.prototype.addFormationCommand = function() {
    //if (this.needsCommand('formation')) {
    //    var enabled = this.isFormationEnabled();
    //    this.addCommand(TextManager.formation, 'formation', enabled);
    //}
};

Window_Options.prototype.addGeneralOptions = function() {
    //this.addCommand(TextManager.alwaysDash, 'alwaysDash');
    //this.addCommand(TextManager.commandRemember, 'commandRemember');
};

Window_Gold.prototype.windowHeight = function() {
    //return this.fittingHeight(1);
};

Window_MenuStatus.prototype.windowWidth = function() {
    //return Graphics.boxWidth - 240;
};

//変更　アイテム列数
Window_ItemList.prototype.maxCols = function() {
    return 4;
};

Window_SavefileList.prototype.drawContents = function(info, rect, valid) {
    var bottom = rect.y + rect.height;
    if (rect.width >= 420) {
        this.drawGameTitle(info, rect.x + 192, rect.y, rect.width - 192);
        if (valid) {
            //変更　非表示　this.drawPartyCharacters(info, rect.x + 220, bottom - 4);
        }
    }
    var lineHeight = this.lineHeight();
    var y2 = bottom - lineHeight;
    if (y2 >= lineHeight) {
        this.drawPlaytime(info, rect.x, y2, rect.width);
    }
};

Window_ItemCategory.prototype.makeCommandList = function() {
    this.addCommand(TextManager.item,    'item');
//    this.addCommand(TextManager.weapon,  'weapon');
//    this.addCommand(TextManager.armor,   'armor');
//    this.addCommand(TextManager.keyItem, 'keyItem');
};

Window_Message.prototype.updatePlacement = function() {
    this._positionType = $gameMessage.positionType();
    this.y = this._positionType * (Graphics.boxHeight - this.height) / 2;
    this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;

    //変更追加　メッセージウィンドウ幅を調整 立ち絵なで中スイッチオンの場合
    if ($gameSwitches.value(80)) {
        if(this._positionType === 2) this.y -= 40;
        this.x = 366;
    }
};


Window_Message.prototype.numVisibleRows = function() {
    //return $gameSystem.messageRows();

    //変更追加　メッセージウィンドウ行数を調整 立ち絵なで中スイッチオンの場合
    if ($gameSwitches.value(80)) {
        return 3;
    } else {
        return $gameSystem.messageRows();
    }

};

Window_Message.prototype.windowWidth = function() {
    //return $gameSystem.messageWidth();

    //変更追加　メッセージウィンドウ幅を調整 立ち絵なで中スイッチオンの場合
    if ($gameSwitches.value(80)) {
       return Graphics.boxWidth - 730;
    } else {
       return $gameSystem.messageWidth();
    }

};

DataManager.maxSavefiles = function() {
    return 30;
};

//-----------------------------------------------------------------------------
// DataManager
//
//セーブ名
DataManager.makeSavefileInfo = function() {
    var info = {};
    info.globalId   = this._globalId;
    info.title      = $gameVariables.value(168); //$dataSystem.gameTitle;
    info.characters = $gameParty.charactersForSavefile();
    info.faces      = $gameParty.facesForSavefile();
    info.playtime   = $gameSystem.playtimeText();
    info.timestamp  = Date.now();
    return info;
};


})();