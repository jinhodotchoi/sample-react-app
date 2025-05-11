import { useState } from 'react';
import { value } from './utils/value';

type Lang = 'en' | 'ko' | 'jp' | 'cn';

export function App() {
  const [lang, setLang] = useState<Lang>('en');

  const message = value(() => {
    switch (lang) {
      case 'en':
        return 'Hello World';
      case 'ko':
        return '안녕하세요!';
      case 'jp':
        return 'こんにちは!';
      case 'cn':
        return '你好!';
      default:
        throw new Error(`Unsupported language: ${lang}`);
    }
  });

  const options: { value: Lang; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'ko', label: '한국어' },
    { value: 'jp', label: '日本語' },
    { value: 'cn', label: '中文' },
  ];

  return (
    <div>
      <h1>Language Selector</h1>
      <hr />
      <div>
        <p>{message}</p>
        <select value={lang} onChange={(e) => setLang(e.target.value as Lang)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
