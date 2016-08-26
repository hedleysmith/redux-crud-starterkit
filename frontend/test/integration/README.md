# Integration Tests

Integration tests are concerned with the way in which different smaller parts of a system work with each other. The 'smaller parts' are usually tested in isolation with unit tests and will use 'test doubles' (e.g mocks and stubs) to simulate the response from other parts of the codebase.

### Examples of integration tests:

* How multiple components work together
* How components and state management interact (e.g feed a fully loaded store some mocked state, check that it propagates properly and all transforms are correctly applied / click a button which updates the store state, check it propagates to other components)
* How different parts of a state management system interact with each other

### What not to include in integration tests:

* Actual external API calls (these are tested in 'component' tests or 'end to end' tests)
* Fully-loaded browser based interactions (these are covered in 'acceptance' app level tests)
