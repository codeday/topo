import React, { forwardRef } from 'react';
import useSwr from 'swr';
import List, { Item } from 'topo/Atom/List';
import Box, { Grid } from 'topo/Atom/Box';
import Skelly from 'topo/Atom/Skelly';
import Text, { Heading, Link, CopyText } from 'topo/Atom/Text';
import Content from 'topo/Molecule/Content';
import { childrenOfType, makePureBox } from 'topo/_utils';
import { useString, apiFetch } from 'topo/utils';

export const CustomLinks = makePureBox('Custom Links');
export const CustomText = makePureBox('CustomText');

const query = `{
  {
    cms {
      programs {
        items {
          sponsorPerks
        }
      }
    }
  }
}`;

const StandardLinks = () => {
  const { data, error } = useSwr(
    query,
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const links = data?.cms?.sites?.items;


};

const Sponsorship = () => {
  const sponsorArrayWithDataInIt = [];

  const items = [];

  for (const [index, value] of sponsorArrayWithDataInIt.entries()) {
    items.push(
      <Box gridRow={{ base: 3, md: 1 }} marginTop={{ base: 6, md: 0 }}>
        <Box>
          <Text>Testing out the Sponsorship Component</Text>
          <li key={index}>{value}</li>
        </Box>
      </Box>
    )
  }

  return (
    <Text>Why is this text not showing up in the topo documentation?</Text>
    <Grid templateColumns={{ base: '1fr', md: '6fr 3fr 3fr' }} color="current.textLight">
      {items}
    </Grid>
  );
};

Sponsorship.propTypes = Box.propTypes;
Sponsorship.defaultProps = Box.defaultProps;
export default Sponsorship;
