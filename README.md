# Easy Node Authentication together with fingerprintjs2
## Sources of this Project
* NodeJS Auth Boilerplate: http://scotch.io/tutorials/easy-node-authentication-setup-and-local
* Fingerprintjs2: https://github.com/Valve/fingerprintjs2


## Change Log from Original Sources
1. Using Passport to authenticate users locally.
2. Removed twitter, google and facebook auth.
3. Add Fingerprintjs2
4. Add docker-compose with and without traefik

## Start and Stop using docker without traefik but with adminer
```
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up -d 
docker-compose -f docker-compose.yml logs -f
docker-compose -f docker-compose.yml down
```
* Application: http://localhost:8080
* Adminer: http://localhost:8181

## Start and Stop using docker with traefik (without adminer)
```
docker-compose -f docker-compose-traefik.yml build 
docker-compose -f docker-compose-traefik.yml up -d 
docker-compose -f docker-compose-traefik.yml logs -f 
```

## Fingerprinting Default Options
```
  var defaultOptions = {
    preprocessor: null,
    audio: {
      timeout: 1000,
      // On iOS 11, audio context can only be used in response to user interaction.
      // We require users to explicitly enable audio fingerprinting on iOS 11.
      // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      excludeIOS11: true
    },
    fonts: {
      swfContainerId: 'fingerprintjs2',
      swfPath: 'flash/compiled/FontList.swf',
      userDefinedFonts: [],
      extendedJsFonts: false
    },
    screen: {
      // To ensure consistent fingerprints when users rotate their mobile devices
      detectScreenOrientation: true
    },
    plugins: {
      sortPluginsFor: [/palemoon/i],
      excludeIE: false
    },
    extraComponents: [],
    excludes: {
      // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
      'enumerateDevices': true,
      // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
      'pixelRatio': true,
      // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
      'doNotTrack': true,
      // uses js fonts already
      'fontsFlash': true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
  }
  ```

## Fingerprinting Options (pretty print) 
```
var options = {
    fonts: {
        extendedJsFonts: true
    }, 
    excludes: {
        userAgent: true
    }
}
```

## Fingerprinting Options One-Liner
```
var options = {fonts: {extendedJsFonts: true}, excludes: {userAgent: true}}
```





