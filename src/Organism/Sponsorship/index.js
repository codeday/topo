import React, { forwardRef } from 'react';
import useSwr from 'swr';
import List, { Item } from 'topo/Atom/List';
import Box, { Grid } from 'topo/Atom/Box';
import Skelly from 'topo/Atom/Skelly';
import Text, { Heading, Link, CopyText } from 'topo/Atom/Text';
import Content from 'topo/Molecule/Content';
import { childrenOfType, makePureBox } from 'topo/_utils';
import { useString, apiFetch } from 'topo/utils';


const query = `{
  cms {
    programs {
      items {
        sponsorPerks
      }
    }
  }
}`;

const SponsorTable = () => {
  const { data, error } = useSwr(
    query,
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const sponsorData = data?.cms?.programs?.items;

  console.log(sponsorData);

  return (
    <Text>Sponsorship table</Text>
    /*
    <List>
      {!sponsorData ? (
        <>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
        </>
      ) : sponsorData.map(({ sponsorPerks }) => (
        <Item><Link target="_blank" rel="noopener">{sponsorPerks}</Link></Item>
      ))}
    </List>
    */
  );

};

const Sponsorship = forwardRef(({ children }, ref) => {

  return (
    <Content ref={ref} role="contentinfo">
      <Grid templateColumns={{ base: '1fr', md: '6fr 3fr 3fr' }} color="current.textLight">
        <SponsorTable />
      </Grid>
    </Content>
  );
});

Sponsorship.propTypes = Box.propTypes;
Sponsorship.defaultProps = Box.defaultProps;
export default Sponsorship;
