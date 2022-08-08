# Refactor tree
How to install and test:
1. Clone this respository
2. `cd` inside the respository in your computer
3. Run `npm i`
4. Run `npm run test` to start the test suite.

## How the refactor was done?
The Node function has been extracted from the main file, to it's own file, and it has been converted to a `class`.
This has been done this way because this way the Node specification and inmplementation is isolated, and once you
create a new Node, the instance has in it's own the properties that define it, and you don't need to return a object
where you have to specify the properties and functions that you will be using later.

## Further changes.
Along with the extraction of the Node to it's own file and `class`, I have also implemented several tests to ensure that
a new Node belongs to a `Node` instance, and the assertions that where placed in the main entry point, have been implemented
as tests as well. However I have kept the assertions in the main entry point just for the shake of a kind of retrocompatibility.

## Things that I have considered but that I have not implemented.
I have considered to extract the operations to their own single files (one file per operation) but this problem was not big enough to
make it more complex, and at the end if we try to not to repeat the `switch` in the `toString` and `result` functions, we would have to `mask`
that `switch` somehow, for instance, having a `operations` directory where we could create one file per operation naming it like it's symbol,
for instance `x.js`, and in the `operations` folder an `index.js` file that would read the file system to import all the available operations.
But I have considered that the extra complexity was not worthit. 
