import { getDatabase, addToDatabase } from './customDatabase';
import { customHeader } from './customHeader';

export default class TextEditor {
  constructor() {
    const localData = localStorage.getItem('editorContent');

    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#text-editor'), {
      value: '',
      mode: 'javascript',
      theme: 'custom-theme',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    getDatabase().then((data) => {
      console.info('Retrieved data from CustomDatabase, setting it in the editor');
      this.editor.setValue(data || localData || customHeader);
    });

    this.editor.on('change', () => {
      localStorage.setItem('editorContent', this.editor.getValue());
    });

    this.editor.on('blur', () => {
      console.log('Editor lost focus');
      addToDatabase(localStorage.getItem('editorContent'));
    });
  }
}
