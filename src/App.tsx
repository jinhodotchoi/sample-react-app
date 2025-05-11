import { useState } from 'react';

type Lang = 'en' | 'ko' | 'jp' | 'cn';

export function App() {
  const [lang, setLang] = useState<Lang>('en');

  const message = lang === 'en' ? 'Hello World' : lang === 'ko' ? '안녕하세요!' : lang === 'jp' ? 'こんにちは!' : '你好!';

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
