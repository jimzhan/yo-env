#!/usr/bin/env node
const path = require('path')
const shell = require('shelljs')

const pkg = require(path.resolve(process.cwd(), 'package.json'))
const env = process.env.NODE_ENV || 'development'
const evt = process.env.npm_lifecycle_event
const cmd = [evt, env].join(':')

const script = (pkg.scripts && pkg.scripts[cmd]) ? cmd : evt

shell.exec(`npm run ${script}`, { silent: false })
