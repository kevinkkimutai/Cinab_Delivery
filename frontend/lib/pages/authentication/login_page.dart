import 'dart:convert';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:intl_phone_field/intl_phone_field.dart';
import 'package:http/http.dart' as http;

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final TextEditingController phoneController = TextEditingController();
  final TextEditingController otpController = TextEditingController();

  String phoneNumber = '';
  FirebaseAuth firebaseAuth = FirebaseAuth.instance;

  var otpVisible = false;
  var receivedID = '';

  Future<void> sendOTP() {
    var phone = phoneNumber;

    return http
        .post(Uri.parse('http://10.0.2.2:3000/sendOTP'),
            headers: <String, String>{
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: jsonEncode(<String, String>{'phoneNumber': phone}))
        .then((response) {
      if (response.statusCode == 200) {
        setState(() {
          otpVisible = true;
        });
        receivedID = response.body;
      } else {
        print(response.statusCode);
      }
    });
  }

  Future<http.Response> verifyOTP() async {
    var code = otpController.text;
    return http
        .post(Uri.parse('http://10.0.2.2:3000/verifyOTP'),
            headers: <String, String>{
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: jsonEncode(
                <String, String>{'requestId': receivedID, 'code': code}))
        .then((response) {
      if (response.statusCode == 202) {
        print("success");
      } else {
        print(response.statusCode);
      }
      return response;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: IntlPhoneField(
              controller: phoneController,
              invalidNumberMessage: 'Invalid phone number',
              initialCountryCode: 'KE',
              decoration: const InputDecoration(
                hintText: 'Phone Number',
                labelText: 'Phone',
                border: OutlineInputBorder(),
              ),
              onChanged: (val) {
                phoneNumber = val.completeNumber;
              },
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Visibility(
              visible: otpVisible,
              child: TextField(
                controller: otpController,
                decoration: const InputDecoration(
                  hintText: 'OTP Code',
                  labelText: 'OTP',
                  border: OutlineInputBorder(),
                ),
              ),
            ),
          ),
          ElevatedButton(
            onPressed: () {
              if (otpVisible) {
                verifyOTP();
              } else {
                sendOTP();
              }
              FocusManager.instance.primaryFocus?.unfocus();
            },
            child: Text(
              otpVisible ? 'Login' : 'Verify',
            ),
          )
        ],
      ),
    );
  }
}
