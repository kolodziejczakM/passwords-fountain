export default {
    messages: {
        error: 'Błąd',
        success: 'Sukces',
        info: 'Info',
        'snackbar.newPasswordAdded': 'dodano nowe hasło!',
        'snackbar.passwordCopiedToClipboard': 'skopiowano do schowka.',
        'snackbar.passwordsFetchedSuccessfully':
            'twoje hasła zostały poprawnie pobrane!',
        'snackbar.couldNotFetchPasswords':
            'nie udało się pobrać haseł. Spróbuj ponownie.',
        'snackbar.couldNotConnectToDB':
            'nie można ustanowić połączenia z bazą danych. Sprawdź swój klucz główny.',
        'snackbar.couldNotCreateNewPassword':
            'nie udało się utworzyć nowego hasła. Spróbuj ponownie.',
        'snackbar.couldNotEditPassword':
            'edytowanie hasła nie powiodło się. Spróbuj ponownie.',
        'snackbar.couldNotRemovePassword':
            'nie udało się usunąć hasła. Spróbuj ponownie.',
        'snackbar.decryptionError':
            'nie udało się odszyfrować hasła za pomocą podanego klucza głównego.',
        'snackbar.noInternetConnection':
            'brak połączenia z internetem. Jesteś teraz offline.',
        'snackbar.internetIsBack': 'internet znów działa. Jesteś online.',
        'prompt.removePasswordEnsure':
            'Jesteś pewien, że chcesz usunąć to hasło?',
        'prompt.decrypt': 'Odszyfruj',
        'prompt.remove': 'Usuń',
        'navBar.howItWorks': 'Jak to działa',
        'navBar.howToStart': 'Jak zacząć',
        'navBar.pricing': 'Cennik',
        'navBar.authors': 'Autorzy',
        'navBar.app': 'App',
        'optionsPanel.settings': 'Ustawienia',
        'optionsPanel.connect': 'Połącz',
        'optionsPanel.cancel': 'Anuluj',
        'optionsPanel.confirm': 'Zatwierdź',
        'optionsPanel.addNew': 'Dodaj nowe',
        'optionsPanel.add': 'Dodaj',
        'optionsPanel.edit': 'Edytuj',
        'optionsPanel.enterMasterKey': 'Wprowadź swój klucz główny:',
        'optionsPanel.masterKey': 'Klucz główny',
        'optionsPanel.masterKeyTooShort':
            'Minimalna długość klucza głównego to 8 znaków.',
        'optionsPanel.labelInputLabel': 'Nazwa',
        'optionsPanel.loginInputLabel': 'Login',
        'optionsPanel.passwordInputLabel': 'Hasło',
        'optionsPanel.labelTooShort': 'Minimalna długość nazwy to 3 znaki.',
        'optionsPanel.loginTooShort': 'Minimalna długość loginu to 3 znaki.',
        'optionsPanel.passwordTooShort': 'Minimalna długość hasła to 3 znaki.',
        'passwordEntity.label': 'Nazwa',
        'passwordEntity.login': 'Login',
        'passwordEntity.password': 'Hasło',
        'settings.connectToDB': 'Połącz z bazą danych',
        'settings.currentDBConnection:': 'Połączenie z bazą danych',
        'settings.adminKeyLabel': 'Klucz admina FaunaDB',
        'settings.adminKeyLabelDescription':
            'znajdziesz go na swoim koncie FaunaDB.',
        'settings.masterKeyLabel': 'Klucz główny',
        'settings.masterKeyLabelDescription':
            'będzie Ci potrzebny za każdym razem gdy będziesz chciał odszyfrować hasła. Zapamiętaj go!',
        'settings.connect': 'Połącz',
        'settings.back': 'Cofnij',
        'settings.reConnect': 'Połącz ponownie',
        'settings.noteLabel': 'Ważne:',
        'settings.noteLabelDescription':
            'jeśli chcesz połączyć się z bazą danych, która już posiada zaszyfrowane hasła - użyj tego samego klucza głównego jak podczas pierwszego połączenia.',
        'settings.noteLabelDescriptionAdminKey':
            'Ze względów bezpieczeństwa - jest to zaszyfrowana wersja Twojego klucza admina, a nie ta, którą tutaj skopiowałeś.',
        'settings.adminKeyTooShort':
            'Minimalna długość klucza admina to 40 znaków.',
        'footer.createdBy': 'Stworzone przez Marcina Kołodziejczaka',
        'banner.ourInterface': 'Nasz interfejs',
        'banner.yourDatabase': 'Twoja baza danych',
        'banner.allPasswords': 'Wszystkie hasła w jednym miejscu. Za darmo.',
        'home.howItWorks': 'Jak to działa',
        'home.howToStart': 'Jak zacząć - tworzenie bazy danych',
        'home.pricing': 'Cennik',
        'home.authors': 'Autorzy',
        'home.toStart':
            'Aby móc skorzystać z aplikacji będziesz potrzebował <strong>bazy danych</strong>, w której Twoje hasła będą przechowywane.',
        'home.followGuide':
            'Przejdź przez poradnik składający się z <strong>5 kroków</strong> i rozpocznij przygodę!',
        'home.completelyFree':
            'Passwords Fountain to całkowicie <strong>darmowa</strong> aplikacja.',
        'home.visitFaunaPricing':
            'Odwiedź <strong><a href="https://fauna.com/pricing">https://fauna.com/pricing</a></strong> aby dowiedzieć się więcej w temacie płatności FaunaDB.',
        'home.helloFromAuthor':
            'Cześć, jestem Marcin i chętnie przeczytam Twoją opinię na temat tej aplikacji.',
        'home.dontHesitateToContact': 'Napisz do mnie na:',
        'home.thanksToIconAuthors': 'Wielkie podziękowania do autorów ikon:',
        'home.startApp': 'Uruchom',
        'startGuide.step1':
            'Przejdź do <strong><a href="https://fauna.com/">https://fauna.com/</a></strong> a następnie utwórz darmowe konto i zaloguj się.',
        'startGuide.step2':
            'Kliknij na <strong>NEW DATABASE</strong> i wprowadź <strong>PASSWORDS_FOUNTAIN</strong> jako nazwę dla bazy danych.<br>To ważne, nie zrób literówki!',
        'startGuide.step3':
            'Przejdź do Settings -> Account API Keys.<br> a następnie wybierz nazwę dla klucza admina i kliknij <strong>CREATE NEW ADMIN KEY.</strong>',
        'startGuide.step4':
            'Twój klucz admina pojawi się tylko raz, skopiuj go. Nie pokazuj go nikomu.<br> Jeśli z jakiegoś powodu zgubisz klucz admina (nie powinieneś!), to będziesz mógł wygenerować nowy.',
        'startGuide.step5':
            'Teraz możesz połączyć nasz interfejs z Twoją bazą danych.<br>Kliknij na <strong>App</strong> (prawy górny róg) i rozpocznij przygodę!',
        'phoneChat.soAnotherAccount':
            'Eh... muszę założyć kolejne konto? :\xa0( Suuabo.',
        'phoneChat.dontYouUse': 'Tak, ale nie używasz żadnego menadżera haseł?',
        'phoneChat.iTried':
            'Próbowałam, ale jakoś nie jestem w stanie zaufać takim programom.',
        'phoneChat.usually':
            'Zazwyczaj jest tak: nic nie wiesz o tym gdzie te hasła są zapisywane, w jakim formacie... i kto ma do nich dostęp?',
        'phoneChat.tryThen':
            'Spróbuj Passwords Fountain.<br> To tylko niewielki interfejs użytkownika, za pomocą którego łączysz się ze swoją bazą danych.',
        'phoneChat.itEncrypts':
            'Szyfruje wszystkie hasła przed ich wysłaniem do bazy danych + cały kod aplikacji jest open source, więc możesz być pewna, że nic nie jest kradzione.',
        'dropdown.choose': 'Wybierz',
        'language.english': 'Angielski',
        'language.polish': 'Polski',
        'passwordList.placeholder':
            'Połącz się z bazą danych aby uzyskać dostęp do swoich haseł',
    },
};
