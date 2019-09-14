import { musicPlayingService } from "@/services/machine";
import { EventObject } from "xstate";

interface StoreState {
  player: typeof musicPlayingService;
  currentState: typeof musicPlayingService.initialState;
}
interface StoreAction {
  sendEvent(context: Store, event: EventObject): any;
}
interface Store {
  state: StoreState;
  actions: StoreAction;
}

const store: Store = {
  state: {
    player: musicPlayingService,
    currentState: musicPlayingService.initialState
  },
  actions: {
    sendEvent(context, event) {
      context.state.player.send(event);
    }
  }
};

export default store;
