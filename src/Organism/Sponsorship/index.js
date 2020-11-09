import React, { forwardRef } from 'react';
import useSwr from 'swr';
import List, { Item } from 'topo/Atom/List';
import Box from 'topo/Atom/Box';
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
  const { levels } = data?.cms?.programs?.items[0]?.sponsorPerks || {};
  /*
  var LevelsList;
  for (var l in levels) {
    var currentLevel = {};

    LevelsList.push({name: l.name});
  }*/

  // Each level will have certain attributes like 
  /*
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
  }*/


  
  // DEBUG: Print straight to console to ensure data is being queried correctly
  console.log(levels);

  // Return HTML
  return (
    <Box>
      <Heading as="h1">Virtual CodeDay Sponsorships</Heading>
      <Heading as="h4">{(new Date()).getFullYear()}-{(new Date()).getFullYear()+1} School Year</Heading>

      <List>
        <Flex size="100%" justify="left" alignItems="left" flexDirection="row" flexWrap="wrap">
          {!(levels) ? (
            <>
              <Item><Skelly /></Item>
              <Item><Skelly /></Item>
              <Item><Skelly /></Item>
            </>
          ) : Object.keys(levels).map((key, index) => <SponsorBox level={levels[key]}></SponsorBox> )}
        </Flex>
      </List>

    </Box>
  );
};

/*
 * method SponsorBox
 * description: takes an individual level and creates a box for that level
 * params: @level is any given sponsor/level of sponsorship
*/
function SponsorBox({ level }) {
  return (
  <Box marginRight={3} w="275px">
      <Item  key={level.name}>
        <Box borderWidth="2px" rounded="lg"  h="200px">
          <Box borderWidth="2px" p={3} w="100%" roundedTopLeft="lg" roundedTopRight="lg" backgroundColor="#F0E5E6">
            {level.name}
          </Box>
          <Box p={3} w="100%">
            <strong>${level.amount}/{level.amountInterval}</strong><br></br>
            {level.description}
          </Box>
        </Box>
      </Item> 
    
    <PerksGroups items={level.perks} isfirst={level.isFirst}></PerksGroups>
  </Box>
  );
}

/*
 * method PerksGroups
 * description: takes an array of perks from a given level and outputs their respective perks
 * params: perks is a given levels perk list
*/
function PerksGroups({ items, isfirst }) {
  return Object.keys(items).map((key, index) => 
    <Box>
      {isfirst ? (<strong>{items[key].name}</strong>)
      :
      <strong></strong>}
      <Divider h="20px" m="auto" w="90%"></Divider>
      <PerksList perks={items[key]}/>
    </Box>
  );
}


/*
 * method PerksList
 * description: takes an array of perks from a given level and outputs their respective perks
 * params: perks is a given levels perk list
*/
function PerksList({ perks }) {
  return (
    <List>
      {perks ? (perks.items.map((perk) => (
        <Item h="60px" w="80%">{perk.text}</Item>
      ))) : (
        <>
          <Item><Skelly/></Item>
          <Item><Skelly/></Item>
        </>
      )}
      {perks ? (perks.noItems.map((noPerk) => (
        <Item h="60px" w="80%">{noPerk.text}</Item>
      ))) : (
        <>
        <Item><Skelly/></Item>
        <Item><Skelly/></Item>
      </>
      )}
      
    </List>
  );
}


// Actual Sponsorship Object that will be used in external pages
const Sponsorship = forwardRef(({ children }, ref) => {
  return (
    <Content ref={ref} role="contentinfo">
      <SponsorTable/>
    </Content>
  );
});

export default Sponsorship;
