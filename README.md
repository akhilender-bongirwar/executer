# code-verifier

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Functionality

The Code Verifier feature enables you to execute the selected code and receive the output as a comment below. It allows you to quickly test and validate the code you have written by executing it and observing the results in the form of comments.  

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t code-verifier .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> code-verifier
```

## How to use 

- Allow all the permissions to the app which it requires.
- Whenever you have an open pull request to test this app.
- Go to the Files Changed tab.
- Select all the required which you want to execute.
- Then there will be a comment box popping up, simply write the command "/execute".
- This command will execute the selected code and return a new comment below it as an output.


## IMPORTANT NOTICE

The application is currently in the development stage, where the main focus lies on building and refining the logic and functions. At this phase, the implementation of additional features or interfaces has not been prioritized.

## Contributing

If you have suggestions for how code-verifier could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Akhil
