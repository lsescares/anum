import firebaseui from "firebaseui"
import * as firebase from "firebase";


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true,
            signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
            // Allow the user the ability to complete sign-in cross device,
            // including the mobile apps specified in the ActionCodeSettings
            // object below.
            forceSameDevice: false,
            // Used to define the optional firebase.auth.ActionCodeSettings if
            // additional state needs to be passed along request and whether to open
            // the link in a mobile app if it is installed.
            emailLinkSignIn: function() {
                return {
                    // Additional state showPromo=1234 can be retrieved from URL on
                    // sign-in completion in signInSuccess callback by checking
                    // window.location.href.
                    url: 'https://www.example.com/completeSignIn?showPromo=1234',
                    // Custom FDL domain.
                    dynamicLinkDomain: 'example.page.link',
                    // Always true for email link sign-in.
                    handleCodeInApp: true,
                    // Whether to handle link in iOS app if installed.
                    iOS: {
                        bundleId: 'com.example.ios'
                    },
                    // Whether to handle link in Android app if opened in an Android
                    // device.
                    android: {
                        packageName: 'com.example.android',
                        installApp: true,
                        minimumVersion: '12'
                    }
                };
            }},
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account'
            }
        },
        {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                // Forces password re-entry.
                auth_type: 'reauthenticate'
            }
        },
        {
            provider: firebase.auth.TwitterAuthProvider.PROVIDER_ID},
        {
            provider: firebase.auth.GithubAuthProvider.PROVIDER_ID},
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID},
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
                type: 'image', // 'audio'
                size: 'normal', // 'invisible' or 'compact'
                badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
            },
            defaultCountry: 'GB', // Set default country to the United Kingdom (+44).
            // For prefilling the national number, set defaultNationNumber.
            // This will only be observed if only phone Auth provider is used since
            // for multiple providers, the NASCAR screen will always render first
            // with a 'sign in with phone number' button.
            defaultNationalNumber: '1234567890',
            // You can also pass the full phone number string instead of the
            // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
            // the first country ID that matches the country code will be used to
            // populate the country selector. So for countries that share the same
            // country code, the selected country may not be the expected one.
            // In that case, pass the 'defaultCountry' instead to ensure the exact
            // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
            // will always have higher priority than 'loginHint' which will be ignored
            // in their favor. In this case, the default country will be 'GB' even
            // though 'loginHint' specified the country code as '+1'.
            loginHint: '+11234567890'
        }
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);