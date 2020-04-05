import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Avatar} from "@material-ui/core";

export interface FrugalMenuProps {
    options: any[];
    handleClose?: () => void;
    handleOpen?: () => void;
}

export interface FrugalMenuState {
    anchorEl: HTMLElement | null;
}

export class FrugalMenu extends React.PureComponent<FrugalMenuProps, FrugalMenuState> {

    constructor(props: FrugalMenuProps) {
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
                <Menu
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
                </Menu>
            </>
        );
    }

}