import Quill from 'quill';


export class DeltaToHTML {
    static deltoToHTML = (data: any): string => {
        let div = document.createElement('div') as Element;
        let editor = new Quill(div);
        editor.setContents(data);
        return editor.getText();;
    };
}
