import gc from "@sg/game-client-base";
import { FakeChipHandlers } from "db://shared-components/game/chip-flying-total-bets/scripts/handlers/fake-chip-handlers";
import { LogStore } from "db://shared-components/game/scripts/stores/log-store";
import { sharedContainer } from "../../scripts/shared-container";
import * as SevenUpDownGameConfigFeature from "./game-config";
import { settings } from "./game-settings";


export const containerOptions: gc.IContainerOptions = {
    globalContainer: sharedContainer,
    onContainerCreated: (container) => {
        container.bind(gc.GameConfigs.GameSetting).toConstantValue(settings);
        container.bind(LogStore).to(LogStore);
        container.bind(gc.Chips.ChipHandlers).to(FakeChipHandlers);
    },
    features: [SevenUpDownGameConfigFeature, gc.RoundBasePF, ...gc.defaultFeatures, gc.BetDetailsNew],
};
