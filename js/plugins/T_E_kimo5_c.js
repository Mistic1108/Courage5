//=============================================================================
// T_E_kimo5_c.js
//=============================================================================
/*:
* @plugindesc 選択中のキャラNO
* @author T_E_P
*
* @help
* 選択中のキャラNO
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'SentakuNo') {

            var itchi_x, q1, q2;

            if (TouchInput._x >= 101 && TouchInput._x <= 253) {
                itchi_x=1;
            } else if (TouchInput._x >= 254 && TouchInput._x <= 406) {
                itchi_x=2;
            } else if (TouchInput._x >= 407 && TouchInput._x <= 559) {
                itchi_x=3;
            } else if (TouchInput._x >= 560 && TouchInput._x <= 712) {
                itchi_x=4;
            } else if (TouchInput._x >= 713 && TouchInput._x <= 865) {
                itchi_x=5;
            } else if (TouchInput._x >= 866 && TouchInput._x <= 1018) {
                itchi_x=6;
            }

            switch ($gameVariables.value(80)) {
            //----------------------------------
            case 1:
                $gameVariables.setValue(81,893);
                $gameVariables.setValue(82,925);
                $gameVariables.setValue(83,3);
                q1=590;
                c_no=1;
                $gameVariables.setValue(95,c_no);　//左からの並び順番号
                break;
            //----------------------------------
            case 2:
                if (itchi_x==3) {
                    $gameVariables.setValue(81,893);
                    $gameVariables.setValue(82,925);
                    $gameVariables.setValue(83,3);
                    q1=590;
                    c_no=1;
                } else if (itchi_x==4) {
                    $gameVariables.setValue(81,1046);
                    $gameVariables.setValue(82,1078);
                    $gameVariables.setValue(83,4);
                    q1=743;
                    c_no=2;
                }
                $gameVariables.setValue(95,c_no);
                break;
            //----------------------------------
            case 3:
                if (itchi_x==2) {
                    $gameVariables.setValue(81,730);
                    $gameVariables.setValue(82,762);
                    $gameVariables.setValue(83,2);
                    q1=427;
                    c_no=1;
                } else if (itchi_x==3) {
                    $gameVariables.setValue(81,893);
                    $gameVariables.setValue(82,925);
                    $gameVariables.setValue(83,3);
                    q1=590;
                    c_no=2;
                } else if (itchi_x==4) {
                    $gameVariables.setValue(81,1046);
                    $gameVariables.setValue(82,1078);
                    $gameVariables.setValue(83,4);
                    q1=743;
                    c_no=3;
                }
                $gameVariables.setValue(95,c_no);
                break;
            //----------------------------------
            case 4:
                if (itchi_x==2) {
                    $gameVariables.setValue(81,730);
                    $gameVariables.setValue(82,762);
                    $gameVariables.setValue(83,2);
                    q1=427;
                    c_no=1;
                } else if (itchi_x==3) {
                    $gameVariables.setValue(81,893);
                    $gameVariables.setValue(82,925);
                    $gameVariables.setValue(83,3);
                    q1=590;
                    c_no=2;
                } else if (itchi_x==4) {
                    $gameVariables.setValue(81,1046);
                    $gameVariables.setValue(82,1078);
                    $gameVariables.setValue(83,4);
                    q1=743;
                    c_no=3;
                } else if (itchi_x==5) {
                    $gameVariables.setValue(81,650);
                    $gameVariables.setValue(82,682);
                    $gameVariables.setValue(83,5);
                    q1=347;
                    c_no=4;
                }
                $gameVariables.setValue(95,c_no);
                break;
            //----------------------------------
            case 5:
                if (itchi_x==1) {
                    $gameVariables.setValue(81,587);
                    $gameVariables.setValue(82,619);
                    $gameVariables.setValue(83,1);
                    q1=284;
                    c_no=1;
                } else if (itchi_x==2) {
                    $gameVariables.setValue(81,730);
                    $gameVariables.setValue(82,762);
                    $gameVariables.setValue(83,2);
                    q1=427;
                    c_no=2;
                } else if (itchi_x==3) {
                    $gameVariables.setValue(81,893);
                    $gameVariables.setValue(82,925);
                    $gameVariables.setValue(83,3);
                    q1=590;
                    c_no=3;
                } else if (itchi_x==4) {
                    $gameVariables.setValue(81,1046);
                    $gameVariables.setValue(82,1078);
                    $gameVariables.setValue(83,4);
                    q1=743;
                    c_no=4;
                } else if (itchi_x==5) {
                    $gameVariables.setValue(81,650);
                    $gameVariables.setValue(82,682);
                    $gameVariables.setValue(83,5);
                    q1=347;
                    c_no=5;
                }
                $gameVariables.setValue(95,c_no);
                break;
            //----------------------------------
            case 6:
                if (itchi_x==1) {
                    $gameVariables.setValue(81,587);
                    $gameVariables.setValue(82,619);
                    $gameVariables.setValue(83,1);
                    q1=284;
                    c_no=1;
                } else if (itchi_x==2) {
                    $gameVariables.setValue(81,730);
                    $gameVariables.setValue(82,762);
                    $gameVariables.setValue(83,2);
                    q1=427;
                    c_no=2;
                } else if (itchi_x==3) {
                    $gameVariables.setValue(81,893);
                    $gameVariables.setValue(82,925);
                    $gameVariables.setValue(83,3);
                    q1=590;
                    c_no=3;
                } else if (itchi_x==4) {
                    $gameVariables.setValue(81,1046);
                    $gameVariables.setValue(82,1078);
                    $gameVariables.setValue(83,4);
                    q1=743;
                    c_no=4;
                } else if (itchi_x==5) {
                    $gameVariables.setValue(81,650);
                    $gameVariables.setValue(82,682);
                    $gameVariables.setValue(83,5);
                    q1=347;
                    c_no=5;
                } else if (itchi_x==6) {
                    $gameVariables.setValue(81,803);
                    $gameVariables.setValue(82,835);
                    $gameVariables.setValue(83,6);
                    q1=500;
                    c_no=6;
                }
                $gameVariables.setValue(95,c_no);
                break;

            //----------------------------------
            }
            q2=23;

            switch (eval($gameVariables.value(60+c_no))) {
            //----------------------------------
            case 1: //林つかさ
                $gameVariables.setValue(100,1);        //選択中のキャラNO
                break;
            //----------------------------------
            case 2: //山田美兎
                $gameVariables.setValue(100,2);
                break;
            //----------------------------------
            case 3: //鈴木赤音
                $gameVariables.setValue(100,3);
                break;
            //----------------------------------
            case 4: //佐藤莉伊南
                $gameVariables.setValue(100,4);
                break;
            //----------------------------------
            case 5: //佐々木万梨美
                $gameVariables.setValue(100,5);
                break;
            //----------------------------------
            case 6: //渡辺登樹子
                $gameVariables.setValue(100,6);
                break;
            //----------------------------------
            case 7: //桃乃夢
                $gameVariables.setValue(100,7);
                break;
            //----------------------------------
            case 8: //吉浦美雪
                $gameVariables.setValue(100,8);
                break;
            //----------------------------------
            case 9: //三ツ門まあな
                $gameVariables.setValue(100,9);
                break;
            //----------------------------------
            case 10: //モリー・ボイド
                $gameVariables.setValue(100,10);
                break;
            //----------------------------------
            case 11: //オルガ ブヤチッチ
                $gameVariables.setValue(100,11);
                break;
            //----------------------------------
            case 12: //アッチャラー・ギッティ
                $gameVariables.setValue(100,12);
                break;

            //----------------------------------
            //---キャラ追加

            //----------------------------------

            }
            //---プレイしたか？
            $gameSwitches.setValue(14,false);
            for(var i = 1; i <= 20; i++){
                if(i==$gameVariables.value(100)){
                    if($gameVariables.value(20+i)!=0){
                        $gameSwitches.setValue(14,true);
                    }
                }
            }

            //キャラ詳細


            if ($gameVariables.value(100)==12) {
            //アッチャラー ギッティ

                if (!$gameSwitches.value(162)) {
                //弟
                    if (!$gameSwitches.value(163)) {
                        $gameScreen.showPicture(41, x_name_b[$gameVariables.value(100)]+'_prof1', 0, q1, q2, 100, 100, 255, 0);
                    } else {
                        $gameScreen.showPicture(41, x_name_b[$gameVariables.value(100)]+'_prof3', 0, q1, q2, 100, 100, 255, 0);
                    }
                } else {
                //姉
                    $gameScreen.showPicture(41, x_name_b[$gameVariables.value(100)]+'_prof2', 0, q1, q2, 100, 100, 255, 0);
                }


            } else {
                $gameScreen.showPicture(41, x_name_b[$gameVariables.value(100)]+'_prof', 0, q1, q2, 100, 100, 255, 0);

            }

        }

    };

})();
