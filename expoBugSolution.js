I found that in my case, the problem was resolved by completely deleting the `node_modules` folder, cleaning the cache with `expo prebuild --clean`, and then reinstalling all packages with `npm install` (or `yarn install`).  I also updated all of my Expo related packages to the latest version.  While this worked for my specific case, other users reported successes by cleaning the build cache or checking for conflicts between installed libraries.

// Potential solution (check for outdated or conflicting packages)
npm outdated
npm update

// Clean cache and reinstall
npm cache clean --force
expo prebuild --clean
npm install

// Verify Expo CLI version
expo --version