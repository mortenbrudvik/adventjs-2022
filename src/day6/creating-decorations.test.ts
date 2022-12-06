import {createDecorations}  from './creating-decorations';
 
test('create', () => {
    expect(createDecorations()).toBeCalled;
})