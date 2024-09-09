import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

// 사용자 정의 ESLint 설정
export default [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['node_modules/**/*', 'dist/**/*'],
  },

  // 언어 설정 및 글로벌 변수 추가
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // ESLint 기본 JavaScript 규칙 설정
  {
    ...pluginJs.configs.recommended,
    rules: {
      'no-console': 'warn', // `console.log` 사용 시 경고
      eqeqeq: 'error', // 엄격한 비교(===)만 허용
      'no-var': 'error', // `var` 대신 `let` 또는 `const` 사용 강제
      'prefer-const': 'error', // `const` 사용을 권장
      camelcase: ['error', { properties: 'never' }], // 변수와 함수는 camelCase 사용
      'id-match': [
        'error',
        '^[a-z]+([A-Z][a-z]*)*$',
        { onlyDeclarations: true },
      ], // PascalCase, camelCase 파일/식별자 규칙
      'array-callback-return': 'warn', // 배열 메서드의 콜백 함수가 값을 반환해야 함
      'consistent-return': 'warn', // 함수에서 일관된 반환값을 사용해야 함
      'arrow-parens': ['error', 'always'], // 화살표 함수에 괄호 사용 강제
      'no-new-object': 'error', // 객체 생성자를 사용하지 않도록 설정
      'no-array-constructor': 'error', // 배열 생성자를 사용하지 않도록 설정
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 사용되지 않는 변수 경고
    },
  },

  // TypeScript 규칙 설정
  {
    ...tseslint.configs.recommended,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ], // TypeScript에서도 사용되지 않는 변수 경고
      '@typescript-eslint/explicit-module-boundary-types': 'off', // 모듈의 경계에서 명시적인 타입 지정을 요구하지 않음
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // `interface`를 선호
    },
  },

  // React 규칙 설정
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      'react/jsx-uses-react': 'off', // React 17+에서는 JSX에서 React를 자동으로 감지하므로 비활성화
      'react/react-in-jsx-scope': 'off', // React 17+에서는 JSX 스코프에서 React를 불러올 필요 없음
      'react/prop-types': 'off', // TypeScript를 사용하므로 PropTypes 사용 비활성화
    },
  },
];
