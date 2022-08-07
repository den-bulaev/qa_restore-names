'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it(`should add 'firstName' field to user`, () => {
    const users = [{ fullName: 'Boba Fett' }, { fullName: 'Obi-wan Kenobi' }];

    restoreNames(users);

    expect(users).toEqual([{
      fullName: 'Boba Fett', firstName: 'Boba',
    }, {
      fullName: 'Obi-wan Kenobi', firstName: 'Obi-wan',
    }]);
  });

  it(`should work with inner extra spaces`, () => {
    const users = [{ fullName: 'Boba   Fett' }];

    restoreNames(users);

    expect(users).toEqual([{
      fullName: 'Boba   Fett', firstName: 'Boba',
    }]);
  });

  it(`should work with outer extra spaces`, () => {
    const users = [{ fullName: '  Boba Fett  ' }];

    restoreNames(users);

    expect(users).toEqual([{
      fullName: '  Boba Fett  ', firstName: 'Boba',
    }]);
  });

  it(`should not overwrite 'firstName' field`, () => {
    const users = [{
      fullName: 'Bob Fett', firstName: 'Boba',
    }];

    restoreNames(users);

    expect(users).toEqual([{
      fullName: 'Bob Fett', firstName: 'Boba',
    }]);
  });

  // write tests here
});
