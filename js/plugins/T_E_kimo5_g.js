//=============================================================================
// T_E_kimo5_g.js
//=============================================================================

/*:
* @plugindesc 立ち絵表示処理
* @author T_E_P
*
* @help
* 立ち絵表示処理
* 
* 
*/
// 判定,利尿時使用

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'Jyotai') {

            var style, removed;

            //args[0]＝キャラ状態
            //args[1]＝並び順
            //args[2]＝薬なし　失禁or脱糞

            //表情　キャラ状態で表情を判断、配列に
            if (args[0]==0) {
                //ノーマル
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 11);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 11);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+args[1],style);

            } else if(args[0]==1) {
                //笑顔1
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 11);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 14);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==2) {
                //笑顔2
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 15);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 15);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if (args[0]==3) {
                //怒1
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 11);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==4) {
                //照れ1
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 12);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==5) {
                //照れ2　(未失神　失禁)
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 12);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==6) {
                //照れ3　(未失神　失禁、脱糞)
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 14);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 13);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==7) {
                //怯え1
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 12);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==8) {
                //怯え2 上半身濡れ
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 14);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 13);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==9) {
                //苦悶1
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 13);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 13);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==10) {
                //苦悶2
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 13);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==11) {
                //苦悶3
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 13);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 13);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==12) {
                //失禁
                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 13);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 12);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            } else if(args[0]==13) {
                //失禁＆脱糞

                style = $gameVariables.value(150+eval(args[1]));
                removed = style.splice(9, 1, 13);　 //目
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(10, 1, 13);　//口
                $gameVariables.setValue(150+args[1],style);
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+eval(args[1]),style);

            }

//----------------------------------------------------

                //オムツ初期から着用か？
            if ($gameVariables.value(160+eval(args[1]))[0]==0) {
                //パンティ

                //薬を飲んだか？
                if ($gameVariables.value(160+eval(args[1]))[2]==0) {

                    if ($gameVariables.value(160+eval(args[1]))[7]==1) {
                    //失禁
                        if($gameVariables.value(100)==5){
                        //佐々木の場合
                            removed = style.splice(0, 1, 12);　          //ﾊﾟｰｶｰ
                            $gameVariables.setValue(150+eval(args[1]),style);
                        }
                        removed = style.splice(8, 1, 14);　              //身体
                        removed = style.splice(1, 1, 12);　              //ｽｶｰﾄ
                        removed = style.splice(4, 1, 12);　              //靴下(ﾊﾟﾝﾃｨの場合)

                        if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                        //アッチャラーの場合
                            removed = style.splice(6, 1, 112);　          //ﾊﾟﾝﾃｨ
                        } else {
                            removed = style.splice(6, 1, 12);　           //ﾊﾟﾝﾃｨ
                        }

                        removed = style.splice(7, 1, 12);　              //服全
                    } else {
                        removed = style.splice(8, 1, 11);　              //身体
                        removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                        removed = style.splice(4, 1, 11);　              //靴下(ﾊﾟﾝﾃｨの場合)

                        if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                        //アッチャラーの場合
                            removed = style.splice(6, 1, 111);　          //ﾊﾟﾝﾃｨ
                        } else {
                            removed = style.splice(6, 1, 11);　           //ﾊﾟﾝﾃｨ
                        }

                        removed = style.splice(7, 1, 11);　              //服全
                    }
/*:
*/

                } else if ($gameVariables.value(160+eval(args[1]))[2]==10 && $gameVariables.value(160+eval(args[1]))[7]==0) {
                //利尿---途中放尿した場合は汚れない

                } else if ($gameVariables.value(160+eval(args[1]))[2]==10 && $gameVariables.value(160+eval(args[1]))[7]==1) {
                //利尿---途中放尿なし　失禁

                    if($gameVariables.value(100)==5){
                    //佐々木の場合
                        removed = style.splice(0, 1, 12);　          //ﾊﾟｰｶｰ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    }
                    removed = style.splice(8, 1, 14);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 12);　              //靴下(ﾊﾟﾝﾃｨの場合)
                    $gameVariables.setValue(150+eval(args[1]),style);

                    if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                    //アッチャラーの場合
                        removed = style.splice(1, 1, 112);　         //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 112);　         //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    } else {
                        removed = style.splice(1, 1, 12);　          //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 12);　          //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    }

                    removed = style.splice(7, 1, 12);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);

                } else if ($gameVariables.value(160+eval(args[1]))[2]==20 && $gameVariables.value(160+eval(args[1]))[8]==0) {
                //下剤---途中排便した場合は汚れない

                } else if ($gameVariables.value(160+eval(args[1]))[2]==20 && $gameVariables.value(160+eval(args[1]))[8]==1) {
                //下剤---途中排便なし　脱糞
                    removed = style.splice(8, 1, 16);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 11);　              //靴下(ﾊﾟﾝﾃｨの場合)
                    $gameVariables.setValue(150+eval(args[1]),style);

                    if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                    //アッチャラーの場合
                        removed = style.splice(1, 1, 113);　         //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 113);　         //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    } else {
                        removed = style.splice(1, 1, 13);　          //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 13);　          //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    }

                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(7, 1, 13);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);

                } else if ($gameVariables.value(160+eval(args[1]))[2]==30 && $gameVariables.value(160+eval(args[1]))[8]==0) {
                //複合---途中排便した場合は汚れない

                } else if ($gameVariables.value(160+eval(args[1]))[2]==30 && $gameVariables.value(160+eval(args[1]))[8]==1) {
                //複合---途中排便なし　脱糞
                    if($gameVariables.value(100)==5){
                    //佐々木の場合
                        removed = style.splice(0, 1, 12);　          //ﾊﾟｰｶｰ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    }
                    removed = style.splice(8, 1, 15);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 12);　              //靴下(ﾊﾟﾝﾃｨの場合)
                    $gameVariables.setValue(150+eval(args[1]),style);

                    if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                    //アッチャラーの場合
                        removed = style.splice(1, 1, 114);　         //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 113);　         //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    } else {
                        removed = style.splice(1, 1, 14);　          //ｽｶｰﾄ
                        $gameVariables.setValue(150+eval(args[1]),style);
                        removed = style.splice(6, 1, 13);　          //ﾊﾟﾝﾃｨ
                        $gameVariables.setValue(150+eval(args[1]),style);
                    }

                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(7, 1, 14);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);

                }

            //--------------------
            } else {
                //オムツ

                //薬を飲んだか？
                if ($gameVariables.value(160+eval(args[1]))[2]==0) {
                    if ($gameVariables.value(160+eval(args[1]))[7]==1) {
                    //失禁
                        removed = style.splice(8, 1, 13);　              //身体
                        removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                        removed = style.splice(4, 1, 11);　              //靴下(ﾊﾟﾝﾃｨの場合)
                        removed = style.splice(6, 1, 15);　              //ﾊﾟﾝﾃｨ
                        removed = style.splice(7, 1, 11);　              //服全
                    } else {
                        removed = style.splice(8, 1, 11);　              //身体
                        removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                        removed = style.splice(4, 1, 11);　              //靴下(ﾊﾟﾝﾃｨの場合)
                        removed = style.splice(6, 1, 14);　              //ﾊﾟﾝﾃｨ
                        removed = style.splice(7, 1, 11);　              //服全
                    }
/*:
*/
                } else if ($gameVariables.value(160+eval(args[1]))[2]==10) {
                //利尿
                    removed = style.splice(8, 1, 13);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 11);　              //靴下
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(6, 1, 15);　              //ｵﾑﾂ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(7, 1, 11);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);

                } else if ($gameVariables.value(160+eval(args[1]))[2]==20) {
                //下剤
                    removed = style.splice(8, 1, 16);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 11);　              //靴下
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(6, 1, 15);　              //ｵﾑﾂ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(7, 1, 11);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);

                } else if ($gameVariables.value(160+eval(args[1]))[2]==30) {
                //複合
                    removed = style.splice(8, 1, 16);　              //身体
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(1, 1, 11);　              //ｽｶｰﾄ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(4, 1, 11);　              //靴下
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(6, 1, 16);　              //ｵﾑﾂ
                    $gameVariables.setValue(150+eval(args[1]),style);
                    removed = style.splice(7, 1, 11);　              //服全
                    $gameVariables.setValue(150+eval(args[1]),style);
                }
            }

            //--------------------



            //上が濡れているか？
            if ($gameVariables.value(160+eval(args[1]))[17]==1) {

                if($gameVariables.value(100)==5){
                //佐々木の場合
                    removed = style.splice(0, 1, 15);　              //ﾊﾟｰｶｰ
                } else if($gameVariables.value(100)==11 || $gameVariables.value(100)==12){
                //オルガ アッチャラーの場合
           //         removed = style.splice(0, 1, 11);　              //ﾊﾟｰｶｰ
           //     } else {
                    removed = style.splice(0, 1, 12);　              //ﾊﾟｰｶｰ
                }
                $gameVariables.setValue(150+eval(args[1]),style);

                removed = style.splice(2, 1, 12);　              //ｼｬﾂ
                $gameVariables.setValue(150+eval(args[1]),style);

                if($gameVariables.value(100)==12 && $gameSwitches.value(162)){
                //アッチャラーの場合
                    removed = style.splice(5, 1, 112);　         //ﾌﾞﾗ
                    $gameVariables.setValue(150+eval(args[1]),style);
                } else {
                    removed = style.splice(5, 1, 12);　          //ﾌﾞﾗ
                    $gameVariables.setValue(150+eval(args[1]),style);
                }

                if ($gameVariables.value(160+eval(args[1]))[2]==30) {
                    removed = style.splice(7, 1, 16);　          //服全
                    $gameVariables.setValue(150+eval(args[1]),style);
                } else {
                    removed = style.splice(7, 1, 15);　          //服全
                    $gameVariables.setValue(150+eval(args[1]),style);
                }
            }

        }

    };

})();
