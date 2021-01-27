//=============================================================================
// T_E_kimo5_d.js
//=============================================================================
/*:
* @plugindesc キャラ初期選択
* @author T_E_P
*
* @help
* キャラ初期選択
* 
* 
*/

        //var nin_total;
        var x_name;

        x_name=[' ', 
                '林つかさ', '山田美兎', '鈴木赤音', '佐藤莉伊南', '佐々木万梨美', '渡辺登樹子', '桃乃夢', '吉浦美雪', '三ツ門まあな', 'ﾓﾘｰ ﾎﾞｲﾄﾞ', 'ｵﾙｶﾞ ﾌﾞﾔﾁｯﾁ', 'ｱｯﾁｬﾗｰ ｷﾞｯﾃｨ'
               ];

        x_name_b=[' ', 
                'hayasi', 'yamada', 'suzuki', 'sato', 'sasaki', 'watanabe', 'momono', 'yosiura', 'mitukado', 'molly', 'olga', 'atchara'
               ];

        var c_no, sentaku_no;
        var c_no1, c_no2, c_no3, c_no4, c_no5, c_no6, c_no7, c_no8, c_no9, c_no10, c_no11, c_no12;


(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        var x_no, x_mask_x, x_mask_y;
        var x_no2, p_no1, p_no2;

        x_mask_x=[0, 100, 407, 714, 100, 407, 714];
        x_mask_y=[0, 181, 181, 181, 312, 312, 312];

        if (command === 'SentakuSet') {

            //DLC4
            if (args[0]==12) {
                if ($gameSwitches.value(163) && !$gameSwitches.value(162)) {
                    x_name[12]='ｱﾅﾝ ｷﾞｯﾃｨ'

                } else {
                    x_name[12]='ｱｯﾁｬﾗｰ ｷﾞｯﾃｨ'
                    
                }
                $gameVariables.setValue(97,0);
                for(var i = 1; i <= 6; i++){
                    for(var x = 1; x <= 12; x++){
                        if ($gameVariables.value(60+i)==x) {
                            if ($gameVariables.value(97)==0) {
                                $gameVariables.setValue(97,x_name[x] + ' ');
                            } else {
                                $gameVariables.setValue(97,$gameVariables.value(97) + x_name[x] + ' ');
                            }
                        }
                    }
                }

            }
            //DLC4

            for ( x_no=1 ; x_no<=6 ; x_no++) {
                if ($gameVariables.value(60+x_no)==args[0]) {
                    return;  //同じキャラは選択しない
                }
            }

            if ($gameVariables.value(80)==0) {
                $gameVariables.setValue(97,x_name[args[0]] + ' ');
            } else {
                $gameVariables.setValue(97,$gameVariables.value(97) + x_name[args[0]] + ' ');
            }

            $gameVariables.setValue(80,$gameVariables.value(80)+1);　//参加人数加算
            $gameVariables.setValue(172,$gameVariables.value(80));　 //参加人数加算
            $gameScreen.movePicture(args[2],0,x_mask_x[args[1]],x_mask_y[args[1]],100,100,255,0,1);　//参加済みマスク

            for ( x_no=1 ; x_no<=6 ; x_no++) {
                if ($gameVariables.value(80)==x_no) {
                    $gameVariables.setValue(60+x_no,args[0]);　//参加キャラNO格納
                }
            }
        }

        if (command === 'SentakuSet_p') {

            for ( x_no=1 ; x_no<=6 ; x_no++) {
                $gameScreen.movePicture(x_no+8,0,x_mask_x[x_no],x_mask_y[x_no],100,100,0,0,1);　//参加済みマスク消し

            }

            //60番台変数
            for ( x_no=1 ; x_no<=6 ; x_no++) {

            　　//1ページ目
            　　if ($gameVariables.value(81)==1) {
                    for ( x_no2=1 ; x_no2<=6 ; x_no2++) {

                        if ($gameVariables.value(60+x_no)==x_no2) {
                            $gameScreen.movePicture(eval(x_no2+8),0,x_mask_x[x_no2],x_mask_y[x_no2],100,100,255,0,1);　//参加済みマスク表示
            　　        }

            　　    }
            　　//2ページ目
            　　} else if ($gameVariables.value(81)==2) {

                    for ( x_no2=7 ; x_no2<=12 ; x_no2++) {

                        if ($gameVariables.value(60+x_no)==x_no2) {
                            $gameScreen.movePicture(eval((x_no2-6)+8),0,x_mask_x[x_no2-6],x_mask_y[x_no2-6],100,100,255,0,1);　//参加済みマスク表示
            　　        }
                        
            　　    }
            　　//3ページ目
            　　} else if ($gameVariables.value(81)==3) {
                    for ( x_no2=13 ; x_no2<=18 ; x_no2++) {

                        if ($gameVariables.value(60+x_no)==x_no2) {
                            $gameScreen.movePicture(eval((x_no2-12)+8),0,x_mask_x[x_no2-12],x_mask_y[x_no2-12],100,100,255,0,1);　//参加済みマスク表示
            　　        }
            　　    }
            　　}
            }
        }
    };

})();
