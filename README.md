# Dealls Assesment

In this repository, there are answer for chalange 1 and 2

- Challange 1 you can access here _https://github.com/Rezaad94/dealls_assesment/tree/main/challange2_
- Challange 2 you can access here _https://github.com/Rezaad94/dealls_assesment/blob/main/challange1.md_

# How to play with challange 2 
## 1. Make sure your system requirements
- Latest version of Node.js 18, 20 or 22.
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- macOS 14 Ventura, or later.
- Debian 12, Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.

## 2. Clone git repository
- `git clone https://github.com/Rezaad94/dealls_assesment.git`
- `cd dealls_assesment`
- `cd challange2`

## 3. Install Dependencies
- `npm install`

## 4. Install Playwright
- `npx playwright install`

## 5. Running test
- Run all test headless 
    - `npx playwright test`
- Run all test headed
    - `npx playwright test --headed`
- Run test specific 
    - `npx playwright test tests/login.spec.ts`

## 6. Show report
- `npx playwright show-report`

## 7. Folder Structure
```plaintext 
challange2/
├── .github/workflow/
│   └──playwright.yml
├── pages/
│   ├── login.js
│   └── search.js
├── tests/
│   ├── login.spec.js
│   └── search.spec.js
├── playwright.config.js
├── package-lock.json
└── package.json
