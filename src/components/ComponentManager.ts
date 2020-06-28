import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { IItemBrowserProps, ItemBrowser } from './ItemBrowser';
import { IExceptionProps, Exception } from './Exception';

export default class ComponentManager {

    public static render(spaDomElement: HTMLElement, message: string): void {

        // If there is a SPA DOM element, make the react element and render it
        if (spaDomElement) {
            const reactElt: React.ReactElement<IItemBrowserProps> =
                React.createElement(ItemBrowser, {
                    message: message
                });
            ReactDOM.render(reactElt, spaDomElement);

            // const reactElt: React.ReactElement<IExceptionProps> = React.createElement(Exception, {
            //     message: message
            // });
            // ReactDOM.render(reactElt, spaDomElement);
        }
    }
}