import { _decorator, Color, Component, Label, Node } from 'cc';
import BetDetailLogItem, { GameRoundBetDetailsLog } from 'db://shared-components/game/bet-history/scripts/components/bet-detail/bet-detail-log-item';
import { BetDetailLogItemType } from 'db://shared-components/game/bet-history/scripts/components/bet-detail/bet-detail-log-item';
import gc from "@sg/game-client-base";
import { BetChoice } from '../../seven-up-down-choices';
import BetDetailDirectBodyItem from 'db://direct-shared-components/bet-history/scripts/bet-detail-direct-body-item';

const { Translator } = gc;
const { ccclass, property } = _decorator;

export interface Multiplier {
    choice: string;
    value: number;
}

@ccclass('bet_detail_body_item')
export class bet_detail_body_item extends BetDetailDirectBodyItem {
    @property(Label)
    lblMultiplier: Label = null;

    setData(data: BetDetailLogItemType) {
        super.setData(data);

        const { betDetailsLog, result, settlementResult, odds, freeBet } = data;
        const { multiplier } = result as gc.BetHistory.DynamicObject<Multiplier>;
        const { choice, amount } = betDetailsLog as GameRoundBetDetailsLog & gc.BetHistory.DynamicObject<object>;
       
        if (choice.includes("seven")) {
            this.lblChoice.string = Translator.gameTranslate(`glossary_${BetChoice.SEVEN}`);
        } else {
            this.lblChoice.string = Translator.gameTranslate(`glossary_${choice}`);
        }

        if (settlementResult[choice]) {
            const rawOdd = odds[choice];
            const effectiveOdds = freeBet ? rawOdd - 1 : rawOdd;
            const winningAmount = amount * effectiveOdds;

            if (multiplier) {
                this.lblMultiplier.string = `${multiplier.value}x`;
            } else {
                this.lblMultiplier.string = "-";
            }

            this.setHighlightMultiplierDetail(winningAmount > amount);
        }
    }

    setHighlightMultiplierDetail(highlight: boolean) {
        const color = highlight ? Color.YELLOW : Color.WHITE;
        this.lblMultiplier.color = color;
    }
}


