# Learning record

Date: 2026-11-13

## Search scope regression

The first implementation searched only resource names. Running `node --test` failed the description-search assertion: expected `Peer Learning Hub`, received `[]` (1 of 2 tests failed). The fixed implementation searches names, descriptions, locations, and tags and trims the query.

After the change, `node --test` reported `tests 2`, `pass 2`, `fail 0`, `skipped 0` (exit code 0). The same check also covers a location query and combining text with a category filter. These results are from the local Node.js 24.22.1 runtime on 2026-11-13.
