describe('Тестирование staya', function () {

    it('Ввод правильного логина и пароля', function () {
       cy.visit('https://www.rzd.ru/');
       cy.get('.login-li > .j-auth-open').click()
       cy.get('.j-form-auth > .form__groups > :nth-child(1) > label.form__group > .form-control').type('Михаил Алтушкин');
       cy.get('div.form__group > label > .form-control').type('02MA25ma-');
       cy.get('.j-form-auth > .j-auth-buttons > .btn-primary').click()
       cy.contains('Михаил Алтушкин');
    })

    it('Купить билет', function () {
        cy.get('#direction-from').type('Москва');
        cy.get('#direction-to').type('Саранск');
        cy.get('#datepicker-from').type('31.12.2022');
        cy.get('.rzd-button').click()
        cy.get('.E2E_TEST_SEARCH_RESULTS_CARD_RAILWAY_0 > .container > .card__body').click()
        cy.get(':nth-child(3) > .ui-kit-radio__label > .ui-kit-radio__content > rzd-railway-service-class-selection-item > :nth-child(1) > .col-sm-4 > .railway-service-class-selection-item__head > .railway-service-class-selection-item__title-container > .railway-service-class-selection-item__radio-icon').click()
        cy.get('.railway-service-class-selection-footer__panel--static > .railway-service-class-selection-footer__container > .railway-service-class-selection-footer__submit-button > .button--terminal').click()
        cy.get('.button--terminal').click()
        cy.contains('Выберите, пожалуйста, место');
        cy.get('.car-scheme-header__buttons__toggle-view-mode-btn > .icon-only--md').click()
        cy.get('.checkbox__box').click()
        cy.get('.button--terminal').click()
       
    })

})