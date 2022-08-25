import React, { useState, useEffect } from 'react';
import { Image, Text, Box } from 'topo/Atom';
import { apiFetch } from 'topo/utils';
import { ChakraProps } from '@chakra-ui/react';

const GITHUB_AUTHORS_QUERY = `
query GithubAuthorsQuery($owner: String, $repository: String!, $path: String, $branch: String) {
  github {
    contributors(owner: $owner, repository: $repository, path: $path, branch: $branch) {
      account {
        username
        name
        picture
      }
    }
  }
}`

export interface GithubAuthorsProps extends ChakraProps {
  owner?: string
  repository: string
  branch?: string
  path?: string
  title?: string
  titlePlural?: string
  max?: number
}

interface ContributorInfo {
  account?: {
    username: string
    name: string
    picture: string
  }
}

export function GithubAuthors({ owner, repository, branch, path, title, titlePlural, max, ...props }: GithubAuthorsProps) {
  const displayMax = max || 5;
  const [authors, setAuthors] = useState<ContributorInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!repository) return;
      setLoading(true);
      const resp = await apiFetch(GITHUB_AUTHORS_QUERY, { owner, repository, branch, path }, {});
      const respA = (resp?.github?.contributors || [])
        .filter((a: ContributorInfo) => a.account?.name)
        .filter((a: ContributorInfo) => (a.account!.username !== 'tylermenezes') || (resp!.github!.contributors.length <= 2));
      setAuthors(respA);
      setLoading(false);
    })();
  }, [owner, repository, branch, path]);

  if (loading && repository) return <Box {...props}><Text d="inline">&nbsp;</Text></Box>
  if (!repository || (!authors || authors.length === 0)) return <></>;

  const exceedsMax = authors.length > displayMax;

  return (
    <Box
      as="a"
      href={`https://github.com/${owner || 'codeday'}/${repository}${path ? `/blob/${branch || 'main'}/${path}` : ''}`}
      target="_blank"
      fontFamily="monospace"
      color="current.textLight"
      {...props}
    >
      <Text d="inline-block">{authors.length !== 1 ? (titlePlural || title || 'Authors:') : (title || 'Author:')}</Text>
      {authors.slice(0, displayMax).map((a, i) => {
        const secondToLast = i === authors.length - 2;
        const last = i === authors.length - 1;
        const displayComma = (!last && authors.length > 2) || exceedsMax;
        const displayAnd = (secondToLast && !exceedsMax) || (last && exceedsMax);
        return (
          <Box d="inline-block" pl={2}>
            <Image d="inline" h="1em" rounded="full" alt="" mr={1} bgColor="white" src={a.account!.picture} />
            {a.account!.name}{displayComma && ','}{displayAnd && ' and'}{' '}
          </Box>
        );
      })}
      {exceedsMax && `and ${authors.length - displayMax} other${(authors.length - displayMax) !== 1 ? 's' : ''}`}
    </Box>
  );
}
