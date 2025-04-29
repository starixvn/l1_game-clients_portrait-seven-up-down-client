import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
import { BaseResultBodyItem } from "db://shared-components/game/bet-history/scripts/components/bet-history-body-item";
import gc from "@sg/game-client-base";

const { ccclass, property } = _decorator;

@ccclass('result_body_item')
export class result_body_item extends BaseResultBodyItem {
    @property([Sprite])
   dices: Sprite[] = [];

   @property(Label)
   total: Label = null;

   @property([SpriteFrame])
   dicesSpriteFrames: SpriteFrame[] = [];

   setData(result: gc.BetHistory.DynamicObject<object>, settlementResult: gc.BetHistory.DynamicObject<boolean>) {
       this.showDiceResult(result, this.dicesSpriteFrames);
   }

   showDiceResult(result: any, dicesSpriteFrames: SpriteFrame[]) {
    console.log("result", result);
       this.dices[0].spriteFrame = dicesSpriteFrames[result.dice1 - 1];
       this.dices[1].spriteFrame = dicesSpriteFrames[result.dice2 - 1];
       this.total.string = result.dice1 + result.dice2 + result.dice3;
   }
}


