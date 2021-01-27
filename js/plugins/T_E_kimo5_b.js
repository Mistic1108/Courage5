//=============================================================================
// T_E_kimo5_b.js
//=============================================================================
/*:
* @plugindesc 立ち絵並列処理
* @author T_E_P
*
* @help
* 立ち絵並列処理
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'TachieHeiretu') {


            switch (eval($gameVariables.value(60+$gameVariables.value(76)))) {
            //----------------------------------
            case 1: //林つかさ
                if ($gameVariables.value(100)!=1) {
                    $gameVariables.setValue(68,1);        //設定中のキャラNO
                    $gameVariables.setValue(75,x_name_b[1]); //キャラ名
                }
                break;
            //----------------------------------
            case 2: //山田美兎
                if ($gameVariables.value(100)!=2) {
                    $gameVariables.setValue(68,2);
                    $gameVariables.setValue(75,x_name_b[2]);
                }
                break;
            //----------------------------------
            case 3: //鈴木赤音
                if ($gameVariables.value(100)!=3) {
                    $gameVariables.setValue(68,3);
                    $gameVariables.setValue(75,x_name_b[3]);
                }
                break;
            //----------------------------------
            case 4: //佐藤莉伊南
                if ($gameVariables.value(100)!=4) {
                    $gameVariables.setValue(68,4);
                    $gameVariables.setValue(75,x_name_b[4]);
                }
                break;
            //----------------------------------
            case 5: //佐々木万梨美
                if ($gameVariables.value(100)!=5) {
                    $gameVariables.setValue(68,5);
                    $gameVariables.setValue(75,x_name_b[5]);
                }
                break;
            //----------------------------------
            case 6: //渡辺登樹子
                if ($gameVariables.value(100)!=6) {
                    $gameVariables.setValue(68,6);
                    $gameVariables.setValue(75,x_name_b[6]);
                }
                break;
            //----------------------------------
            case 7: //桃乃夢
                if ($gameVariables.value(100)!=7) {
                    $gameVariables.setValue(68,7);
                    $gameVariables.setValue(75,x_name_b[7]);
                }
                break;
            //----------------------------------
            case 8: //吉浦美雪
                if ($gameVariables.value(100)!=8) {
                    $gameVariables.setValue(68,8);
                    $gameVariables.setValue(75,x_name_b[8]);
                }
                break;
            //----------------------------------
            case 9: //三ツ門まあな
                if ($gameVariables.value(100)!=9) {
                    $gameVariables.setValue(68,9);
                    $gameVariables.setValue(75,x_name_b[9]);
                }
                break;
            //----------------------------------
            case 10: //モリー・ボイド
                if ($gameVariables.value(100)!=10) {
                    $gameVariables.setValue(68,10);
                    $gameVariables.setValue(75,x_name_b[10]);
                }
                break;
            //----------------------------------
            case 11: //オルガ・ブヤチッチ
                if ($gameVariables.value(100)!=11) {
                    $gameVariables.setValue(68,11);
                    $gameVariables.setValue(75,x_name_b[11]);
                }
                break;
            //----------------------------------
            case 12: //アッチャラー ギッティ
                if ($gameVariables.value(100)!=12) {
                    $gameVariables.setValue(68,12);
                    $gameVariables.setValue(75,x_name_b[12]);
                }
                break;

            //----------------------------------
            //---キャラ追加

            //----------------------------------

            }

            //---目パチキャラの位置
            if ($gameVariables.value(76)==1) {
                $gameVariables.setValue(76,$gameVariables.value(98)[0]);
            } else if ($gameVariables.value(76)==2) {
                $gameVariables.setValue(76,$gameVariables.value(98)[1]);
            } else if ($gameVariables.value(76)==3) {
                $gameVariables.setValue(76,$gameVariables.value(98)[2]);
            } else if ($gameVariables.value(76)==4) {
                $gameVariables.setValue(76,$gameVariables.value(98)[3]);
            } else if ($gameVariables.value(76)==5) {
                $gameVariables.setValue(76,$gameVariables.value(98)[4]);
            } else if ($gameVariables.value(76)==6) {
                $gameVariables.setValue(76,$gameVariables.value(98)[5]);
            }

            //----------------------------------
            //表情--並列後の目に戻す--
            if ($gameVariables.value(20+$gameVariables.value(68))==0) {
                //ノーマル
                $gameVariables.setValue(74,11);

            } else if($gameVariables.value(20+$gameVariables.value(68))==1) {
                //笑顔1
                $gameVariables.setValue(74,11);

            } else if($gameVariables.value(20+$gameVariables.value(68))==2) {
                //笑顔2
                if (Math.floor(Math.random() * 2)==1) {
                    $gameVariables.setValue(74,11);
                } else {
                    $gameVariables.setValue(74,15);
                }

            } else if($gameVariables.value(20+$gameVariables.value(68))==3) {
                //怒1
                $gameVariables.setValue(74,11);

            } else if($gameVariables.value(20+$gameVariables.value(68))==4) {
                //照れ1
                $gameVariables.setValue(74,12);

            } else if($gameVariables.value(20+$gameVariables.value(68))==5) {
                //照れ2
                $gameVariables.setValue(74,12);

            } else if($gameVariables.value(20+$gameVariables.value(68))==6) {
                //照れ3
                $gameVariables.setValue(74,14);

            } else if($gameVariables.value(20+$gameVariables.value(68))==7) {
                //怯え1
                $gameVariables.setValue(74,12);

            } else if($gameVariables.value(20+$gameVariables.value(68))==8) {
                //怯え2
                $gameVariables.setValue(74,14);

            } else if($gameVariables.value(20+$gameVariables.value(68))==9) {
                //苦悶1
                $gameVariables.setValue(74,13);

            } else if($gameVariables.value(20+$gameVariables.value(68))==10) {
                //苦悶2
                if (Math.floor(Math.random() * 2)==1) {
                    $gameVariables.setValue(74,13);
                } else {
                    $gameVariables.setValue(74,15);
                }

            } else if($gameVariables.value(20+$gameVariables.value(68))==11) {
                //苦悶3
                if (Math.floor(Math.random() * 2)==1) {
                    $gameVariables.setValue(74,13);
                } else {
                    $gameVariables.setValue(74,15);
                }

            } else if($gameVariables.value(20+$gameVariables.value(68))==12) {
                //失禁
                if (Math.floor(Math.random() * 2)==1) {
                    $gameVariables.setValue(74,13);
                } else {
                    $gameVariables.setValue(74,15);
                }

            } else if($gameVariables.value(20+$gameVariables.value(68))==13) {
                //失禁＆脱糞
                if (Math.floor(Math.random() * 2)==1) {
                    $gameVariables.setValue(74,13);
                } else {
                    $gameVariables.setValue(74,15);
                }

            }
            //----------------------------------

        }

    };

})();
