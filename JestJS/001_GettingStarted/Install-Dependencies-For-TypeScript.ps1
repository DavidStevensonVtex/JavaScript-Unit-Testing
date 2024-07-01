# Using TypeScript

# Via babel

# Jest supports TypeScript, via Babel. First, make sure you followed the instructions 
# on using Babel above. Next, install the @babel/preset-typescript:

npm install --save-dev @babel/preset-typescript

# Then add @babel/preset-typescript to the list of presets in your babel.config.js.

# babel.config.js
# module.exports = {
#   presets: [
#     ['@babel/preset-env', {targets: {node: 'current'}}],
#     '@babel/preset-typescript',
#   ],
# };

# However, there are some caveats to using TypeScript with Babel. Because TypeScript support 
# in Babel is purely transpilation, Jest will not type-check your tests as they are run. If 
# you want that, you can use ts-jest instead, or just run the TypeScript compiler tsc 
# separately (or as part of your build process).