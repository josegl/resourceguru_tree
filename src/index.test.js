const Node = require('./Node');
let tree;

beforeAll(() => {
  tree = new Node(
    "÷",
    null,
    new Node(
      "+",
      null,
      new Node("", 7, null, null),
      new Node(
        "x",
        null,
        new Node("-", null, new Node("", 3, null, null), new Node("", 2, null, null)),
        new Node("", 5, null, null)
      )
    ),
    new Node("", 6, null, null)
  );
  return 0;
})

describe('Refactor', () => {
  test('const node = new Node(), node instanceof Node === true', () => {
    const node = new Node();
    expect(tree instanceof Node).toBe(true);
  });
  test('toString tree function call result matches the given expression string', () => {
    expect(tree.toString()).toEqual("((7 + ((3 - 2) x 5)) ÷ 6)");
  });
  test('resul tree function call matches the expected result', () => {
    expect(tree.result()).toBe(2);
  });
});

