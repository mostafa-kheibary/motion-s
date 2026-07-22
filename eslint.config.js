import { includeIgnoreFile } from '@eslint/config-helpers';
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig(
	globalIgnores(['**/build/**', '**/.svelte-kit/**', '**/.pigmenta/types.d.ts']),
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		plugins: {
			'simple-import-sort': simpleImportSort
		},
		rules: {
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^svelte', '^\\$app', '^[a-zA-Z@]', '^@skeleton/ui', '@skeleton/icons', '^\\$', '^\\.']
					]
				}
			],
			'simple-import-sort/exports': 'error'
		}
	},
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'no-undef': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: true,
					fixStyle: 'separate-type-imports',
					prefer: 'type-imports'
				}
			],
			'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
			'no-async-promise-executor': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-unused-expressions': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off'
		}
		// ignores: ['./apps/back-office/src/components/shadcn/**/*']
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser
			}
		},
		rules: {
			'svelte/state_referenced_locally': 'off',
			'svelte/prefer-writable-derived': 'off',
			'svelte/no-unused-props': 'off',
			'svelte/prefer-svelte-reactivity': 'warn',
			'svelte/no-dom-manipulating': 'off',
			'svelte/no-navigation-without-resolve': 'warn'
		}
	}
);
