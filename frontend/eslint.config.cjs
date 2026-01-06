module.exports = [
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            parser: require("@babel/eslint-parser"),
            parserOptions: {
                requireConfigFile: false,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react: require("eslint-plugin-react"),
        },
        rules: {
            semi: "error",
            "no-unused-vars": "warn",
        },
    },
];