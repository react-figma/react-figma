import * as React from 'react';
import { Text } from '../text/Text';
import { Rectangle } from '../rectangle/Rectangle';

export class ErrorBoundary extends React.Component<{}, { error?: Error }> {
    constructor(props) {
        super(props);
        this.state = { error: undefined };
    }

    componentDidCatch(error) {
        console.log(error);
        this.setState({ error });
        return false;
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <Text characters={this.state.error.message} style={{ fontSize: 28 }}></Text>
                    <Text characters={this.state.error.stack} style={{ fontSize: 28 }}></Text>
                </>
            );
        }
        return React.Children.only(this.props.children);
    }
}
