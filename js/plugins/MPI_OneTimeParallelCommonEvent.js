//===========================================================================
// MPI_OneTimeParallelCommonEvent.js
//===========================================================================

/*:
 * @plugindesc スイッチがONになったときに一度だけ実行される並列コモンイベントを設定します。
 * @author 奏ねこま（おとぶき ねこま）
 *
 * @param コモンイベントID
 * @desc スイッチがONになったときに一度だけ実行する並列コモンイベントのIDを指定してください。カンマ区切りで複数指定できます。
 * @default 
 *
 * @param イベント実行時にスイッチをOFFにする
 * @desc コモンイベント実行時に、条件となっているスイッチをOFFにする場合は true を、しない場合は false を指定してください。
 * @default false
 *
 * @help
 * [ 概要 ] ...
 *  スイッチがONになったときに一度だけ実行される並列コモンイベントを設定します。
 *
 *  通常、並列処理に設定したコモンイベントは、実行条件になっているスイッチがONの
 *  間、繰り返し実行されます。本プラグインで指定されたコモンイベントはこれを抑制
 *  し、一度だけ実行するようにします。再度実行したい場合は、スイッチを一度OFFに
 *  してからONにしなおす必要があります。
 *
 * [ プラグインパラメータ ] ...
 *  コモンイベントID
 *    スイッチがONになったときに一度だけ実行する並列コモンイベントのIDを指定しま
 *    す。IDは、カンマ区切りで複数指定することができます。指定するコモンイベント
 *    は、トリガーを「並列処理」に設定しておいてください。
 *
 *  イベント実行時にスイッチをOFFにする
 *    このパラメータを true に設定すると、コモンイベントを実行すると同時に、その
 *    コモンイベントの実行条件に指定されたスイッチを、自動的にOFFにします。
 *
 * [ その他の仕様 ] ...
 *  本プラグインで指定されたコモンイベントは、イベント実行中にスイッチをOFFにし
 *  ても、イベントを最後まで実行し続けます。ただし、イベント実行中にスイッチを
 *  OFF→ONとした場合、イベントは最初から実行しなおされることになります。
 *
 * [ プラグインコマンド ] ...
 *  プラグインコマンドはありません。
 *
 * [ 利用規約 ] ................................................................
 *  ・本プラグインの利用は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  ・商用、非商用、有償、無償、一般向け、成人向けを問わず、利用可能です。
 *  ・利用の際、連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *  ・プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *  ・不具合対応以外のサポートやリクエストは、基本的に受け付けておりません。
 *  ・本プラグインにより生じたいかなる問題についても、一切の責任を負いかねます。
 * [ 改訂履歴 ] ................................................................
 *   Version 1.00  2016/11/09  First edition.
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  Web Site: http://makonet.sakura.ne.jp/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 *  Copylight (c) 2016 Nekoma Otobuki
 */

var Imported = Imported || {};
Imported.MPI_OneTimeParallelCommonEvent = true;

var Makonet = Makonet || {};
Makonet.OPC = {};

(function(){
    'use strict';

    var OPC        = Makonet.OPC;
    OPC.product    = 'MPI_OneTimeParallelCommonEvent';
    OPC.parameters = PluginManager.parameters(OPC.product);
    OPC.commonId   = OPC.parameters['コモンイベントID'].trim().split(/ *, */).map(function(value){ return +value });
    OPC.autoOff    = OPC.parameters['イベント実行時にスイッチをOFFにする'] == 'true';

    function _(object) {
        return object[OPC.product] = object[OPC.product] || {};
    }

    //==============================================================================
    // Game_CommonEvent
    //==============================================================================

    (function(p, c) {
        var f = p[c]; p[c] = function(commonEventId) {
            _(this).isOneTime = OPC.commonId.contains(commonEventId);
            _(this)._active = [false, false];
            f.apply(this, arguments);
        };
    }(Game_CommonEvent.prototype, 'initialize'));
    
    (function(p, c) {
        var f = p[c]; p[c] = function() {
            f.apply(this, arguments);
            if (_(this).isOneTime) {
                if (!_(this)._active[0] && _(this)._active[1]) {
                    this._interpreter = new Game_Interpreter();
                    if (OPC.autoOff) {
                        $gameSwitches.setValue(this.event().switchId, false);
                    }
                }
            }
        };
    }(Game_CommonEvent.prototype, 'refresh'));
    
    (function(p, c) {
        var f = p[c]; p[c] = function() {
            var active = f.apply(this, arguments);
            if (_(this).isOneTime) {
                _(this)._active.push(active);
                _(this)._active.shift();
                return _(this).isRunning = _(this).isRunning || (!_(this)._active[0] && _(this)._active[1]);
            }
            return active;
        };
    }(Game_CommonEvent.prototype, 'isActive'));
    
    (function(p, c) {
        var f = p[c]; p[c] = function() {
            f.apply(this, arguments);
            if (_(this).isOneTime) {
                if (this._interpreter && !this._interpreter.isRunning()) {
                    this._interpreter = null;
                    _(this).isRunning = false;
                }
            }
        };
    }(Game_CommonEvent.prototype, 'update'));
}());
