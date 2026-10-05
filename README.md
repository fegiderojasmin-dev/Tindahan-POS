# Tindahan POS - Android project

## What you need (on a computer)
1. Node.js 18 or newer: https://nodejs.org
2. Android Studio (includes Java and the Android SDK): https://developer.android.com/studio

## Build the APK
Open a terminal in this folder, then run:

    npm install
    npx cap add android
    npm run patch
    npm run sync
    npm run open

`npm run open` launches Android Studio. Wait for the Gradle sync to finish, then choose
**Build > Build Bundle(s) / APK(s) > Build APK(s)**.

Your APK will be at:

    android/app/build/outputs/apk/debug/app-debug.apk

Copy that file to your phone and tap it to install (allow "Install unknown apps" if asked).

## Updating the app later
Edit `www/index.html`, then run `npm run sync` and build again.

## Notes
- Data is stored on the phone inside the app. Use Items > Backup to save a copy.
- The camera asks for permission the first time you tap Scan.
- Print is not available inside the app; use Share / Copy on the receipt instead.
- For the Play Store, build a signed release: Build > Generate Signed Bundle / APK.

## Build without installing anything (GitHub Actions)
1. Create a free GitHub account and a new repository (name it anything).
2. In VS Code: open this folder, then Source Control > Initialize Repository,
   commit all files, and publish to your GitHub repository (branch "main").
   Make sure the hidden `.github` folder is included.
3. On GitHub, open the repository > **Actions** tab. The "Build APK" job starts by itself
   (or click it > Run workflow). It takes about 5 to 10 minutes.
4. When it shows a green check, open the run and download **tindahan-pos-apk** under Artifacts.
   Unzip it to get `app-debug.apk`, copy it to your phone, and install it.
