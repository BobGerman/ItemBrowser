import * as React from 'react';
declare function escape(s: string): string;
require ('./ItemBrowser.scss');

export interface IItemBrowserProps {
  message: string;
} 

export interface IItemBrowserState { }

export class ItemBrowser extends React.Component<IItemBrowserProps, IItemBrowserState> {
  public render(): React.ReactElement<IItemBrowserProps> {
    return (
      <div className={ 'itemBrowser' }>
        <div className={ 'container' }>
          <div className={ 'row' }>
            <span className={ 'exceptionColumn' }>
              { this.htmlEncode(this.props.message) }
            </span>
          </div>
        </div>
      </div>
    );
  }

  private htmlEncode (text: string) {
    // TODO Fix this
    return text;
  }
}
