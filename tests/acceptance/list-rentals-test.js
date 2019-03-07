import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

// Some of the helpers we'll use commonly are:
// visit - loads a given URL
// click - pretends to be a user clicking on a specific part of the screen
// currentURL - returns the URL of the page we're currently on

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('should show rentals as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });

  test('should link to information about the company.', async function (assert) {
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'should redirect automatically');
  });

  test('should link to contact information.', async function (assert) {
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'should redirect automatically');
  });

  test('should list available rentals.', async function (assert) {
  });

  test('should filter the list of rentals by city.', async function (assert) {
  });

  test('should show details for a selected rental', async function (assert) {
  });
});
