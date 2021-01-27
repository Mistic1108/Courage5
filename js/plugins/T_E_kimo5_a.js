//=============================================================================
// T_E_kimo5_a.js
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


(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'Tachie') {

            var kijun_x, kijun_y, q1, q2, style, removed;

            //-------------------------------------------
            if ($gameVariables.value(80)==1) {
                q1=5; //1人
                q2=6;
                kijun_x=407;
                c_no=1;
                $gameVariables.setValue(76,3);
                $gameVariables.setValue(77,21);
                $gameVariables.setValue(141,3);
            //-------------------------------------------
            } else if ($gameVariables.value(80)==2) {
                if ($gameVariables.value(79)==2) {
                    q1=5; //2人
                    q2=6;
                    kijun_x=407;
                    c_no=1;
                    $gameVariables.setValue(76,3);
                    $gameVariables.setValue(77,21);
                    $gameVariables.setValue(141,3);
                } else {
                    q1=7; //1人
                    q2=8;
                    kijun_x=560;
                    c_no=2;
                    $gameVariables.setValue(76,4);
                    $gameVariables.setValue(77,26);
                    $gameVariables.setValue(142,4);
                }
            //-------------------------------------------
            } else if ($gameVariables.value(80)==3) {
                if ($gameVariables.value(79)==3) {
                    q1=3; //3人
                    q2=4;
                    kijun_x=254;
                    c_no=1;
                    $gameVariables.setValue(76,2);
                    $gameVariables.setValue(77,16);
                    $gameVariables.setValue(141,2);
                } else if ($gameVariables.value(79)==2) {
                    q1=5; //2人
                    q2=6;
                    kijun_x=407;
                    c_no=2;
                    $gameVariables.setValue(76,3);
                    $gameVariables.setValue(77,21);
                    $gameVariables.setValue(142,3);
                } else {
                    q1=7; //1人
                    q2=8;
                    kijun_x=560;
                    c_no=3;
                    $gameVariables.setValue(76,4);
                    $gameVariables.setValue(77,26);
                    $gameVariables.setValue(143,4);
                }
            //-------------------------------------------
            } else if ($gameVariables.value(80)==4) {
                if ($gameVariables.value(79)==4) {
                    q1=3; //4人
                    q2=4;
                    kijun_x=254;
                    c_no=1;
                    $gameVariables.setValue(76,2);
                    $gameVariables.setValue(77,16);
                    $gameVariables.setValue(141,2);
                } else if ($gameVariables.value(79)==3) {
                    q1=5; //3人
                    q2=6;
                    kijun_x=407;
                    c_no=2;
                    $gameVariables.setValue(76,3);
                    $gameVariables.setValue(77,21);
                    $gameVariables.setValue(142,3);
                } else if ($gameVariables.value(79)==2) {
                    q1=7; //2人
                    q2=8;
                    kijun_x=560;
                    c_no=3;
                    $gameVariables.setValue(76,4);
                    $gameVariables.setValue(77,26);
                    $gameVariables.setValue(143,4);
                } else {
                    q1=9; //1人
                    q2=10;
                    kijun_x=713;
                    c_no=4;
                    $gameVariables.setValue(76,5);
                    $gameVariables.setValue(77,31);
                    $gameVariables.setValue(144,5);
                }
            //-------------------------------------------
            } else if ($gameVariables.value(80)==5) {
                if ($gameVariables.value(79)==5) {
                    q1=1; //5人
                    q2=2;
                    kijun_x=101;
                    c_no=1;
                    $gameVariables.setValue(76,1);
                    $gameVariables.setValue(77,11);
                    $gameVariables.setValue(141,1);
                } else if ($gameVariables.value(79)==4) {
                    q1=3; //4人
                    q2=4;
                    kijun_x=254;
                    c_no=2;
                    $gameVariables.setValue(76,2);
                    $gameVariables.setValue(77,16);
                    $gameVariables.setValue(142,2);
                } else if ($gameVariables.value(79)==3) {
                    q1=5; //3人
                    q2=6;
                    kijun_x=407;
                    c_no=3;
                    $gameVariables.setValue(76,3);
                    $gameVariables.setValue(77,21);
                    $gameVariables.setValue(143,3);
                } else if ($gameVariables.value(79)==2) {
                    q1=7; //2人
                    q2=8;
                    kijun_x=560;
                    c_no=4;
                    $gameVariables.setValue(76,4);
                    $gameVariables.setValue(77,26);
                    $gameVariables.setValue(144,4);
                } else {
                    q1=9; //1人
                    q2=10;
                    kijun_x=713;
                    c_no=5;
                    $gameVariables.setValue(76,5);
                    $gameVariables.setValue(77,31);
                    $gameVariables.setValue(145,5);
                }
            //-------------------------------------------
            } else if ($gameVariables.value(80)==6) {
                if ($gameVariables.value(79)==6) {
                    q1=1; //6人
                    q2=2;
                    kijun_x=101;
                    c_no=1;
                    $gameVariables.setValue(76,1);
                    $gameVariables.setValue(77,11);
                    $gameVariables.setValue(141,1);
                } else if ($gameVariables.value(79)==5) {
                    q1=3; //5人
                    q2=4;
                    kijun_x=254;
                    c_no=2;
                    $gameVariables.setValue(76,2);
                    $gameVariables.setValue(77,16);
                    $gameVariables.setValue(142,2);
                } else if ($gameVariables.value(79)==4) {
                    q1=5; //4人
                    q2=6;
                    kijun_x=407;
                    c_no=3;
                    $gameVariables.setValue(76,3);
                    $gameVariables.setValue(77,21);
                    $gameVariables.setValue(143,3);
                } else if ($gameVariables.value(79)==3) {
                    q1=7; //3人
                    q2=8;
                    kijun_x=560;
                    c_no=4;
                    $gameVariables.setValue(76,4);
                    $gameVariables.setValue(77,26);
                    $gameVariables.setValue(144,4);
                } else if ($gameVariables.value(79)==2) {
                    q1=9; //2人
                    q2=10;
                    kijun_x=713;
                    c_no=5;
                    $gameVariables.setValue(76,5);
                    $gameVariables.setValue(77,31);
                    $gameVariables.setValue(145,5);
                } else {
                    q1=11; //1人
                    q2=12;
                    kijun_x=866;
                    c_no=6;
                    $gameVariables.setValue(76,6);
                    $gameVariables.setValue(77,36);
                    $gameVariables.setValue(146,6);
                }
            }
            //-------------------------------------------
            //-------------------------------------------

            switch (eval($gameVariables.value(60+$gameVariables.value(78)))) {
            //----------------------------------
            case 1: //林つかさ
                $gameVariables.setValue(68,1);        //設定中のキャラNO
                if ('front'==args[0]) {
                    kijun_x=kijun_x+18;               //前向き時のx位置
                    kijun_y=87;                       //前向き時のy位置
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+9;                //後向き時のx位置
                    kijun_y=85;                       //後向き時のy位置
                }
                $gameVariables.setValue(75,x_name_b[1]); //設定中のキャラ名
                                                      //ピクチャボタン
                $gameScreen.showPicture($gameVariables.value(77), 'hayasi_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);
                //$gameVariables.setValue(81,11);       //コモンNO取得

                break;
            //----------------------------------
            case 2: //山田美兎
                $gameVariables.setValue(68,2);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+15;
                    kijun_y=62;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+16;
                    kijun_y=65;
                }
                $gameVariables.setValue(75,x_name_b[2]);
                $gameScreen.showPicture($gameVariables.value(77), 'yamada_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 255, 0);

                break;
            //----------------------------------
            case 3: //鈴木赤音
                $gameVariables.setValue(68,3);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+7;
                    kijun_y=89;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+2;
                    kijun_y=88;
                }
                $gameVariables.setValue(75,x_name_b[3]);
                $gameScreen.showPicture($gameVariables.value(77), 'suzuki_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;
            //----------------------------------
            case 4: //佐藤莉伊南
                $gameVariables.setValue(68,4);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+6;
                    kijun_y=98;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+17;
                    kijun_y=100;
                }
                $gameVariables.setValue(75,x_name_b[4]);
                $gameScreen.showPicture($gameVariables.value(77), 'sato_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;
            //----------------------------------
            case 5: //佐々木万梨美
                $gameVariables.setValue(68,5);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+17;
                    kijun_y=120;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+28;
                    kijun_y=120;
                }
                $gameVariables.setValue(75,x_name_b[5]);
                $gameScreen.showPicture($gameVariables.value(77), 'sasaki_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;
            //----------------------------------
            case 6: //渡辺登樹子
                $gameVariables.setValue(68,6);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+11;
                    kijun_y=96;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+11;
                    kijun_y=94;
                }
                $gameVariables.setValue(75,x_name_b[6]);
                $gameScreen.showPicture($gameVariables.value(77), 'watanabe_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;
            //----------------------------------
            case 7: //桃乃夢
                $gameVariables.setValue(68,7);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+15;
                    kijun_y=92;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+13;
                    kijun_y=92;
                }
                $gameVariables.setValue(75,x_name_b[7]);
                $gameScreen.showPicture($gameVariables.value(77), 'momono_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;

            //----------------------------------
            case 8: //吉浦美雪
                $gameVariables.setValue(68,8);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+13;
                    kijun_y=76;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+12;
                    kijun_y=76;
                }
                $gameVariables.setValue(75,x_name_b[8]);
                $gameScreen.showPicture($gameVariables.value(77), 'yosiura_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;


            //----------------------------------
            case 9: //三ツ門まあな
                $gameVariables.setValue(68,9);
                if ('front'==args[0]) {
                    kijun_x=kijun_x-9;
                    kijun_y=76;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+11;
                    kijun_y=73;
                }
                $gameVariables.setValue(75,x_name_b[9]);
                $gameScreen.showPicture($gameVariables.value(77), 'mitukado_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;

            //----------------------------------
            case 10: //モリー・ボイド
                $gameVariables.setValue(68,10);
                if ('front'==args[0]) {
                    kijun_x=kijun_x-9;
                    kijun_y=54;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+13;
                    kijun_y=53;
                }
                $gameVariables.setValue(75,x_name_b[10]);
                $gameScreen.showPicture($gameVariables.value(77), 'molly_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;

            //----------------------------------
            case 11: //オルガ・ブヤチッチ
                $gameVariables.setValue(68,11);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+1;
                    kijun_y=66;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+14;
                    kijun_y=66;
                }
                $gameVariables.setValue(75,x_name_b[11]);
                $gameScreen.showPicture($gameVariables.value(77), 'olga_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;

            //----------------------------------
            case 12: //アッチャラー ギッティ
                $gameVariables.setValue(68,12);
                if ('front'==args[0]) {
                    kijun_x=kijun_x+16;
                    kijun_y=95;
                } else if('back'==args[0]) {
                    kijun_x=kijun_x+17;
                    kijun_y=94;
                }
                $gameVariables.setValue(75,x_name_b[12]);
                $gameScreen.showPicture($gameVariables.value(77), 'atchara_push', 0, kijun_x, kijun_y, $gameVariables.value(15), $gameVariables.value(16), 55, 0);

                break;

            //----------------------------------

            //---キャラ追加

            //----------------------------------

            }

            $gameVariables.setValue(q1,kijun_x); //変数番号, 基準x
            $gameVariables.setValue(q2,kijun_y); //変数番号, 基準y
            $gameVariables.setValue(78,$gameVariables.value(78)+1);

            //身体
            $gameVariables.setValue(69,$gameVariables.value(150+c_no)[8]);
            //セット服
            $gameVariables.setValue(70,$gameVariables.value(150+c_no)[7]);

            //表情　キャラ状態で表情を判断、配列に
            if ($gameVariables.value(20+$gameVariables.value(68))==0) {
                //ノーマル
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,11);
                $gameVariables.setValue(71,11);
                $gameVariables.setValue(72,11);
                $gameVariables.setValue(73,11);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 11);　 //目
                removed = style.splice(10, 1, 11);　//口
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==1) {
                //笑顔1
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,11);
                $gameVariables.setValue(71,11);
                $gameVariables.setValue(72,14);
                $gameVariables.setValue(73,11);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 11);　 //目
                removed = style.splice(10, 1, 14);　//口
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==2) {
                //笑顔2
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,11);
                $gameVariables.setValue(71,15);
                $gameVariables.setValue(72,15);
                $gameVariables.setValue(73,11);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 15);　 //目
                removed = style.splice(10, 1, 15);　//口
                removed = style.splice(11, 1, 11);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==3) {
                //怒1
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,11);
                $gameVariables.setValue(71,11);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,13);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 11);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==4) {
                //照れ1
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,12);
                $gameVariables.setValue(71,12);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 12);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==5) {
                //照れ2
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,12);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 12);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);

            } else if($gameVariables.value(20+$gameVariables.value(68))==6) {
                //照れ3
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,14);
                $gameVariables.setValue(72,13);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 14);　 //目
                removed = style.splice(10, 1, 13);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);

            } else if($gameVariables.value(20+$gameVariables.value(68))==7) {
                //怯え1
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,12);
                $gameVariables.setValue(71,12);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 12);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==8) {
                //怯え2
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,12);
                $gameVariables.setValue(71,14);
                $gameVariables.setValue(72,13);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 14);　 //目
                removed = style.splice(10, 1, 13);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);

            } else if($gameVariables.value(20+$gameVariables.value(68))==9) {
                //苦悶1
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,12);
                $gameVariables.setValue(71,13);
                $gameVariables.setValue(72,13);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 13);　 //目
                removed = style.splice(10, 1, 13);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);

            } else if($gameVariables.value(20+$gameVariables.value(68))==10) {
                //苦悶2
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,13);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 13);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==11) {
                //苦悶3
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,13);
                $gameVariables.setValue(72,13);
                $gameVariables.setValue(73,13);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 13);　 //目
                removed = style.splice(10, 1, 13);　//口
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+c_no,style);


            } else if($gameVariables.value(20+$gameVariables.value(68))==12) {
                //失禁
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,13);
                $gameVariables.setValue(72,12);
                $gameVariables.setValue(73,12);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 13);　 //目
                removed = style.splice(10, 1, 12);　//口
                removed = style.splice(11, 1, 12);　//眉
                $gameVariables.setValue(150+c_no,style);

            } else if($gameVariables.value(20+$gameVariables.value(68))==13) {
                //失禁＆脱糞
                //$gameVariables.setValue(70,11);

                //$gameVariables.setValue(69,13);
                $gameVariables.setValue(71,13);
                $gameVariables.setValue(72,13);
                $gameVariables.setValue(73,13);

                style = $gameVariables.value(150+c_no);
                removed = style.splice(9, 1, 13);　 //目
                removed = style.splice(10, 1, 13);　//口
                removed = style.splice(11, 1, 13);　//眉
                $gameVariables.setValue(150+c_no,style);


            }

        }

    };

})();
