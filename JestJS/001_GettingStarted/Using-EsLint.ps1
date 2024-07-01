# Using ESLint

# Jest can be used with ESLint without any further configuration as long as you import the 
# Jest global helpers (describe, it, etc.) from @jest/globals before using them in your 
# test file. This is necessary to avoid no-undef errors from ESLint, which doesn't know 
# about the Jest globals.

# If you'd like to avoid these imports, you can configure your ESLint environment to 
# support these globals by adding the jest environment:

# {
#   "overrides": [
#     {
#       "files": ["tests/**/*"],
#       "env": {
#         "jest": true
#       }
#     }
#   ]
# }

# Or use eslint-plugin-jest, which has a similar effect:

# {
#   "overrides": [
#     {
#       "files": ["tests/**/*"],
#       "plugins": ["jest"],
#       "env": {
#         "jest/globals": true
#       }
#     }
#   ]
# }