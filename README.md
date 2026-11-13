# Campus Resource Finder

A small responsive campus directory built with semantic HTML, CSS, and plain JavaScript. Search looks across resource names, descriptions, locations, and tags; category filters combine with search. The app reports result counts and shows a helpful empty state.

## Run

Open `index.html` in a modern browser, or serve the folder with any static file server. The sample campus entries are fictional and should be replaced with verified local information before real use.

## Checks

Requires Node.js 20 or newer; no package installation is needed.

```sh
npm test
```

The tests cover text search across fields and the combined filter path. The markup uses native labels and controls, a skip link, visible focus styles, and an announced result status. User input is rendered as text, not parsed as HTML.

## Learning record

The first search helper matched only resource names. A focused test for “programming” in a description returned no result. The helper was then expanded to search descriptions, locations, and tags; the same test now passes. Run `node --test` to reproduce the fixed behavior. This example is a small local test, not a production usability study.

## Scope

This is a static frontend demo with a fictional in-memory directory. It has no campus data feed, authentication, server, or booking integration.
