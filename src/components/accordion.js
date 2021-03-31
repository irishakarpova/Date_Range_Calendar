import React from "react";

const WithAction = (OriginalComponent) =>
    class AccordionComponent extends React.Component {
        state = {
            openArticleId: null
        };

        handleOpenArticleId = (id) => {
            this.setState((state) => ({
                openArticleId: this.state.openArticleId === id ? null : id
            }));
        };

        render() {
            return (
                <OriginalComponent
                    {...this.props}
                    openArticleId={this.state.openArticleId}
                    handleOpenArticleId={this.handleOpenArticleId}
                />
            );
        }
    };
export default WithAction;
