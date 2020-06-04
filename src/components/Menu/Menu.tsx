import React from 'react';
import {Menu as MaterialMenu, MenuItem, Avatar, Button} from '@material-ui/core';

export interface MenuProps {
    options: any[];
    handleClose?: () => void;
    handleOpen?: () => void;
}

export interface MenuState {
    anchorEl: HTMLElement | null;
}

export class Menu extends React.PureComponent<MenuProps, MenuState> {

    constructor(props: MenuProps) {
        super(props);
        this.state = {
            anchorEl: null
        }
    }

    handleClose = () => {
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
                    {options.map((o: any) => {
                        return (
                            <MenuItem key={o.label.toLowerCase()} onClick={this.handleClose}>{o.label}</MenuItem>
                        )
                    })}
                </MaterialMenu>
            </>
        );
    }

}
