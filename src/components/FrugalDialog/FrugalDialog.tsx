import React from 'react';
import {Dialog, DialogTitle, DialogActions, DialogContentText, DialogContent} from "@material-ui/core";

export interface DialigProps {
    open: boolean;
    handleClose?: (e: any) => void;
    title?: string;
    isAction?: boolean;
    actions?: any;
    contentText?: boolean;
    children?: React.ReactNode;
}


export interface DialogState {

}

export class FrugalDialog extends React.PureComponent<DialigProps, DialogState> {

    GetDialogContentText = () => {
        if (this.props.contentText)
            return <DialogContentText>{this.props.children}</DialogContentText>;
        return this.props.children;
    };

    render() {
        return (
            <Dialog onClose={this.props.handleClose} aria-labelledby="dialog-title" open={this.props.open}>
                {this.props.title && <DialogTitle id="dialog-title">{this.props.title}</DialogTitle>}
                {this.props.children &&
				<DialogContent>
                    {
                        this.GetDialogContentText()
                    }
				</DialogContent>
                }
                {this.props.isAction && <DialogActions>{this.props.actions}</DialogActions>}
            </Dialog>
        )
    }
}