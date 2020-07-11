import React from 'react';
import {
    Menu as MaterialMenu,
    MenuItem,
    Avatar,
    Button,
} from '@material-ui/core';


import './Menu.scss';
import {RouteComponentProps, withRouter} from "react-router";

export interface MenuOptions {
    label: string;
    link: string;
    icon?: any;
}


export interface MenuProps extends RouteComponentProps {
    options: MenuOptions[];
    handleClose?: () => void;
    handleOpen?: () => void;
}

export interface MenuState {
    anchorEl: HTMLElement | null;
}

class Menu extends React.PureComponent<MenuProps, MenuState> {

    constructor(props: MenuProps) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClose = (option: any) => {
        this.props.history.push(option.link);
        this.setState({anchorEl: null});
    };

    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({anchorEl: event.currentTarget});
    };


    render() {
        const {anchorEl} = this.state;
        const {options} = this.props;
        return (
            <>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    <Avatar>GK</Avatar>
                </Button>
                <MaterialMenu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    {options.map((o: MenuOptions) => {
                        return (
                            <MenuItem key={o.label.toLowerCase()}
                                      onClick={() => this.handleClose(o)}>
                                {o.icon}{o.label}
                            </MenuItem>
                        )
                    })}
                </MaterialMenu>
            </>
        );
    }

}

export default withRouter(Menu);
