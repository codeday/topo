import React from 'react';
import useSwr from 'swr';
import List, { Item } from 'topo/Atom/List';
import Box, { Grid } from 'topo/Atom/Box';
import Skelly from 'topo/Atom/Skelly';
import Text, { Heading, Link, CopyText } from 'topo/Atom/Text';
import Content from 'topo/Molecule/Content';
import { childrenOfType, makePureBox, pureRef } from 'topo/_utils';
import { useString, apiFetch } from 'topo/utils';

export const CustomLinks = makePureBox('Custom Links');
export const CustomText = makePureBox('CustomText');

const query = `{
  cms {
    sites(where: { type: "Public", display_contains_all: "Footer" }) {
      items {
        sys {
          id
        }
        title
        link
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
  console.log(links);

  return (
    <List>
      {!links ? (
        <>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
          <Item><Skelly /></Item>
        </>
      ) : links.map(({ title, link, sys }) => (
        <Item key={sys.id}><Link href={link} target="_blank" key={link}>{title}</Link></Item>
      ))}
    </List>
  );
};

const Footer = pureRef(({ children }, ref) => {
  const cookiesLink = useString('legal.cookies', <Skelly />);
  const ccpaLink = useString('legal.ccpa', <Skelly />);

  const customLinks = childrenOfType(children, CustomLinks);
  const customText = childrenOfType(children, CustomText);

  return (
    <Content ref={ref}>
      <Grid templateColumns={{ base: '1fr', md: '6fr 3fr 3fr' }} color="current.textLight">
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
            <Link href="https://www.srnd.org/privacy">{cookiesLink}</Link><br />
            <Link href="https://www.srnd.org/privacy/controls" target="_blank">{ccpaLink}</Link>
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
