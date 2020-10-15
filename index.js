#!/usr/bin/env node

const { white, cyan, bold, blue } = require("colorette");
const boxen = require("boxen");

// Text + chalk definitions
const work = white(`${blue("Ring, Amazon")} - Senior Frontend Developer`);
const twitter = cyan("https://twitter.com/iosamuel");
const github = cyan("https://github.com/iosamuel");
const site = cyan("https://iosamuel.dev");
const npx = white("npx iosamuel");

const newline = "\n";
const heading = `${white("            Samuel Burbano /")} ${cyan(
  "iosamuel"
)} 🐧`;
const working = `${white(bold("     Work:"))}  ${work}`;
const twittering = `${white(bold("  Twitter:"))}  ${twitter}`;
const githubing = `${white(bold("   GitHub:"))}  ${github}`;
const webing = `${white(bold("      Web:"))}  ${site}`;
const carding = `${white(bold("     Card:"))}  ${npx}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(boxen(output, { padding: 1 }));
