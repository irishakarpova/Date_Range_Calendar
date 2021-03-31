import React from "react";

const WithAction = (OriginalComponent) =>
    class AccordionComponent extends React.Component {
        state = {
            isOpenComment1: null,
            isOpen: true
        };
        handleOpenComment = (id) => {
            this.setState({
                isOpenComment: id
            });
        };

        handleOpenForm = () => {
            this.setState({ isOpen: !this.state.isOpen });
            console.log("isOpen", this.state.isOpen);
        };

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    isOpenComment1={this.state.isOpenComment1}
                    isOpen={this.state.isOpen}
                    handleOpenComment={this.handleOpenComment}
                    handleOpenForm={this.handleOpenForm}
                />
            );
        }
    };
export default WithAction;
