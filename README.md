# @codeday/topo
The CodeDay design system.

## to use with NextJs wrap your Next config with useTopo

```js
const { withTopo } = require('@codeday/topo/Next');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTopo({
  /* config options here */
})

module.exports = nextConfig
```

this will replace default links with NextJs links wherever possible

## Docs
To run the docs run 
```
docker build -t topo .
docker run -p 3000:3000 topo
```

## Upgrading

To bulk-update most of the imports from a project using the old version of topo the new import structure, here are a few helpful regular expressions:

Replace things like `import Box from '@codeday/topo/Atom/Box';` with `import { Box } from '@codeday/topo/Atom';`:
```
find: import (.*) from '@codeday/topo/(Atom|Molecule|Organism)/(\1)';?
replace: import { $1 } from '@codeday/topo/$2';
```

Replace things like `import { Heading } from '@codeday/topo/Atom/Text';` with `import { Heading } from '@codeday/topo/Atom';`
```
find: import { ?(.*?) ?} from '@codeday/topo/(Atom|Molecule|Organism)/\w+';?
replace: import { $1 } from '@codeday/topo/$2';
```

There are a few edge cases these expressions don't cover, notably things like `import Text, { Heading } from '@codeday/topo/Atom/Text';`

Find uncovered statements in need of manual review:
```
import .* from '@codeday/topo/(Atom|Molecule|Organism)/
```

It is still reccomended to test all pages and components after executing these expressions, as there are bound to be edge cases in which these generic statements do not apply.
