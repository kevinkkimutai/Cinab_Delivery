// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyDLiJ6y8cWY7-5VCx7jveSBaK8eI_5YvFw',
    appId: '1:289149323076:web:cd8d9bc77b1b9dca2af911',
    messagingSenderId: '289149323076',
    projectId: 'cinabdelivery',
    authDomain: 'cinabdelivery.firebaseapp.com',
    storageBucket: 'cinabdelivery.appspot.com',
    measurementId: 'G-S8X09TEN37',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyA8sKwEIgMHsdDl-mQlDqjN6czooezu5ek',
    appId: '1:289149323076:android:dd6a26a606dd3a402af911',
    messagingSenderId: '289149323076',
    projectId: 'cinabdelivery',
    storageBucket: 'cinabdelivery.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyBncpdb3BBa7l1lWQu1T2c9UMOWhDJXsLg',
    appId: '1:289149323076:ios:46dce48b82622eaa2af911',
    messagingSenderId: '289149323076',
    projectId: 'cinabdelivery',
    storageBucket: 'cinabdelivery.appspot.com',
    iosBundleId: 'com.example.frontend',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyBncpdb3BBa7l1lWQu1T2c9UMOWhDJXsLg',
    appId: '1:289149323076:ios:e2a19dd8e2b5c0192af911',
    messagingSenderId: '289149323076',
    projectId: 'cinabdelivery',
    storageBucket: 'cinabdelivery.appspot.com',
    iosBundleId: 'com.example.frontend.RunnerTests',
  );
}