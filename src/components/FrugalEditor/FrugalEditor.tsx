import React from 'react';
import Quill, {QuillOptionsStatic} from 'quill';
import './FrugalEditor.css';


export interface FrugalEditorProps {

}

export interface FrugalEditorState {

}

const toolbarOptions = [
    [{'size': ['small', false, 'large', 'huge']}],
    [{'font': []}],
    ['bold', 'italic', 'underline'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'align': []}],
    ['image', 'video', 'link'],
    ['blockquote', 'code-block'],
];

export class FrugalEditor extends React.PureComponent<FrugalEditorProps, FrugalEditorState> {

    editor: Quill | undefined;
    editorOptions: QuillOptionsStatic = {};

    componentDidMount(): void {
        this.setEditorOptions();
        this.editor = new Quill(document.getElementById('editor-content') as Element, this.editorOptions);
    }

    setEditorOptions = () => {

        this.editorOptions = {
            placeholder: 'Enter your blog',
            debug: true,
            theme: 'snow',
            modules: {
                toolbar: {
                    container: toolbarOptions,
                }
            }
        };


    };

    render() {
        return (
            <div id="editor">
                <div id="editor-content"/>
            </div>
        );
    }
}