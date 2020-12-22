import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";

class SidePanel extends React.Component {
    render() {
        const { currentUser } = this.props;
        return (
            <Menu
                size="large"
                inverted
                fixed="left"
                vertical
                style={{ background: "#474747", fontSize: '1.2rem' }}
            >
                <UserPanel currenUser={currentUser} />
            </Menu>
        )
    }
}

export default SidePanel;