## Passwords fountain

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
![GitHub](https://img.shields.io/github/license/kolodziejczakM/passwords-fountain) ![GitHub package.json version](https://img.shields.io/github/package-json/v/kolodziejczakM/passwords-fountain)
[![Open Source Love png2](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

<div align="center">
    <img src="./src/assets/icons/logo.svg" width="250" height="250"/>
</div>
<br />

Modern & performant password manager **interface** which works everywhere.

Passwords fountain is completely free and lightweight UI.
Connect it to your own database (you don't have to host / have anything but your browser) and start your journey at https://www.passwords-fountain.com

<div align="center">
    <img src="./src/assets/images/how-it-works-readme.png" width="350" />
</div>

#### Is it save?

1. We don't store any vulnerable data.
2. Passwords Fountain has access to your database as long as you want it.
3. In database passwords are stored in **encrypted version** so nobody can steal them from there.

You can always check in what way Passwords fountain works via putting "random" data into it.
If you still don't feel save, then maybe try running your own instance?

#### Can I run my own instance?

Of course! If you don't want to use official Passwords Fountain instance from https://www.passwords-fountain.com, you can fork the code, use any ([free?](https://dev.to/0xbanana/easy-and-free-ways-to-publish-a-website-in-2020-44lo)) static hosting and you are all set!

Using "public" instance is preferred though - we can polish it together. It can be hard to help with bug fixing on your private, modified instance.

#### I found a bug. What should I do?

Don't hesitate to open an issue!

#### I opened an issue, but I also want to help in closing them. Can I?

Of course! Contribution flow looks like this:

1. Fork this repo
2. Create your feature branch (`git checkout -b my-new-feature`) on your fork
3. Write code.
4. Write Tests!
5. Commit your changes via `npm run commit`
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request
