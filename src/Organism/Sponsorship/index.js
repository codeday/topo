import React, { forwardRef } from 'react';
import useSwr from 'swr';
import List, { Item } from 'topo/Atom/List';
import Box, { Grid } from 'topo/Atom/Box';
import Divider from 'topo/Atom/Divider';
import { Flex } from "@chakra-ui/core"
import Skelly from 'topo/Atom/Skelly';
import Text, { Heading, Link, CopyText } from 'topo/Atom/Text';
import Content from 'topo/Molecule/Content';
import { childrenOfType, makePureBox } from 'topo/_utils';
import { useString, apiFetch } from 'topo/utils';

// GraphQL Query, pulls data from the sponsorship programs area
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

  // Pull data from GraphQL Query from above
  const { data, error } = useSwr(
    query,
    apiFetch,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  // Let data be set equal to the variables levels and perkGroups respectively
  const { levels, perkGroups } = data?.cms?.programs?.items[1]?.sponsorPerks || {};
  const count = 0;
  /*
  var LevelsList;
  for (var l in levels) {
    var currentLevel = {};

    LevelsList.push({name: l.name});
  }*/

  // Each level will have certain attributes like 
  var LevelsList = [];
  if (levels) {
    Object.keys(levels).map(function(key, index) {
      var singleObject = {};

      // Individual Level attributes
      singleObject['name'] = levels[key].name;
      singleObject['description'] = levels[key].description;
      singleObject['amount'] = levels[key].amount;
      singleObject['amountInterval'] = levels[key].amountInterval;

      // Level text for each section (ex: Promotion, Swag, and Direct Engagement)
      for (var perk in perkGroups) {
        console.log(perkGroups[0].name);
      }

      LevelsList.push(singleObject);
      //console.log(levels[key].name);
    });
  }


  
  // DEBUG: Print straight to console to ensure data is being queried correctly
  console.log(levels, perkGroups);

  // Return HTML
  return (
    <Box>
      <Heading as="h1">Virtual CodeDay Sponsorships</Heading>
      <Heading as="h4">{(new Date()).getFullYear()}-{(new Date()).getFullYear()+1} School Year</Heading>

      <List>
        <Flex>
        {!(levels && perkGroups) ? (
          <>
            <Item><Skelly /></Item>
            <Item><Skelly /></Item>
            <Item><Skelly /></Item>
          </>
        ) : Object.keys(levels).map((key, index) =>
        <Item key={levels[key].name}>
          <Box borderWidth="2px" rounded="lg" m={2} h="200px">
            <Box borderWidth="2px" p={3} w="100%" roundedTopLeft="lg" roundedTopRight="lg" backgroundColor="#F0E5E6">
              {levels[key].name}
            </Box>
            <Box p={3} w="100%">
              <strong>${levels[key].amount}/{levels[key].amountInterval}</strong><br></br>
              {levels[key].description}
            </Box>
          </Box>

          <strong>Promotion</strong>
          <Divider m="auto" w="90%"></Divider>
        </Item>

        )}
        </Flex>
      </List>
    </Box>
  );
};

// Actual Sponsorship Object that will be used in external pages
const Sponsorship = forwardRef(({ children }, ref) => {
  return (
    <Content ref={ref} role="contentinfo">
      <SponsorTable />
    </Content>
  );
});

export default Sponsorship;
