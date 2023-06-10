/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    root: true,
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier/skip-formatting'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-var': 'off',
        'eqeqeq': 'error',
        'camelcase': 'error',
        'no-fallthrough': 'warn',
        'block-scoped-var': 'off',
        'callback-return': 'warn',
        'complexity': ['off', 11],
        'vue/require-v-for-key': 'off',
        'no-constant-condition': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
}
