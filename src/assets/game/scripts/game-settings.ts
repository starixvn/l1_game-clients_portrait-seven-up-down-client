import gc from "@sg/game-client-base";
import { LogStore } from "db://shared-components/game/scripts/stores/log-store";
import { sharedContainer } from "../../scripts/shared-container";
import * as SevenUpDownGameConfigFeature from "./game-config";
import { FakeChipHandlers } from "db://shared-components/game/chip-flying-total-bets/scripts/handlers/fake-chip-handlers";

export const settings = {
    id: 103,
    name: "SevenUpDown",
    namespaces: ["7Up7Down"],
    observerNamespace: "SevenUpDown",
    durations: {
        wholeRound: 33,
        lockingBet: 3,
        placingBet: 20,
        generatingResult: 9,
        startRound: 1,
    },
    numberOfRoundHistory: 100,
    isMiniGame: true,
};

export const containerOptions: gc.IContainerOptions = {
    globalContainer: sharedContainer,
    onContainerCreated: (container) => {
        container.bind(gc.GameConfigs.GameSetting).toConstantValue(settings);
        container.bind(LogStore).to(LogStore);
        container.bind(gc.Chips.ChipHandlers).to(FakeChipHandlers);
    },
    features: [SevenUpDownGameConfigFeature, gc.RoundBasePF, ...gc.defaultFeatures, gc.BetDetailsNew],
};
