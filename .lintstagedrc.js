module.exports = {
  '*.{json,md,html,css,js}': ['prettier --write'],
  '*.css': ['stylelint --fix'],
  '*.html': ['htmlhint'],
  '*.js': ['eslint --fix'],
};
