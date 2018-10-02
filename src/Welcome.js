import React from 'react';

class Welcome extends React.Component {
    render() {
        const {name, children} = this.props
        return (
            <h1>
                Hello {children}
            </h1>
        )
    }
}  

export default Welcome;