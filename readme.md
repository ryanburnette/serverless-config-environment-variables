# serverless-config-environment-variables

Testing out configuring the environment on Serverless.

These two lines in `serverless.yml` do the job.

```yml
...
  stage: ${opt:stage, 'dev'}
  environment: ${file(./serverless.config.${self:provider.stage}.yml)}
```

This reads in `serverless.config.dev.yml`, replace `dev` with the desired
stage, and sets those environment variables accordingly.

Deploy this and see `process.env` in the response to the HTTP event.
