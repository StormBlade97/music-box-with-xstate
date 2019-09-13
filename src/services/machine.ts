import { Machine, interpret } from "xstate";

const musicPlayer = Machine({
  id: "player",
  initial: "stopped",
  states: {
    playing: {
      on: {
        PAUSE: "paused",
        STOP: "stopped"
      }
    },
    paused: {
      on: {
        PLAY: "playing",
        STOP: "stopped"
      }
    },
    stopped: {
      on: {
        PLAY: "playing"
      }
    }
  }
});

const musicPlayingService = interpret(musicPlayer);

export { musicPlayer, musicPlayingService };
