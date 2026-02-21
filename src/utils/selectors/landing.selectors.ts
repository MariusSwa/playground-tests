import { Page } from '@playwright/test';



export const landingSel = {

loginEmail: (page: Page) =>
    page.getByLabel('Email'),

    loginLink: (page: Page) =>
    page.getByRole('link', { name: 'Login' }),

    registerLink: (page: Page) =>
    page.getByTestId('register-lnk'),

    testDuoLink: (page: Page) =>
    page.getByRole('link', { name: 'TestDuo Main' }),

    howItWorksLink: (page: Page) =>
    page.getByRole('link', { name: 'How it works' }),

    whatToExpectLink: (page: Page) =>
    page.getByRole('link', { name: 'What to expect' }),

    registerNowLink: (page: Page) =>
    page.getByRole('link', { name: 'Register Now!' }),

    docsLink: (page: Page) =>
    page.getByRole('link', { name: 'Docs' }),

    feedBackLink: (page: Page) =>
    page.getByRole('link', { name: 'Feedback' }),

    statusLink: (page: Page) =>
    page.getByRole('link', { name: 'Status' }),

    // Sections
    howItWorksSection: (page: Page) =>
    page.getByRole('heading', { name: 'How it works' }),

    whatToExpectSection: (page: Page) =>
    page.getByRole('heading', { name: 'What to expect' }),

};
