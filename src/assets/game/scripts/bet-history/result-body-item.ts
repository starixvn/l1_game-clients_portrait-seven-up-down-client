import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from "cc";
import { BaseResultBodyItem } from "db://shared-components/game/bet-history/scripts/components/bet-history-body-item";
import gc from "@sg/game-client-base";
import { BetChoice } from "../seven-up-down-choices";

const { ccclass, property } = _decorator;

@ccclass
export class ResultBodyItem extends BaseResultBodyItem {
    @property([Sprite])
    dices: Sprite[] = [];

    @property(Label)
    total: Label = null;

    @property([SpriteFrame])
    dicesSpriteFrames: SpriteFrame[] = [];

    setData(result: gc.BetHistory.DynamicObject<object>, settlementResult: gc.BetHistory.DynamicObject<boolean>) {
        this.showDiceResult(result, this.dicesSpriteFrames, settlementResult);
    }

    showDiceResult(result: any, dicesSpriteFrames: SpriteFrame[], settlementResult: any) {
        this.dices[0].spriteFrame = dicesSpriteFrames[result.dice1 - 1];
        this.dices[1].spriteFrame = dicesSpriteFrames[result.dice2 - 1];
        const winChoice = ["up", "down", "seven"].find((choice) => settlementResult[choice]);

        let lblBetChoice = "";

        if (winChoice.includes("seven")) {
            lblBetChoice = `${gc.Translator.gameTranslate(`glossary_${BetChoice.SEVEN}`)}`;
        } else {
            lblBetChoice = `${gc.Translator.gameTranslate(`glossary_${winChoice}`)}`;
        }
        
        this.total.string = `${result.dice1 + result.dice2} - ${lblBetChoice}`;
    }
}
