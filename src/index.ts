export class CaesarScrambler {
  private _text: string;

  private _encryptionText: string;

  private _step: number;

  private readonly russianLetters: string[] = [
    'а',
    'б',
    'в',
    'г',
    'д',
    'е',
    'ё',
    'ж',
    'з',
    'и',
    'й',
    'к',
    'л',
    'м',
    'н',
    'о',
    'п',
    'р',
    'с',
    'т',
    'у',
    'ф',
    'х',
    'ц',
    'ч',
    'ш',
    'щ',
    'ъ',
    'ы',
    'ь',
    'э',
    'ю',
    'я',
  ];

  private readonly englishLetters: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'x',
    'y',
    'z',
  ];

  private readonly languages: string[] = ['russian', 'english'];

  private selectedLanguages: string[];

  constructor(text: string = '', step: number = 3, selectedLanguages: string[] = []) {
    this._text = text;
    this._encryptionText = text;
    this._step = step;
    this.selectedLanguages = selectedLanguages;
    if (selectedLanguages.length === 0) {
      this.selectedLanguages = this.languages;
    }
  }

  getText(): string {
    return this._text;
  }

  setText(text: string = '') {
    this._text = text;
    this._encryptionText = text;
  }

  getStep(): string {
    return this._text;
  }

  setStep(text: string = '') {
    this._text = text;
  }

  enumLanguages(encryption: boolean = true) {
    this.selectedLanguages.forEach((element) => {
      switch (element) {
        case 'english':
          this.encryptionByLanguage(this.englishLetters, encryption);
          break;

        case 'russian':
          this.encryptionByLanguage(this.russianLetters, encryption);
          break;
      }
    });

    return this._encryptionText.replace(new RegExp('~!!~', 'g'), '');
  }

  encryptionByLanguage(letters: string[], encryption: boolean = true) {
    const countOriginal = letters.length;

    let currentKey;

    for (let count = 0; count < countOriginal; count++) {
      if (encryption === true) {
        currentKey = count + this._step;
      } else {
        currentKey = count - this._step;
      }

      if (letters[currentKey] === undefined) {
        if (encryption === true) {
          currentKey = currentKey - countOriginal;
        } else {
          currentKey = currentKey + countOriginal;
        }
      }
      this._encryptionText = this._encryptionText.replace(
        new RegExp(letters[count] + '(?!~!!~)', 'g'),
        letters[currentKey] + '~!!~',
      );
      this._encryptionText = this._encryptionText.replace(
        new RegExp(letters[count].toUpperCase() + '(?!~!!~)', 'g'),
        letters[currentKey].toUpperCase() + '~!!~',
      );
    }
  }

  encryption() {
    return this.enumLanguages(true);
  }

  decryption() {
    return this.enumLanguages(false);
  }
}
