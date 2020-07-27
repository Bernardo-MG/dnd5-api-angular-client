# DnD5 API Angular Client

An example REST client made with Angular. Using the [DnD5e API][dnd5api].

## Features

- Angular
- REST queries

## Check it

There is an [online demo site][demo-site] which always reflects the latest version, taken from the master branch.

And a [development demo site][demo-site-development], taken from the development branch.

## Usage

### Prerequisites

- Angular

### Building the project

This builds the development version:

```
ng build
```

And this the production version:

```
ng build --prod
```

### Running tests

To run the unit tests:

```
ng test
```

For the end to end tests:

```
ng e2e
```

## Deploying locally

The project can be deployed locally for testing:

```
ng serve
```

It will be available on `http://localhost:4200/`. Changes will be reloaded automatically.

## Collaborate

Any kind of help with the project will be well received, and there are two main ways to give such help:

- Reporting errors and asking for extensions through the issues management
- or forking the repository and extending the project

### Issues management

Issues are managed at the GitHub [project issues tracker][issues], where any Github user may report bugs or ask for new features.

### Getting the code

If you wish to fork or modify the code, visit the [GitHub project page][scm], where the latest versions are always kept. Check the 'master' branch for the latest release, and the 'develop' for the current, and stable, development version.

## License

The project has been released under the [MIT License][license].

[issues]: https://github.com/Bernardo-MG/dnd5-api-angular-client/issues
[license]: http://www.opensource.org/licenses/mit-license.php
[scm]: https://github.com/Bernardo-MG/dnd5-api-angular-client

[dnd5api]: http://www.dnd5eapi.co/

[demo-site]: https://docs.bernardomg.com/dnd5-api-angular-client
[demo-site-development]: https://docs.bernardomg.com/development/dnd5-api-angular-client
