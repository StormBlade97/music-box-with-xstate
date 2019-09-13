import { musicPlayingService } from "@/services/machine";
import { EventObject } from "xstate";

interface StoreState {
  player: typeof musicPlayingService;
}
interface StoreAction {
  startMachine(context: Store): any;
  sendEvent(context: Store, event: EventObject): any;
}
interface Store {
  state: StoreState;
  actions: StoreAction;
}

const store: Store = {
  state: {
    player: musicPlayingService
  },
  actions: {
    startMachine(context) {
      context.state.player.start();
    },
    sendEvent(context, event) {
      context.state.player.send(event);
    }
  }
};

export default store;
