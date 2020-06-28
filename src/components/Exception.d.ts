import * as React from 'react';
export interface IExceptionProps {
    message: string;
}
export declare class Exception extends React.Component<IExceptionProps, {}> {
    render(): React.ReactElement<IExceptionProps>;
    private htmlEncode;
}
