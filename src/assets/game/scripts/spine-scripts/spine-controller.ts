import { _decorator, Component, Node, Skeleton, sp } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('spine_controller')
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
        console.log("runAnimation" + (new Date().getTime()));
        //this.animation.clearAnimation(1)
        //this.animation.clearTrack(1)
        this.animation.clearAnimation()
        const trackEntry = this.animation.setAnimation(1, "highlight", false);

        

        this.animation.setTrackCompleteListener(trackEntry, () => {
            console.log("Animation complete setTrackCompleteListener");
        });

        this.animation.setTrackStartListener(trackEntry, () => {
            console.log("Animation start setTrackCompleteListener");
        });
        
        

        trackEntry.listener = {
            complete: () => {
                console.log("Animation complete");

                
            },
            event: (track, event) => {
                console.log("Animation event", event);
            },
            interrupt: (trackEntry) => {
                console.log("Animation interrupt", trackEntry);
            },
            start: () => {
                console.log("Animation start");
            },
            end: () => {
                console.log("Animation end");
            },
            dispose: () => {
                console.log("Animation dispose");
            }
        }
    }

    wheelTrack = 0;
    ballTrack = 1;

    isBallLoopComplete = false;

    runRouletteAnimation() {
        const trackEntry = this.roulette.setAnimation(this.ballTrack, "Ball Loop", true);

        setTimeout(() => {
            this.isBallLoopComplete = true;
        }, 3000);

        this.roulette.setTrackCompleteListener(trackEntry, () => {
            console.log("Ball Loop complete");
           if(this.isBallLoopComplete) {
            this.roulette.clearTrack(this.ballTrack);
            const trackEntry1 = this.roulette.setAnimation(this.ballTrack, "Ball Hit Out 1", false);

            this.roulette.setTrackCompleteListener(trackEntry1, () => {
                console.log("Ball Hit Out 1 complete");
                this.roulette.clearTrack(this.ballTrack);
                this.roulette.setAnimation(this.ballTrack, "Ball Post Collision Transition 1", false);
            });
            trackEntry1.listener = {
                complete: () => {
                    console.log("trackEntry1 Animation complete");
    
                    
                },
                event: (track, event) => {
                    console.log("trackEntry1 Animation event", event);
                },
                interrupt: (trackEntry) => {
                    console.log("trackEntry1 Animation interrupt", trackEntry);
                },
                start: () => {
                    console.log("trackEntry1 Animation start");
                },
                end: () => {
                    console.log("trackEntry1 Animation end");
                },
                dispose: () => {
                    console.log("trackEntry1 Animation dispose");
                }
            }   

           }
        });
    }
}


