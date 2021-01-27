//=============================================================================
// T_E_kimo5_f.js
//=============================================================================

/*:
* @plugindesc 心拍数セット
* @author T_E_P
*
* @help
* 心拍数セット
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);


        if (command === 'Sinpaku') {

            var keta;
            var henban;

            if (args[0]=='sai') {
                henban=179
            } else if (args[0]=='han') {
                henban=178
            } else {
                henban=180
            }

            if (String($gameVariables.value(henban)).length==2) {
                keta=0;
                $gameVariables.setValue(84,10);

            } else {
                keta=1;
                if (String($gameVariables.value(henban)).substr(0,1)==1) {
                    $gameVariables.setValue(84,1);
                } else {
                    $gameVariables.setValue(84,2);
                }
            }
            switch (String($gameVariables.value(henban)).substr(keta,1)) {
                case '0':
                    $gameVariables.setValue(85,10);
                    break;
                case '1':
                    $gameVariables.setValue(85,1);
                    break;
                case '2':
                    $gameVariables.setValue(85,2);
                    break;
                case '3':
                    $gameVariables.setValue(85,3);
                    break;
                case '4':
                    $gameVariables.setValue(85,4);
                    break;
                case '5':
                    $gameVariables.setValue(85,5);
                    break;
                case '6':
                    $gameVariables.setValue(85,6);
                    break;
                case '7':
                    $gameVariables.setValue(85,7);
                    break;
                case '8':
                    $gameVariables.setValue(85,8);
                    break;
                case '9':
                    $gameVariables.setValue(85,9);
                    break;
                default:
                    $gameVariables.setValue(85,9);
                    break;
            }
            keta=keta+1;
            switch (String($gameVariables.value(henban)).substr(keta,1)) {
                case '0':
                    $gameVariables.setValue(86,10);
                    break;
                case '1':
                    $gameVariables.setValue(86,1);
                    break;
                case '2':
                    $gameVariables.setValue(86,2);
                    break;
                case '3':
                    $gameVariables.setValue(86,3);
                    break;
                case '4':
                    $gameVariables.setValue(86,4);
                    break;
                case '5':
                    $gameVariables.setValue(86,5);
                    break;
                case '6':
                    $gameVariables.setValue(86,6);
                    break;
                case '7':
                    $gameVariables.setValue(86,7);
                    break;
                case '8':
                    $gameVariables.setValue(86,8);
                    break;
                case '9':
                    $gameVariables.setValue(86,9);
                    break;
                default:
                    $gameVariables.setValue(86,9);
                    break;
            }

            //-------------------------------------------
        }

    };

})();
