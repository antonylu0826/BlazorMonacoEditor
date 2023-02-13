function seteupmonaco() {
    require.config({ paths: { 'vs': '/lib/vs' } });
    monaco.editor.create(document.getElementById('container'), {
        value: 'using System;\n\nConsole.write("Hello World");',
        language: 'csharp'
    });
}