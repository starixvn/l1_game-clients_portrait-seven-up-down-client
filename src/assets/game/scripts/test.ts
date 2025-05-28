import { _decorator, Component, Node, sp } from "cc";
const { ccclass, property } = _decorator;

@ccclass("test")
export class test extends Component {
    @property(sp.Skeleton)
    animation: sp.Skeleton = null;

    start() {
        const trackEntry = this.animation.setAnimation(1, "highlight", false);

        console.log("--------setListener");
        const trackEntryListener: sp.spine.AnimationStateListener = {
            start: (entry: sp.spine.TrackEntry) => {
                console.log("--------start");
            },

            interrupt: (entry: sp.spine.TrackEntry) => {
                console.log("--------interrupt");
            },

            end: (entry: sp.spine.TrackEntry) => {
                console.log("--------end");
            },

            dispose: (entry: sp.spine.TrackEntry) => {
                console.log("--------dispose");
            },

            complete: (entry: sp.spine.TrackEntry) => {
                console.log("--------complete");
            },

            event: (entry: sp.spine.TrackEntry, event: sp.spine.Event) => {
                console.log("--------event");
            },
        };

        // Assign the listener to the TrackEntry
        trackEntry.listener = trackEntryListener;

        // this.animation.setTrackEventListener(trackEntry, (event) => {
        //     console.log("--------startBallAnimation event", event);
        //     if (event.type === "complete") {
        //         console.log("---------complete");
        //     }
        // });
    }
}
