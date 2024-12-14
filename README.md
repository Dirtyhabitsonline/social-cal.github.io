# Modern Web Application

A production-ready web application template with Vue 3, TypeScript, and best practices.

## Features

- 🚀 Vue 3 + TypeScript + Vite
- 📦 Pinia for state management
- 🎨 TailwindCSS for styling
- ✅ Testing with Vitest and Vue Test Utils
- 📝 ESLint + Prettier for code quality
- 🔄 Hot Module Replacement
- 📱 Responsive design ready
- 🌙 Dark mode support

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint and fix files
npm run lint

# Type check
npm run type-check
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/         # Asset files (images, styles)
│   ├── components/     # Vue components
│   │   ├── common/     # Shared components
│   │   ├── features/   # Feature-specific components
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components
│   ├── composables/    # Vue composables
│   ├── config/         # App configuration
│   ├── router/         # Vue Router configuration
│   ├── stores/         # Pinia stores
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   └── views/          # Page components
├── tests/              # Test files
│   ├── unit/          # Unit tests
│   └── e2e/           # End-to-end tests
└── ... config files
```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `test`: Run unit tests
- `test:coverage`: Generate test coverage report
- `lint`: Lint and fix files
- `type-check`: Check TypeScript types

## Best Practices

- Component composition with Vue 3 Composition API
- Type-safe development with TypeScript
- Consistent code style with ESLint and Prettier
- Modular state management with Pinia
- Automated testing with Vitest
- Responsive design with TailwindCSS
- Accessibility-first components