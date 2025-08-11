// Global type declarations for packages without type definitions

declare module 'minimatch' {
  function minimatch(path: string, pattern: string, options?: any): boolean;
  export = minimatch;
}

declare module 'normalize-package-data' {
  function normalizePackageData(pkg: any, warn?: boolean, strict?: boolean): void;
  export = normalizePackageData;
}

// Add any other missing type declarations here as needed
