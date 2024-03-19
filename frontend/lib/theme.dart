import 'package:flutter/material.dart';
import 'package:frontend/colors.dart';
import 'package:google_fonts/google_fonts.dart';

const appBarTheme = AppBarTheme(
  centerTitle: false,
  elevation: 0,
  foregroundColor: Colors.white,
  backgroundColor: kPrimary,
);

ThemeData lightTheme(BuildContext context) => ThemeData.light().copyWith(
      primaryColor: kPrimary,
      scaffoldBackgroundColor: kBackgroundGrey,
      appBarTheme: appBarTheme,
      textTheme: GoogleFonts.poppinsTextTheme(Theme.of(context).textTheme)
          .apply(displayColor: Colors.black),
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );

ThemeData darkTheme(BuildContext context) => ThemeData.dark().copyWith(
      primaryColor: kPrimary,
      scaffoldBackgroundColor: kBackgroundGrey,
      appBarTheme: appBarTheme.copyWith(),
      textTheme: GoogleFonts.poppinsTextTheme(Theme.of(context).textTheme)
          .apply(displayColor: Colors.black),
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );

bool isLightTheme(BuildContext context) {
  return MediaQuery.of(context).platformBrightness == Brightness.light;
}
