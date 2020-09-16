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
    <Text>
      <Heading as="h1">Virtual CodeDay Sponsorships</Heading>
      <Heading as="h4">{(new Date()).getFullYear()}-{(new Date()).getFullYear()+1} School Year</Heading>
    </Text>





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
      <SponsorTable />
    </Content>
  );
});

Sponsorship.propTypes = Box.propTypes;
Sponsorship.defaultProps = Box.defaultProps;
export default Sponsorship;
