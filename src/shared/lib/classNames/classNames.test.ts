import { classNames } from './classNames';

describe('classNames', () => {
  const expected = 'someClass';
  const expectedTwo = 'someClass class1 class2';

  test('with only first param', () => {
    expect(classNames('someClass'))
      .toBe(expected);
  });

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expectedTwo);
  });

  test('with mods', () => {
    expect(classNames('someClass', {
      hovered: true, scrollable: true,
    }, ['class1', 'class2']))
      .toBe(`${expectedTwo} hovered scrollable`);
  });

  test('with mods false', () => {
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2']))
      .toBe(`${expectedTwo} hovered`);
  });

  test('with mods undefined', () => {
    expect(classNames('someClass', {
      hovered: true, scrollable: undefined,
    }, ['class1', 'class2']))
      .toBe(`${expectedTwo} hovered`);
  });
});
