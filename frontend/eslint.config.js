import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-prop-types': 'off',
    },
    daisyui: {
      themes: [
        {
          linkedin: {
            primary: "#0A66C2", // LinkedIn Blue
            secondary: "#FFFFFF", // White
            accent: "#7FC15E", // LinkedIn Green (for accents)
            neutral: "#000000", // Black (for text)
            "base-100": "#F3F2EF", // Light Gray (background)
            info: "#5E5E5E", // Dark Gray (for secondary text)
            success: "#057642", // Dark Green (for success messages)
            warning: "#F5C75D", // Yellow (for warnings)
            error: "#CC1016", // Red (for errors)
          },
        },
      ],
    }, //
  },
]
