import React from "react";
import michi from "../../assets/michi.png"

class ErrorBound extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error);
        console.error(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <img  src={michi}/>
                    <h1>ALGO SALIO MAL</h1>
                </>
                
            );
        }

        return this.props.children;
    }
}

export default ErrorBound