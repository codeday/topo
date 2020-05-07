import React, { useEffect, useState } from 'react';
import List, { Item } from 'topo/Atom/List';
import Box, { Grid } from 'topo/Atom/Box';
import Skelly from 'topo/Atom/Skelly';
import Text, { Heading, Link, CopyText } from 'topo/Atom/Text';
import Content from 'topo/Molecule/Content';
import { childrenOfType, makePureBox, pureRef } from 'topo/_utils';
import { useTheme } from 'topo/utils';

export const CustomLinks = makePureBox('Custom Links');
export const CustomText = makePureBox('CustomText');

const StandardLinks = () => {
  const { contentful } = useTheme();
  const [links, setLinks] = useState(null);
  useEffect(() => {
    if (!contentful) return;
    const base = `https://cdn.contentful.com/spaces/${contentful.spaceId}/environments/master`;
    const endpoint = `/entries?content_type=site&access_token=${contentful.token}`;

    (async () => {
      const json = await (await fetch(`${base}${endpoint}`)).json();
      setLinks(json.items.map((i) => i.fields).filter((i) => i.type === 'Public' && i.display.includes('Footer')));
    })();
  }, [contentful]);

  return (
    <List>
      {!links ? (
        <>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
        </>
      ) : links.map(({ title, link }) => (
        <Item><Link href={link} target="_blank" key={link}>{title}</Link></Item>
      ))}
    </List>
  );
};

const Footer = pureRef(({ children }, ref) => {
  const customLinks = childrenOfType(children, CustomLinks);
  const customText = childrenOfType(children, CustomText);

  return (
    <Content ref={ref}>
      <Grid templateColumns={{ base: '1fr', md: '6fr 3fr 3fr' }} color="textLight">
        <Box gridRow={{ base: 3, md: 1 }} marginTop={{ base: 6, md: 0 }}>
          <Box>
            { customText.length > 0 ? customText : (
              <Text>
                Copyright &copy; 2009 &ndash; {(new Date()).getFullYear()} CodeDay.<br />
                A 501(c)(3) nonprofit. EIN: <CopyText>26-4742589</CopyText>.<br />
                <Link href="tel:18886077763">(888) 607-7763</Link>
              </Text>
            )}
          </Box>
          <Box marginTop={4}>
            <Link href="https://www.srnd.org/privacy">Privacy &amp; Cookies</Link><br />
            <Link href="https://www.srnd.org/privacy/controls" target="_blank">
              Do Not Sell My Personal Information
            </Link>
          </Box>
        </Box>
        <Box gridRow={{ base: 2, md: 1 }} marginTop={{ base: customLinks.length > 0 && 6, md: 0 }}>
          {customLinks.length > 0 && <Heading as="h2" fontSize="xl">More</Heading>}{customLinks}
        </Box>
        <Box>
          <Heading as="h2" fontSize="xl">Resources</Heading>
          <StandardLinks />
        </Box>
      </Grid>
    </Content>
  );
});
Footer.propTypes = Box.propTypes;
Footer.defaultProps = Box.defaultProps;
export default Footer;
