//=============================================================================
// T_E_kimo5_e.js
//=============================================================================
/*:
* @plugindesc 参加者チェック
* @author T_E_P
*
* @help
* 参加者チェック処理
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

// 並び順　　$gameVariables.value(99)
// 参加人数　$gameVariables.value(80)

        if (command === 'Sankasya_chk') {
            $gameSwitches.setValue(14,false);

            for (var i=0 ; i<=5 ; i++) {
                if ($gameVariables.value(99)[i]==args[0]) {
                    $gameSwitches.setValue(14,true);

                    if ($gameVariables.value(80)==1) {
                        $gameVariables.setValue(96,20);
                    } else if ($gameVariables.value(80)==2) {
                        switch (i) {
                        case 0:
                            $gameVariables.setValue(96,20);
                            break;
                        case 1:
                            $gameVariables.setValue(96,25);
                            break;
                        }
                    } else if ($gameVariables.value(80)==3) {
                        switch (i) {
                        case 0:
                            $gameVariables.setValue(96,15);
                            break;
                        case 1:
                            $gameVariables.setValue(96,20);
                            break;
                        case 2:
                            $gameVariables.setValue(96,25);
                            break;
                        }
                    } else if ($gameVariables.value(80)==4) {
                        switch (i) {
                        case 0:
                            $gameVariables.setValue(96,15);
                            break;
                        case 1:
                            $gameVariables.setValue(96,20);
                            break;
                        case 2:
                            $gameVariables.setValue(96,25);
                            break;
                        case 3:
                            $gameVariables.setValue(96,30);
                            break;
                        }
                    } else {
                        switch (i) {
                        case 0:
                            $gameVariables.setValue(96,10);
                            break;
                        case 1:
                            $gameVariables.setValue(96,15);
                            break;
                        case 2:
                            $gameVariables.setValue(96,20);
                            break;
                        case 3:
                            $gameVariables.setValue(96,25);
                            break;
                        case 4:
                            $gameVariables.setValue(96,30);
                            break;
                        case 5:
                            $gameVariables.setValue(96,35);
                            break;
                        }
                    }

                }

            }

            //DLC2
            //失神帰還者だったらOFF
            for(var i = 0; i <= 5; i++){
               if ($gameVariables.value(243)[i]==args[0]) {
                   $gameSwitches.setValue(14,false);
               }
            }
            //DLC2
        }
        //
        if (command === 'Center_chk') {
            var x1;
            var y1;
            var p1;

            if ($gameVariables.value(83)==1) {
                x1=1;
                y1=2;
                p1=10;
                $gameVariables.setValue(192,1);
            } else if ($gameVariables.value(83)==2) {
                x1=3;
                y1=4;
                p1=15;
                $gameVariables.setValue(192,2);
            } else if ($gameVariables.value(83)==3) {
                x1=5;
                y1=6;
                p1=20;
                $gameVariables.setValue(192,3);
            } else if ($gameVariables.value(83)==4) {
                x1=7;
                y1=8;
                p1=25;
                $gameVariables.setValue(192,4);
            } else if ($gameVariables.value(83)==5) {
                x1=9;
                y1=10;
                p1=30;
                $gameVariables.setValue(192,5);
            } else if ($gameVariables.value(83)==6) {
                x1=11;
                y1=12;
                p1=35;
                $gameVariables.setValue(192,6);
            }
/*:
            if ($gameVariables.value(100)==1) {
                $gameVariables.setValue(x1,490);
                $gameVariables.setValue(y1,49);
            } else if ($gameVariables.value(100)==2) {
                $gameVariables.setValue(x1,486);
                $gameVariables.setValue(y1,20);
            } else if ($gameVariables.value(100)==3) {
                $gameVariables.setValue(x1,476);
                $gameVariables.setValue(y1,51);
            } else if ($gameVariables.value(100)==4) {
                $gameVariables.setValue(x1,478);
                $gameVariables.setValue(y1,62);
            } else if ($gameVariables.value(100)==5) {
                $gameVariables.setValue(x1,490);
                $gameVariables.setValue(y1,88);
            } else if ($gameVariables.value(100)==6) {
                $gameVariables.setValue(x1,483);
                $gameVariables.setValue(y1,60);
            } else if ($gameVariables.value(100)==7) {
                $gameVariables.setValue(x1,492);
                $gameVariables.setValue(y1,54);
            } else if ($gameVariables.value(100)==8) {
                //追加
            }
*/

            $gameScreen.movePicture(p1,0,$gameVariables.value(x1),$gameVariables.value(y1)+10,90,90,255,0,10);
            this.wait(10);
        }
    };

})();


