module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  type:"module",
  "transformIgnorePatterns": [
    "node_modules/(?!(@react-native|react-native|react-native-vector-icons)/)"
  ],
  moduleNameMapper: {
    "^react-native-vector-icons/(.*)$": "<rootDir>/node_modules/react-native-vector-icons/$1"
  },
  transform: {

    '^.+\\.(js|jsx)$': 'babel-jest',
  },

};
