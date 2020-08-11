module.exports = {
    "plugins": [
        "mongo"
    ],
    "env": {
        "commonjs": true, /* for this file */
        "mongo/shell": true, 
        "node": true
    },
    /* eslint:recommended property enables rules that report common problems 
       See the list at https://eslint.org/docs/rules/ */
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
    },
    "ignorePatterns": [
        "public/javascripts/*.js" /* third party stuff */
    ]
};
