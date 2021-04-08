import React from "react";

const WithAction = (OriginalComponent) =>
    class AccordionComponent extends React.Component {
        state = {
            isOpen: true
        };
        handleOpenComment = (id) => {
            this.setState({
                isOpenComment: id
            });
        };

        handleOpenForm = () => {
            this.setState({ isOpen: !this.state.isOpen });
        };

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    isOpen={this.state.isOpen}
                    handleOpenComment={this.handleOpenComment}
                    handleOpenForm={this.handleOpenForm}
                />
            );
        }
    };
export default WithAction;
