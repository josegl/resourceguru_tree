const Node = require('./Node');

describe('Refactor', () => {
  test('const node = new Node(), node instanceof Node === true', () => {
    const node = new Node();
    expect(node instanceof Node).toBe(true);
  });
});

