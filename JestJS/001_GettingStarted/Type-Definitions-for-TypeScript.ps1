# Type definitions

# There are two ways to have Jest global APIs typed for test files 
# written in TypeScript.

# You can use type definitions which ships with Jest and will update 
# each time you update Jest. Install the @jest/globals package:


npm install --save-dev @jest/globals

# And import the APIs from it:

# sum.test.ts

# import {describe, expect, test} from '@jest/globals';
# import {sum} from './sum';

# describe('sum module', () => {
#   test('adds 1 + 2 to equal 3', () => {
#     expect(sum(1, 2)).toBe(3);
#   });
# });


# Or you may choose to install the @types/jest package. It provides types for 
# Jest globals without a need to import them.

npm install --save-dev @types/jest

# INFO

# @types/jest is a third party library maintained at DefinitelyTyped, hence the 
# latest Jest features or versions may not be covered yet. Try to match versions 
# of Jest and @types/jest as closely as possible. For example, if you are using 
# Jest 27.4.0 then installing 27.4.x of @types/jest is ideal.

