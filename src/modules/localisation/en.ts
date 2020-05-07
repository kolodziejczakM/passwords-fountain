export default {
    messages: {
        error: 'Error',
        success: 'Success',
        info: 'Info',
        'snackbar.newPasswordAdded': "you've added new password entity!",
        'snackbar.passwordCopiedToClipboard': 'password copied to clipboard.',
        'snackbar.passwordsFetchedSuccessfully':
            'your passwords have been successfully fetched!',
        'snackbar.couldNotFetchPasswords':
            "couldn't fetch your passwords. Please try again.",
        'snackbar.couldNotConnectToDB':
            "couldn't connect to your database. Check your master key.",
        'snackbar.couldNotCreateNewPassword':
            "couldn't create new password entity. Please try again.",
        'snackbar.couldNotEditPassword':
            "couldn't edit password entity. Please try again.",
        'snackbar.couldNotRemovePassword':
            "couldn't remove password entity. Please try again.",
        'snackbar.decryptionError': "couldn't decrypt with provided key.",
        'snackbar.noInternetConnection':
            "there is no internet connection. You're offline.",
        'snackbar.internetIsBack':
            "internet connection is back. You're online.",
        'prompt.removePasswordEnsure':
            'Are you sure you want to delete this password?',
        'prompt.decrypt': 'Decrypt',
        'prompt.remove': 'Remove',
        'navBar.howItWorks': 'How it works',
        'navBar.howToStart': 'How to start',
        'navBar.pricing': 'Pricing',
        'navBar.authors': 'Authors',
        'navBar.app': 'App',
        'optionsPanel.settings': 'Settings',
        'optionsPanel.connect': 'Connect',
        'optionsPanel.cancel': 'Cancel',
        'optionsPanel.confirm': 'Confirm',
        'optionsPanel.addNew': 'Add new',
        'optionsPanel.add': 'Add',
        'optionsPanel.edit': 'Edit',
        'optionsPanel.enterMasterKey': 'Enter your master key:',
        'optionsPanel.enterEncryptionKey': 'Enter your encryption key:',
        'optionsPanel.masterKey': 'Master key',
        'optionsPanel.encryptionKey': 'Encryption key',
        'optionsPanel.noteEncryptionKey':
            "it's recommended to use master key here.",
        'optionsPanel.masterKeyTooShort': 'Master key minimum length is 8.',
        'optionsPanel.encryptionKeyTooShort':
            'Encryption key minimum length is 8.',
        'optionsPanel.labelInputLabel': 'Label',
        'optionsPanel.loginInputLabel': 'Login',
        'optionsPanel.passwordInputLabel': 'Password',
        'optionsPanel.labelTooShort': 'Label minimum length is 3.',
        'optionsPanel.loginTooShort': 'Login minimum length is 3.',
        'optionsPanel.passwordTooShort': 'Password minimum length is 3.',
        'passwordEntity.label': 'Label',
        'passwordEntity.login': 'Login',
        'passwordEntity.password': 'Password',
        'settings.headingText': 'Settings',
        'settings.connectToDB': 'Connect to existing database',
        'settings.currentDBConnection:': 'Current database connection',
        'settings.adminKeyLabel': 'FaunaDB admin key',
        'settings.adminKeyLabelDescription':
            'you can find it on your FaunaDB account.',
        'settings.masterKeyLabel': 'Master key',
        'settings.masterKeyLabelDescription':
            "you'll use that key every time you'll want to decrypt your passwords. Remember it!",
        'settings.connect': 'Connect',
        'settings.back': 'Back',
        'settings.reConnect': 'Re-connect',
        'settings.noteLabel': 'Note:',
        'settings.noteLabelDescription':
            'if you want to connect to database which already has encrypted passwords - use the same master key as during initial connection.',
        'settings.noteLabelDescriptionAdminKey':
            'For security purposes - this is encrypted version of your admin key, not the one you’ve copied here.',
        'settings.adminKeyTooShort': 'Admin key minimum length is 20.',
        'footer.createdBy': 'Created by Marcin Kołodziejczak',
        'banner.ourInterface': 'Our interface',
        'banner.yourDatabase': 'Your database',
        'banner.allPasswords': 'All passwords in one place. For free.',
        'home.howItWorks': 'How it works',
        'home.howToStart': 'How to start - creating database',
        'home.pricing': 'Pricing',
        'home.newsletter': 'Newsletter',
        'home.authors': 'Authors',
        'home.toStart':
            'To start using this app you need to create a <strong>database</strong> to which your passwords will be stored.',
        'home.followGuide':
            'Follow our <strong>5-step guide</strong> and start the journey!',
        'home.completelyFree':
            'Passwords Fountain is a completely <strong>free</strong> app.',
        'home.visitNewsletter':
            '<a href="https://passwordsfountain.substack.com/" target="_blank" rel="noopener">Subscribe</a> to our newsletter to get news about latest releases and future plans. Let\'s stay in touch!',
        'home.visitFaunaPricing':
            'Visit <strong><a href="https://fauna.com/pricing" target="_blank" rel="noopener">https://fauna.com/pricing</a></strong> to explore FaunaDB pricing plans.',
        'home.helloFromAuthor':
            "Hello, I'm Marcin and I'd love to hear your opinion about this application.",
        'home.dontHesitateToContact': "Don't hestitate to contact me:",
        'home.thanksToIconAuthors': 'Huge thanks to icon authors:',
        'home.startApp': 'Start now',
        'startGuide.step1':
            'Go to <strong><a href="https://fauna.com/" target="_blank" rel="noopener">https://fauna.com/</a></strong> and create free account, login.',
        'startGuide.step2':
            "Click <strong>NEW DATABASE</strong> and use <strong>PASSWORDS_FOUNTAIN</strong> as a database name.<br>This is important so please don't misspell it!",
        'startGuide.step3':
            'On the left hand side panel choose SECURITY and click on NEW KEY.<br> Now choose any name for your admin key and click <strong>SAVE.</strong>',
        'startGuide.step4':
            "Your admin key will be shown only once, copy it. Don't show it to other people.<br> If you somehow lose admin key (you shouldn't) you can generate new one.",
        'startGuide.step5':
            'Now you can connect our interface to your database.<br>Click on <strong>START NOW</strong> button and start your journey!',
        'phoneChat.soAnotherAccount':
            "Oh... so I have to create another account? :\xa0( I don't like it.",
        'phoneChat.dontYouUse': "Yes, but don't you use any Password manager?",
        'phoneChat.iTried': "I've tried. I'm not able to trust any of them.",
        'phoneChat.usually':
            "Usually it's like: you know nothing about where passwords are saved and in which format... and who has access to them?",
        'phoneChat.tryThen':
            "Try Passwords Fountain then.<br> It's only lightweight user interface that you use to access your own database.",
        'phoneChat.itEncrypts':
            'It encrypts all your passwords before sending them + whole code is open source so you be sure that nothing can be stolen.',
        'dropdown.choose': 'Choose',
        'language.english': 'English',
        'language.polish': 'Polish',
        'passwordList.connectionPlaceholder':
            'Connect to database to see your passwords here',
        'passwordList.noDataPlaceholder':
            'Add password entities to see them here',
    },
};
