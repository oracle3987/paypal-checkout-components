/* @flow */

module.exports = {
    'extends': './node_modules/grumbler-scripts/config/.eslintrc-browser.js',

    'globals': {
        'Promise': false,
        '__TEST__': true,
        '__MIN__': true,
        '__FILE_NAME__': true,
        '__PAYPAL_CHECKOUT__': true
    },

    'rules': {
        'promise/catch-or-return': 'off',
        'complexity': 'off',
        'max-nested-callbacks': [ 'error', 5 ],
        'react/prop-types': 'off',
        'react/destructuring-assignment': 'off',
        'react/require-default-props': 'off',
        'react/no-unused-prop-types': 'off',
        'react/style-prop-object': 'off',
        'unicorn/prefer-negative-index': 'off',
        'default-param-last': 'off',
        'import/no-cycle': 'off',
        'unicorn/no-for-loop': 'off',
        'flowtype/require-exact-type': 'off'
    }
};