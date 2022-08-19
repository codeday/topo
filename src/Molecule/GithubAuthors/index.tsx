import React, { useState, useEffect } from 'react';
import { Image, Text, Box } from 'topo/Atom';
import { apiFetch } from 'topo/utils';
import { ChakraProps } from '@chakra-ui/react';

const GITHUB_AUTHORS_QUERY = `
query GithubAuthorsQuery($owner: String, $repository: String!, $path: String!, $branch: String) {
  github {
    contributors(owner: $owner, repository: $repository, path: $path, branch: $branch) {
      account {
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
  path: string
  title: string
  titlePlural: string
}

interface ContributorInfo {
  account?: {
    name: string
    picture: string
  }
}

export function GithubAuthors({ owner, repository, branch, path, title, titlePlural,...props }: GithubAuthorsProps) {
  const [authors, setAuthors] = useState<ContributorInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!repository || !path) return;
      setLoading(true);
      const resp = await apiFetch(GITHUB_AUTHORS_QUERY, { owner, repository, branch, path }, {});
      setAuthors(resp?.github?.contributors || []);
      setLoading(false);
    })();
  }, [owner, repository, branch, path]);

  if (loading && repository && path) return <Box {...props}><Text d="inline">&nbsp;</Text></Box>
  if (!repository || !path || (!authors || authors.length === 0)) return <></>;

  return (
    <Box {...props}>
      <Text d="inline-block">{authors.length !== 1 ? (titlePlural || 'Authors:') : (title || 'Author:')}</Text>
      {authors.filter((a) => a?.account?.name).slice(0,5).map((a) => (
        <Box d="inline-block" pl={2}>
          <Image d="inline" h="1em" rounded="full" alt="" mr={1} bgColor="white" src={a.account!.picture} />
          {a.account!.name}
        </Box>
      ))}
    </Box>
  );
}
