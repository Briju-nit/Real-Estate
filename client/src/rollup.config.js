import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/App.jsx', // Entry point to your app
    output: {
        file: 'dist/bundle.js', // Output file location
        format: 'iife', // Format, can be 'esm', 'cjs', or others based on your needs
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx'], // Add support for .jsx files
        }),
    ],
};
