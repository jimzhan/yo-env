#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const shell = require('shelljs')

const env = process.env.NODE_ENV || 'development'
const evt = process.env.npm_lifecycle_event
const cmd = [evt, env].join(':')

const pkg = require(path.resolve(process.cwd(), 'package.json'))
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

if (!(pkg.scripts && pkg.scripts[cmd])) {
  console.error(`${chalk.red('[var-env]')} "${cmd}" is missing`)
  process.exit(1)
}

shell.exec(`{npm} run ${cmd}`, { silent: false })

