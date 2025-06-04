import { _decorator, Component, Node, Skeleton, sp } from "cc";
const { ccclass, property } = _decorator;

@ccclass("spine_controller")
export class spine_controller extends Component {
    @property(sp.Skeleton)
    animation: sp.Skeleton = null;

    @property(sp.Skeleton)
    roulette: sp.Skeleton = null;

    onLoad() {
        const spine = this.node.getComponent(sp.Skeleton);
        // if (spine) {
        //     this.animation = spine;

        // }

        console.log(this.animation);
    }

    // protected start(): void {
    //     console.log(this.animation);
    // }

    runAnimation() {
        // console.log("runAnimation" + (new Date().getTime()));
        // //this.animation.clearAnimation(1)
        // //this.animation.clearTrack(1)
        // this.animation.clearAnimation()
        // const trackEntry = this.animation.setAnimation(1, "highlight", false);
        // this.animation.setTrackCompleteListener(trackEntry, () => {
        //     console.log("Animation complete setTrackCompleteListener");
        // });
        // this.animation.setTrackStartListener(trackEntry, () => {
        //     console.log("Animation start setTrackCompleteListener");
        // });
        // trackEntry.listener = {
        //     complete: () => {
        //         console.log("Animation complete");
        //     },
        //     event: (track, event) => {
        //         console.log("Animation event", event);
        //     },
        //     interrupt: (trackEntry) => {
        //         console.log("Animation interrupt", trackEntry);
        //     },
        //     start: () => {
        //         console.log("Animation start");
        //     },
        //     end: () => {
        //         console.log("Animation end");
        //     },
        //     dispose: () => {
        //         console.log("Animation dispose");
        //     }
        // }
    }

    wheelTrack = 0;
    ballTrack = 1;

    isBallLoopComplete = false;

    BALL_LOOP_ANIMATION = "Ball Loop";
    BALL_POST_COLLISION_TRANSITION_ANIMATION = "Ball Post Collision Transition 1";
    BALL_HIT_OUT_ANIMATION = "Ball Hit Out 1";
    completeCallback = {};

    runRouletteAnimation() {
        // // this.roulette.setEndListener(this.ballTrack, () => {
        // //     console.log("Ball Loop end");
        // // });
        // this.roulette.clearTrack(this.ballTrack);
        // this.roulette.clearAnimation(this.ballTrack);
        // this.roulette.setAnimation(this.ballTrack, "Ball Loop", true);
        // setTimeout(() => {
        //     this.isBallLoopComplete = true;
        // }, 2000);
        // this.completeCallback[this.BALL_LOOP_ANIMATION] = () => {
        //     if (this.isBallLoopComplete) {
        //         this.roulette.addAnimation(this.ballTrack, this.BALL_HIT_OUT_ANIMATION, false);
        //     }
        // };
        // this.completeCallback[this.BALL_POST_COLLISION_TRANSITION_ANIMATION] = () => {
        //     this.roulette.setAnimation(this.ballTrack, this.BALL_LOOP_ANIMATION, true);
        // };
        // this.completeCallback[this.BALL_HIT_OUT_ANIMATION] = () => {
        //     this.roulette.setAnimation(this.ballTrack, this.BALL_POST_COLLISION_TRANSITION_ANIMATION, false);
        // };
        // this.roulette.setCompleteListener((trackEntry) => {
        //     console.log("Animation Complete", trackEntry.animation.name);
        //     if (this.completeCallback[trackEntry.animation.name]) {
        //         this.completeCallback[trackEntry.animation.name]();
        //     }
        // })
        //this.roulette.animation.
        //this.roulette.clearAnimation()
        // this.roulette.setTrackCompleteListener(trackEntry, () => {
        //     console.log("Ball Loop complete", trackEntry);
        //     if (this.isBallLoopComplete) {
        //         //console.log(this.roulette.setAnimationCacheMode);
        //         // trackEntry.reset();
        //         //this.roulette.
        //         //this.roulette.updateAnimation(0);
        //         //trackEntry.reset();
        //         // const timeScale = this.roulette.timeScale;
        //         // this.roulette.clearAnimation();
        //         // this.roulette.timeScale = 0;
        //         //this.roulette.clearTrack(this.ballTrack);
        //         const trackEntry1 = this.roulette.addAnimation(this.ballTrack, "Ball Hit Out 1", false);
        //         // this.roulette.timeScale = timeScale;
        //         // setTimeout(() => {
        //         //     this.roulette.setAnimation(this.ballTrack, "Ball Post Collision Transition 1", false);
        //         // }, trackEntry1.animationEnd * 1000);
        //         this.roulette.setTrackCompleteListener(trackEntry1, () => {
        //             console.log("trackEntry1 Animation complete", trackEntry1);
        //             //this.roulette.updateAnimation(0);
        //             // this.roulette.clearTrack(this.ballTrack);
        //             //this.roulette.timeScale = 0;
        //             // const timeScale1 = this.roulette.timeScale;
        //             // this.roulette.timeScale = 0;
        //             const trackEntry2 = this.roulette.addAnimation(this.ballTrack, "Ball Post Collision Transition 1", false);
        //             //this.roulette.timeScale = timeScale1;
        //             this.roulette.setTrackCompleteListener(trackEntry2, () => {
        //                 console.log("Ball Post Collision Transition 1 complete", trackEntry2);
        //             });
        //             console.log("trackEntry2", trackEntry2);
        //             console.log("animation state", this.roulette.getState());
        //             //const currentTrack = this.roulette.getCurrent(this.ballTrack);
        //             //console.log("currentTrack", currentTrack);
        //             // this.roulette.setTrackCompleteListener(trackEntry2, () => {
        //             //     console.log("Ball Post Collision Transition 1 complete", trackEntry2);
        //             // });
        //         });
        //         // console.log(trackEntry1);
        //         // trackEntry1.listener = {
        //         //     complete: () => {
        //         //         console.log("trackEntry1 Animation complete");
        //         //         console.log("Ball Hit Out 1 complete");
        //         //         this.roulette.updateAnimation(0);
        //         //         // this.roulette.clearTrack(this.ballTrack);
        //         //         const trackEntry2 = this.roulette.addAnimation(this.ballTrack, "Ball Post Collision Transition 1", false);
        //         //         this.roulette.setTrackCompleteListener(trackEntry2, () => {
        //         //             console.log("Ball Post Collision Transition 1 complete");
        //         //         });
        //         //     },
        //         //     event: (track, event) => {
        //         //         console.log("trackEntry1 Animation event", event);
        //         //     },
        //         //     interrupt: (trackEntry) => {
        //         //         console.log("trackEntry1 Animation interrupt", trackEntry);
        //         //     },
        //         //     start: () => {
        //         //         console.log("trackEntry1 Animation start");
        //         //     },
        //         //     end: () => {
        //         //         console.log("trackEntry1 Animation end");
        //         //     },
        //         //     dispose: () => {
        //         //         console.log("trackEntry1 Animation dispose");
        //         //     }
        //         // }
        //     }
        // });
    }
}
