//=============================================================================
// T_E_kimo5_i.js
//=============================================================================
/*:
* @plugindesc 回想達成度
* @author T_E_P
*
* @help
* 回想達成度
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        var x_all=0;
        var x_no=0, x_count=0, x_1=0, x_2=0;

        if (command === 'tasseido') {

            if (args[0]=='all') {

                if ($gameSwitches.value(161)) {
                    x_2 = $gameVariables.value(252) + 1;　       //回想有効人数 ---------- + DLC4
                    x_all = 13 * ($gameVariables.value(252) + 1);　//回想のパターン数 * 人数　全
                    x_all = x_all - 1;　//シーン - 1
                } else {
                    x_2 = $gameVariables.value(252);　       //回想有効人数
                    x_all = 13 * $gameVariables.value(252);　//回想のパターン数 * 人数　全
                }
                x_1 = 1;

                //桃乃夢がいる場合、シーン+3  DLC1
                if ($gameSwitches.value(50)) {
                    x_all = x_all + 3;
                }

                //失神帰還使用可能の場合
                if ($gameSwitches.value(52)) {

                    //+ DLC4
                    if ($gameSwitches.value(161)) {
                        x_all = x_all + (5 * ($gameVariables.value(252)+1));

                    } else {
                        x_all = x_all + (5 * $gameVariables.value(252));

                    }

                }

            } else if (args[0]=='moto') {
                x_1 = 1;
                x_2 = 6;　       //人数6人固定　メガネ制限解除用
                x_all = 13 * 6;　//回想のパターン数 * 人数　全

            } else if (args[0]=='momono') {
                x_1 = $gameVariables.value(189);
                x_2 = $gameVariables.value(189);
                x_all = 13;　//回想のパターン数　単

                //桃乃夢の場合、シーン+3  DLC1
                x_all = x_all + 3;

                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    x_all = x_all + 5;
                }

            } else {
                x_1 = $gameVariables.value(189);
                x_2 = $gameVariables.value(189);
                x_all = 13;　//回想のパターン数　単

                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    x_all = x_all + 5;
                }

            }

                //console.log(' 人数:'+$gameVariables.value(252));
                //console.log('x_all-1:'+x_all);
                //console.log('x_1-1:'+x_1);
                //console.log('x_2-1:'+x_2);

        //-----------------------------------------------------
        //-----------------------------------------------------

        if ($gameVariables.value(189)==0) {
            //-----通常
            for ( x_count=1 ; x_count<=6 ; x_count++) {
                //愛撫、失神直後
                if ($gameVariables.value(260+x_count)==1) {
                    x_no = x_no + 2;
                }
                //パンティオナ
                if ($gameVariables.value(280+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(280+x_count)==1 || $gameVariables.value(280+x_count)==2) {
                    x_no = x_no + 1;
                }
                //フェラ
                if ($gameVariables.value(300+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(300+x_count)==1 || $gameVariables.value(300+x_count)==2) {
                    x_no = x_no + 1;
                }
                //セックス
                if ($gameVariables.value(320+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(320+x_count)==1 || $gameVariables.value(320+x_count)==2) {
                    x_no = x_no + 1;
                }
                //もよおし
                if ($gameVariables.value(340+x_count)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(340+x_count)==1 || $gameVariables.value(340+x_count)==2) {
                    x_no = x_no + 1;
                }
                //座薬
                if ($gameVariables.value(360+x_count)==1) {
                    x_no = x_no + 1;
                }
                //トイレ
                if ($gameVariables.value(380+x_count)==1) {
                    x_no = x_no + 1;
                }
                //妊娠
                if ($gameVariables.value(400+x_count)==1) {
                    x_no = x_no + 1;
                }
                //失神帰還使用可能の場合、シーン+5  DLC2
                if ($gameSwitches.value(52)) {
                    //失神帰還時
                    if ($gameVariables.value(420+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-キス
                    if ($gameVariables.value(440+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-レイプ
                    if ($gameVariables.value(460+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-座薬
                    if ($gameVariables.value(480+x_count)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-ぶっかけ
                    if ($gameVariables.value(520+x_count)==1) {
                        x_no = x_no + 1;
                    }
                }
            }
            //-----通常

            // DLC1 -----------------------------------------------------
            if ($gameSwitches.value(50)) {
                //愛撫、失神直後
                if ($gameVariables.value(267)==1) {
                    x_no = x_no + 2;
                }
                //パンティオナ
                if ($gameVariables.value(287)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(287)==1 || $gameVariables.value(287)==2) {
                    x_no = x_no + 1;
                }
                //フェラ
                if ($gameVariables.value(307)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(307)==1 || $gameVariables.value(307)==2) {
                    x_no = x_no + 1;
                }
                //セックス
                if ($gameVariables.value(327)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(327)==1 || $gameVariables.value(327)==2) {
                    x_no = x_no + 1;
                }
                //もよおし
                if ($gameVariables.value(347)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(347)==1 || $gameVariables.value(347)==2) {
                    x_no = x_no + 1;
                }
                //座薬
                if ($gameVariables.value(367)==1) {
                    x_no = x_no + 1;
                }
                //トイレ
                if ($gameVariables.value(387)==1) {
                    x_no = x_no + 1;
                }
                //妊娠
                if ($gameVariables.value(407)==1) {
                    x_no = x_no + 1;
                }
                // +DLC2
                if ($gameSwitches.value(52)) {
                    //失神帰還時
                    if ($gameVariables.value(427)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-キス
                    if ($gameVariables.value(447)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-レイプ
                    if ($gameVariables.value(467)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-座薬
                    if ($gameVariables.value(487)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-ぶっかけ
                    if ($gameVariables.value(527)==1) {
                        x_no = x_no + 1;
                    }
                }
            }
            // DLC1 -----------------------------------------------------
            // DLC3 -----------------------------------------------------
            if ($gameSwitches.value(94)) {
                //愛撫、失神直後
                if ($gameVariables.value(268)==1) {
                    x_no = x_no + 2;
                }
                if ($gameVariables.value(269)==1) {
                    x_no = x_no + 2;
                }
                //パンティオナ
                if ($gameVariables.value(288)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(288)==1 || $gameVariables.value(288)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(289)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(289)==1 || $gameVariables.value(289)==2) {
                    x_no = x_no + 1;
                }
                //フェラ
                if ($gameVariables.value(308)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(308)==1 || $gameVariables.value(308)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(309)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(309)==1 || $gameVariables.value(309)==2) {
                    x_no = x_no + 1;
                }
                //セックス
                if ($gameVariables.value(328)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(328)==1 || $gameVariables.value(328)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(329)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(329)==1 || $gameVariables.value(329)==2) {
                    x_no = x_no + 1;
                }
                //もよおし
                if ($gameVariables.value(348)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(348)==1 || $gameVariables.value(348)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(349)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(349)==1 || $gameVariables.value(349)==2) {
                    x_no = x_no + 1;
                }
                //座薬
                if ($gameVariables.value(368)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(369)==1) {
                    x_no = x_no + 1;
                }
                //トイレ
                if ($gameVariables.value(388)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(389)==1) {
                    x_no = x_no + 1;
                }
                //妊娠
                if ($gameVariables.value(408)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(409)==1) {
                    x_no = x_no + 1;
                }
                // +DLC2
                if ($gameSwitches.value(52)) {
                    //失神帰還時
                    if ($gameVariables.value(428)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(429)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-キス
                    if ($gameVariables.value(448)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(449)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-レイプ
                    if ($gameVariables.value(468)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(469)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-座薬
                    if ($gameVariables.value(488)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(489)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-ぶっかけ
                    if ($gameVariables.value(528)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(529)==1) {
                        x_no = x_no + 1;
                    }
                }
            }
            // DLC3 -----------------------------------------------------
            // DLC4 -----------------------------------------------------
            if ($gameSwitches.value(161)) {
                //愛撫、失神直後
                if ($gameVariables.value(270)==1) {
                    x_no = x_no + 2;
                }
                if ($gameVariables.value(271)==1) {
                    x_no = x_no + 2;
                }
                if ($gameVariables.value(272)==1) {
                    x_no = x_no + 2;
                }
                if ($gameVariables.value(273)==1) {
                    x_no = x_no + 2;
                }
                //パンティオナ
                if ($gameVariables.value(290)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(290)==1 || $gameVariables.value(290)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(291)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(291)==1 || $gameVariables.value(291)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(292)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(292)==1 || $gameVariables.value(292)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(293)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(293)==1 || $gameVariables.value(293)==2) {
                    x_no = x_no + 1;
                }
                //フェラ
                if ($gameVariables.value(310)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(310)==1 || $gameVariables.value(310)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(311)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(311)==1 || $gameVariables.value(311)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(312)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(312)==1 || $gameVariables.value(312)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(313)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(313)==1 || $gameVariables.value(313)==2) {
                    x_no = x_no + 1;
                }
                //セックス
                if ($gameVariables.value(330)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(330)==1 || $gameVariables.value(330)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(331)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(331)==1 || $gameVariables.value(331)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(332)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(332)==1 || $gameVariables.value(332)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(333)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(333)==1 || $gameVariables.value(333)==2) {
                    x_no = x_no + 1;
                }
                //もよおし
                if ($gameVariables.value(350)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(350)==1 || $gameVariables.value(350)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(351)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(351)==1 || $gameVariables.value(351)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(352)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(352)==1 || $gameVariables.value(352)==2) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(353)==3) {
                    x_no = x_no + 2;
                } else if ($gameVariables.value(353)==1 || $gameVariables.value(353)==2) {
                    x_no = x_no + 1;
                }
                //座薬
                if ($gameVariables.value(370)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(371)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(372)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(373)==1) {
                    x_no = x_no + 1;
                }
                //トイレ
                if ($gameVariables.value(390)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(391)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(392)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(393)==1) {
                    x_no = x_no + 1;
                }
                //妊娠
                if ($gameVariables.value(410)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(411)==1) {
                    x_no = x_no + 1;
                }
                if ($gameVariables.value(413)==1) {
                    x_no = x_no + 1;
                }

                // +DLC2
                if ($gameSwitches.value(52)) {
                    //失神帰還時
                    if ($gameVariables.value(430)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(431)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(432)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(433)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-キス
                    if ($gameVariables.value(450)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(451)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(452)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(453)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-レイプ
                    if ($gameVariables.value(470)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(471)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(472)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(473)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-座薬
                    if ($gameVariables.value(490)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(491)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(492)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(493)==1) {
                        x_no = x_no + 1;
                    }
                    //失神帰還-ぶっかけ
                    if ($gameVariables.value(530)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(531)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(532)==1) {
                        x_no = x_no + 1;
                    }
                    if ($gameVariables.value(533)==1) {
                        x_no = x_no + 1;
                    }
                }
            }
            // DLC4 -----------------------------------------------------


            //console.log('シーンクリア数1 x_no:'+x_no);


        } else {

            //愛撫、失神直後
            if ($gameVariables.value(260+$gameVariables.value(189))==1) {
                x_no = x_no + 2;
            }
            //パンティオナ
            if ($gameVariables.value(280+$gameVariables.value(189))==3) {
                x_no = x_no + 2;
            } else if ($gameVariables.value(280+$gameVariables.value(189))==1 || $gameVariables.value(280+$gameVariables.value(189))==2) {
                x_no = x_no + 1;
            }
            //フェラ
            if ($gameVariables.value(300+$gameVariables.value(189))==3) {
                x_no = x_no + 2;
            } else if ($gameVariables.value(300+$gameVariables.value(189))==1 || $gameVariables.value(300+$gameVariables.value(189))==2) {
                x_no = x_no + 1;
            }
            //セックス
            if ($gameVariables.value(320+$gameVariables.value(189))==3) {
                x_no = x_no + 2;
            } else if ($gameVariables.value(320+$gameVariables.value(189))==1 || $gameVariables.value(320+$gameVariables.value(189))==2) {
                x_no = x_no + 1;
            }
            //もよおし
            if ($gameVariables.value(340+$gameVariables.value(189))==3) {
                x_no = x_no + 2;
            } else if ($gameVariables.value(340+$gameVariables.value(189))==1 || $gameVariables.value(340+$gameVariables.value(189))==2) {
                x_no = x_no + 1;
            }
            //座薬
            if ($gameVariables.value(360+$gameVariables.value(189))==1) {
                x_no = x_no + 1;
            }
            //トイレ
            if ($gameVariables.value(380+$gameVariables.value(189))==1) {
                x_no = x_no + 1;
            }
            if ($gameVariables.value(189)!=12) {
                //妊娠
                if ($gameVariables.value(400+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
            }

            // +DLC2
            if ($gameSwitches.value(52)) {
                //失神帰還時
                if ($gameVariables.value(420+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
                //失神帰還-キス
                if ($gameVariables.value(440+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
                //失神帰還-レイプ
                if ($gameVariables.value(460+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
                //失神帰還-座薬
                if ($gameVariables.value(480+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
                //失神帰還-ぶっかけ
                if ($gameVariables.value(520+$gameVariables.value(189))==1) {
                    x_no = x_no + 1;
                }
            }

            //console.log('シーンクリア数2 x_no:'+x_no);

        }

        //-----------------------------------------------------
        //-----------------------------------------------------

            if (args[0]=='momono' || args[0]=='all') {
                //覚醒-愛撫
                if ($gameVariables.value(238)==1) {
                    x_no = x_no + 1;
                }
                //覚醒-フェラ
                if ($gameVariables.value(239)==1) {
                    x_no = x_no + 1;
                }
                //覚醒-セックス
                if ($gameVariables.value(240)==1) {
                    x_no = x_no + 1;
                }
            }

            // DLC4 -----------------------------------------------------
            if ($gameVariables.value(189)==12 && x_1==x_2) {
                x_all = x_all - 1;
            }

            $gameVariables.setValue(253,x_no/x_all*100);

            //console.log('x_all:'+x_all*100);
            //console.log('253:'+x_no/x_all*100);

        }
    };

})();
