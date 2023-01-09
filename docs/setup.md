# Setup

### 1. Rename project

**package**: [react-native-rename](https://github.com/junedomingo/react-native-rename#readme)


```
 npx react-native-rename "new_name"

```

>With custom Bundle Identifier

```
npx react-native-rename "new_name" -b "bundle_identifier"

```

### 2. Generate splash screen

**package**: [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)

- Step 1: place logo image to `src/assets/images/logo.png` ( name `logo` is required ).
- Step 2: install library `react-native-bootsplash` and setup follow readme.

  ```
  yarn add react-native-bootsplash
  ```
- Step 3: Run script generate:

  ```
  yarn react-native generate-bootsplash ./src/assets/images/logo.png \
    --background-color=F5FCFF \
    --logo-width=100 \
    --assets-path=assets \
    --flavor=main
  ```
- Step 4: Copy all image generate inside `android/app/src/main/res/mipmap-{*}` to diff environment: 
  
  + `android/app/src/development/res/mipmap-{*}`
  + `android/app/src/staging/res/mipmap-{*}`

### 3. Config multiple environment

**package**: [react-native-config](https://github.com/luggit/react-native-config)

Follow step:
 
- [Setup android & ios link doc](https://dev.to/leon_arantes/react-native-multiple-environments-setup-schemaflavors-3l7p).
- [Setup android & ios video](https://www.youtube.com/watch?v=TvBm7UZNyy8).