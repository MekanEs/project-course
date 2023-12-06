import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    it('work with only first parameter', () => {
        const cls = 'class';
        expect(classNames(cls)).toBe(cls);
    });
    it('work with truthy mods', () => {
        const cls = 'class';
        expect(classNames(cls, { [cls]: true })).toBe('class class');
    });
    it('work with falsy mods', () => {
        const cls = 'class';
        expect(classNames(cls, { [cls]: false })).toBe('class');
    });
    it('work with undefined mods', () => {
        const cls = 'class';
        expect(classNames(cls, { [cls]: undefined })).toBe('class');
    });
    it('work with aditional params', () => {
        const cls = 'class';
        expect(classNames(cls, {}, [cls])).toBe('class class');
    });
});
