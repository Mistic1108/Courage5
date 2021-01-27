//=============================================================================
// T_E_kimo5_e.js
//=============================================================================
/*:
* @plugindesc 新規キャラチェック
* @author T_E_P
*
* @help
* 新規キャラチェック処理
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'Sin_Sanka_chk') {
            $gameSwitches.setValue(14,false);
            const fs = require('fs');
            const path = 'mes/Act'+args[0]+'_1.json';

            try {
                fs.statSync(path);
                $gameSwitches.setValue(14,true);
            } catch (error) {
            }
        }
    };
})();














