import mitt from 'mitt';
import { asyncListener, syncListener } from '@/common/utils/eventListeners';
import { store } from '@/store';
import { homeActions } from './home.model';
const emitter = mitt();

export enum homeEventTypes {
    noop = 'noop',
}

emitter.on(
    homeEventTypes.noop,
    asyncListener(() => {
        console.log(
            "When emitted from reducer's handler - will be called after state change."
        );
    })
);

emitter.on(
    homeEventTypes.noop,
    syncListener(() => {
        console.log(
            "When emitted from reducer's handler - will be called before state change."
        );
    })
);

export { emitter as homeEmitter };
