describe('Тестирование staya', function () {

    it('Ввод правильного логина и пароля', function () {
       cy.visit('https://staya.dog/');
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('mihailaltuskin@gmail.com');
       cy.get('.auth-form > form > [type="password"]').type('02MA25ma+');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.contains('Мои заказы');
       cy.get('button.profile__nav-link').click();
       cy.get('button.box__button.box__button_ok.s-button.s-button_theme-dark').click();
    })   

    it('Ввод правильного логина и неправильного пароля', function () {
       cy.get('.header-bottom__right--link').click()
       cy.get('.auth-form > form > [type="email"]').type('mihailaltuskin@gmail.com');
       cy.get('.auth-form > form > [type="password"]').type('02MA25ma-');
       cy.get('.auth-form__submit > .s-button__content').click();
       cy.get('.error-label')

    })
})