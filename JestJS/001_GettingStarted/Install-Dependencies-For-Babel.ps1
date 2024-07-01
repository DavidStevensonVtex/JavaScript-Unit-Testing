# Using Babel

# To use Babel, install required dependencies:

npm install --save-dev babel-jest @babel/core @babel/preset-env

# Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

# babel.config.js
# module.exports = {
#   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
# };

# The ideal configuration for Babel will depend on your project. See Babel's docs for more details.

# https://babeljs.io/docs/en/