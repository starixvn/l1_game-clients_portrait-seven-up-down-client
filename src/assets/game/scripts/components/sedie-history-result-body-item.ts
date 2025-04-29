import gc from "@sg/game-client-base";
import { _decorator, Color, Label, Sprite, SpriteFrame } from "cc";
import { BaseResultBodyItem } from "db://shared-components/game/bet-history/scripts/components/bet-history-body-item";

const { ccclass, property } = _decorator;

@ccclass()
export class SeDieHistoryResultBodyItem extends BaseResultBodyItem {
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
       const total = result.dice1 + result.dice2;
       const text = total > 10 ? `Trên` : `-${total}`;
       this.total.string = `${total} -`;
   }
}
