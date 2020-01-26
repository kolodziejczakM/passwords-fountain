import { h, render } from 'preact';
import { StoreProvider } from '@preact-hooks/unistore';
import { store } from './store';
import { App } from './app/app';
import './styles';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

if ((module as any).hot) {
    (module.hot as any).accept();
    require('preact/debug');
}

render(
    <StoreProvider value={store}>
        <App description="Minimalistic, high-powered boilerplate" />
    </StoreProvider>,
    (document as any).getElementById('root')
);
