//=============================================================================
// T_E_kimo5_g.js
//=============================================================================

/*:
* @plugindesc セーブファイル名称
* @author T_E_P
*
* @help
* セーブファイル名称処理
* 
* 
*/

(function() {

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;

    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if (command === 'save_name') {

            var x_name1, x_name2, x_name3;

        if (args[0]==0) {

            if ($gameVariables.value(80)==1) {
                x_name2="待機場所 " + $gameVariables.value(97);
            } else {
                x_name2="待機場所";
            }
            x_name3="現在地：";

        } else if (args[0]==1) {
            x_name2="第一ポイント　アイテム選択中";
            x_name3="プレイ中：";
        } else if (args[0]==2) {
            x_name2="第二ポイント　アイテム選択中";
            x_name3="プレイ中：";
        } else if (args[0]==3) {
            x_name2="最終ポイント　アイテム選択中";
            x_name3="プレイ中：";
        } else if (args[0]==4) {
            x_name2="H選択中　-----";
            x_name3="失神中：";
        } else if (args[0]==5) {
            x_name2="H選択中　1発目";
            x_name3="失神中：";
        } else if (args[0]==6) {
            x_name2="H選択中　2発目";
            x_name3="失神中：";
        } else if (args[0]==7) {
            x_name2="H選択中　-----";
            x_name3="覚醒中：";
        }

        if (args[0]!=0) {

            switch ($gameVariables.value(100)) {
            case 1:
                x_name1="林つかさ ";
                break;
            case 2:
                x_name1="山田美兎 ";
                break;
            case 3:
                x_name1="鈴木赤音 ";
                break;
            case 4:
                x_name1="佐藤莉伊南 ";
                break;
            case 5:
                x_name1="佐々木万梨美 ";
                break;
            case 6:
                x_name1="渡辺登樹子 ";
                break;
            case 7:
                x_name1="桃乃夢 ";
                break;
            case 8:
                x_name1="吉浦美雪 ";
                break;
            case 9:
                x_name1="三ツ門まあな ";
                break;
            case 10:
                x_name1="モリー ボイド ";
                break;
            case 11:
                x_name1="オルガ ブヤチッチ ";
                break;
            case 12:
                if (!$gameSwitches.value(162)) {
                    console.log('aaa');
                    x_name1="アナン ギッティ ";
                } else {
                    x_name1="アッチャラー ギッティ ";
                    console.log('bbb');
                }
                break;
            //----------------------------------
            //---キャラ追加

            //----------------------------------

            }

        } else {
            x_name1=""
        }

        //$gameVariables.setValue(168,x_name1+x_name2+" 残 "+$gameVariables.value(172)+" 名");
        //$gameVariables.setValue(168,x_name1+x_name2+" 参加者数 "+$gameVariables.value(80)+" 名 "+" 残 "+$gameVariables.value(172)+" 名");

        $gameVariables.setValue(168,x_name3+x_name1+x_name2+" 参加者数 "+$gameVariables.value(80)+" 名 "+" 残 "+$gameVariables.value(172)+" 名");

        if (args[0]==0) {

        } else if (args[0]>=1 && args[0]<=3) {

        } else if (args[0]>=4 && args[0]<=6) {

        } else {

        }

//プレイ中：林つかさ　第一ポイント　アイテム選択中　参加者数　0名　残　0名
//プレイ中：林つかさ　第二ポイント　アイテム選択中　参加者数　0名　残　0名
//プレイ中：林つかさ　最終ポイント　アイテム選択中　参加者数　0名　残　0名

//現在地：待機場所　参加者数　0名　残　0名

//失神中：林つかさ　H選択中　------　参加者数　0名　残　0名
//失神中：林つかさ　H選択中　２発目　参加者数　0名　残　0名

        }

    };

})();
