# Intermittent Expo CLI Development Server Crashes

This repository demonstrates a bug encountered with the Expo CLI, where the development server would crash intermittently without providing clear error messages in the console. The crash was inconsistent and difficult to debug.

## Bug Description

The Expo development server would randomly crash during development. The project is a relatively straightforward React Native application.  Restarting the server was a temporary workaround, but the crashes would recur.

## Solution

A potential solution involved checking for outdated dependencies, and ensuring there aren't any conflicting packages or configuration issues.  Cleaning the project's cache and reinstalling node modules might also help.  This repo includes code demonstrating a potential fix, but the root cause varied in my experience. Careful review of console logs in different browsers, and trying a different machine are suggested.