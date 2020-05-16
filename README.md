# PittsCurb-Service

> This web service provides the functionality for the Admin and Consumer users of PittsCurb application.
> This application will also serve as a proxy to connect to an SMS service

## Development setup

To run locally:

```
yarn dev
```

To run linter:

```
yarn tslint
```

To run formatter:

```
yarn prettier:write
```

## Deployment
Approved pull requests will trigger a build deploy pipeline to AWS

## Contributing
Create a fork of this repository to your personal GitHub account to develop feature branches that can be merged via Pull Requests

!Please use yarn!. Do not use npm.

This repo will autoformat your code on commit to enforce formatting standards.

1. Fork repository to your GitHub account
2. Create your branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar because foo supports user'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request back to this project
