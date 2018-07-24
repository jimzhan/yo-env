#!/usr/bin/env node
const path = require('path')
const chalk = require('chalk')
const shell = require('shelljs')

/* --- platform & package.json's meta --- */
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const pkg = require(path.resolve(process.cwd(), 'package.json'))

/* --- composite script to be executed --- */
const env = process.env.NODE_ENV || 'development'
const evt = process.env.npm_lifecycle_event
const key = [evt, env].join(':')

/* --- optional arguments --- */
const args = process.argv.slice(2).join(' ')

if (!(pkg.scripts && pkg.scripts[key])) {
  console.error(`${chalk.red('[yo-env]')} "${key}" is missing`)
  process.exit(1)
}

const cmd = args ? `${npm} run ${key} -- ${args}` : `${npm} run ${key}`

shell.exec(cmd, { silent: false })

