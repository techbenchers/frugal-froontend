import React from 'react';
import Quill, { QuillOptionsStatic } from 'quill';
import './FrugalEditor.css';


export interface FrugalEditorProps {
    onChange?: (d: any) => void;
    getAllContent?: (d: any) => void;
    getRef?: (e: Quill) => void;
    debug?: boolean;
    data?: any;
}

export interface FrugalEditorState {

}

const toolbarOptions = [
    [{ 'size': ['small', false, 'large', 'huge'] }],
    // [{'font': []}],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['image', 'video', 'link'],
    ['blockquote', 'code-block'],
];

export class FrugalEditor extends React.PureComponent<FrugalEditorProps, FrugalEditorState> {

    editor: Quill | undefined;
    editorOptions: QuillOptionsStatic = {};

    componentDidMount(): void {
        this.setEditorOptions();
        this.editor = new Quill(document.getElementById('editor-content') as Element, this.editorOptions);
        this.setEventHandlers();
    }

    componentDidUpdate() {
        if (this.editor) {
            this.editor.setContents(this.props?.data);
        }
    }

    setEventHandlers = (): void => {
        if (this.props.onChange)
            this.editor?.on('text-change', this.props.onChange);
        if (this.props.getRef)
            this.props.getRef(this.editor as Quill);
    };

    setEditorOptions = (): void => {
        this.editorOptions = {
            placeholder: 'Enter your blog',
            debug: this.props?.debug,
            theme: 'snow',
            modules: {
                toolbar: {
                    container: toolbarOptions,
                }
            }
        };
    };

    render() {
        console.log("frugal editor priops", this.props);
        return (
            <div id="editor">
                <div id="editor-content" />
            </div>
        );
    }
}