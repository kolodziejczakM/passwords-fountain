import mitt from 'mitt';
import { asyncListener, syncListener } from '@/common/utils/eventListeners';
import { store } from '@/store';
import { passwordListActions } from './passwordList.model';
const emitter = mitt();

export enum passwordListEventTypes {
    noop = 'noop',
}

emitter.on(
    passwordListEventTypes.noop,
    asyncListener(() => {
        console.log(
            "When emitted from reducer's handler - will be called after state change."
        );
    })
);

emitter.on(
    passwordListEventTypes.noop,
    syncListener(() => {
        console.log(
            "When emitted from reducer's handler - will be called before state change."
        );
    })
);

export { emitter as passwordListEmitter };
