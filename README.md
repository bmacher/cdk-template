[![Node CI](https://github.com/bmacher/cdk-template/workflows/Node%20CI/badge.svg)](https://github.com/bmacher/cdk-template/actions?query=workflow%3A%22Node+CI%22)
[![GitHub release](https://img.shields.io/github/release/bmacher/cdk-template.svg)](https://GitHub.com/bmacher/cdk-template/releases/)
[![GitHub license](https://img.shields.io/github/license/bmacher/cdk-template.svg)](https://github.com/bmacher/cdk-template/blob/master/LICENSE)
[![Dependabot Enabled](https://api.dependabot.com/badges/status?host=github&repo=bmacher/cdk-template)](https://github.com/bmacher/cdk-template/network/updates)

# CDK Template

## Implementation Guidelines

<<<<<<< HEAD
  - Avoid concrete resource names as long as possible to prevent name clashes
  - Use [resource-names.ts](lib/shared/resource-names.ts) to define name of resources
=======
>>>>>>> feat: Inital setup
  - Use destructoring imports over `* as foobar` to get proper intellisense
  - Name the file of a stack with suffix `-stack.ts` but omit suffixes on constructs
  - Use git [commit message convention](https://github.com/digital-production-platform/isi-ui-infra/blob/master/.github/commit-convention.md)
  - ...

## Sharing resources between stacks

<<<<<<< HEAD
Resources shared across stacks should be exchanged either directly or if not possible with SSM Parameter or concrete names. There are pseudo code snippets under [Resolve dependencies](#resolve-dependencies) to how it could be implemented. Concrete names should be used in case of cross account deployments (e.g. granting some permissions to a role). Directly resolved dependencies can be traced directly in the code but those with SSM Parameter or concrete names not, however you could express those with filling the table under [Dependencies between stacks](#dependencies-between-stacks). I would recommend to use a single place for parameter and resource names and import them from there (e.g. [lib/shared/resource-names.ts](lib/shared/resource-names.ts))


Anyways, be sure to follow this order when exchanging resources between stacks.

  1. Directly
  2. SSM Parameter
  3. Concrete names (can lead to name clashes)

### Dependencies between stacks

Between | What? | Resolved with
--- | --- | ---
StackA &rarr; StackB | some resource | SSM Parameter
StackA (Account1) &rarr; StackC (Account2) | some resource | Concrete name

### Resolve dependencies

#### Directly

```ts
class StackA {
  puplic readonly resource: Resource;

  constructor() {
    this.resource = new Resource();
  }
}

interface StackBProps {
  resource: Resource,
}

class StackB {
  constructor(props: StackBProps) {
    // Do something with props.resouce from StackA
  }
}

const stack = new StackA();
new StackB({ resouce: stack.resource })
```

#### SSM Parameter

```ts
import ssmParamNames from 'shared';

class StackA {
  constructor() {
    const resource = new Resource();

    new StringParameter({
      parameterName: ssmParamNames.PARAM_NAME,
      strinValue: resource.Arn,
    });
  }
}

class StackB {
  constructor() {
    const bucket = new Bucket();
    const resourceArn = StringParameter.fromStringParameterName(ssmParamNames.PARAM_NAME);

    bucket.grantRead(Resource.fromArn(resourceArn.stringValue));
  }
}
```

#### Concrete name

```ts
import roleNames from 'shared';

class StackA {
  constructor() {
    new Role({
      roleName: roleNames.ROLE_XYZ,
    });
  }
}

class StackB {
  constructor() {
    const bucket = new Bucket();
    // Could also use new ArnPrincipal()
    const role = Role.fromRoleArn(`arn:aws:iam::${this.account}:role/${roleNames.ROLE_XYZ}`)

    bucket.grantRead(role);
  }
}
```
=======
Work in progress!
>>>>>>> feat: Inital setup
