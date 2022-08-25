import Eco from "@codeday/topocons/Icon/Eco";
import React, { forwardRef, ReactNode } from "react";
import useSwr from "swr";
import { childrenOfType, makePureBox } from "topo/_utils";
import {
  Box,
  CopyText,
  Grid,
  Heading,
  ListItem,
  Link,
  List,
  Skelly,
  Text,
} from "topo/Atom";
import { Content, GithubAuthors } from "topo/Molecule";
import { apiFetch, useString } from "topo/utils";
import { Discord, Instagram, Linkedin, Twitter } from "./SocialLogos";
import { useQuery } from "topo/Theme";
import { ChakraProps } from "@chakra-ui/react";

export const CustomLinks = makePureBox("Custom Links");
export const CustomText = makePureBox("CustomText");

const StandardLinks = () => {
  const links = useQuery<{ sys: { id: string }, link: string, title: string }[] | undefined>('cms.sites.items');

  return (
    <List>
      {!links ? (
        <>
          <ListItem>
            <Skelly />
          </ListItem>
          <ListItem>
            <Skelly />
          </ListItem>
          <ListItem>
            <Skelly />
          </ListItem>
        </>
      ) : (
        links.map(({ title, link, sys }: any) => (
          <ListItem key={sys.id}>
            <Link href={link} target="_blank" rel="noopener" key={link}>
              {title}
            </Link>
          </ListItem>
        ))
      )}
    </List>
  );
};

export interface FooterProps extends ChakraProps {
  repository?: string
  owner?: string
  branch?: string
  children: ReactNode
}

const Footer = forwardRef(({ children, repository, owner, branch, ...props }: FooterProps, ref) => {
  const cookiesLink = useString("legal.cookies", <Skelly />);
  const ccpaLink = useString("legal.ccpa", <Skelly />);
  const ecoLink = useString("eco.link", <Skelly />);

  const customLinks = childrenOfType(children, CustomLinks);
  const customText = childrenOfType(children, CustomText);

  return (
    <Content ref={ref as React.MutableRefObject<any>} role="contentinfo" {...props}>
      {repository && (
        <Box mb={4}>
          <Text fontFamily="monospace" color="current.textLight">
            Made with 💖 by robots running our{' '}
            <Link href="https://github.com/codeday" target="_blank">open-source software</Link> and{' '}
            <Link href="https://graph.codeday.org/" target="_blank">GraphQL APIs</Link>.
          </Text>
          <GithubAuthors
            repository={repository}
            owner={owner}
            branch={branch}
            title="This site is maintained by"
          />
        </Box>
      )}
      <Grid
        templateColumns={{ base: "1fr", md: "6fr 3fr 3fr" }}
        color="current.textLight"
      >
        <Box fontFamily="monospace" gridRow={{ base: 3, md: 1 }} marginTop={{ base: 6, md: 0 }}>
          <Box>
            {customText.length > 0 ? (
              customText
            ) : (
              <Text>
                Copyright &copy; 2009 &ndash; {new Date().getFullYear()}{" "}
                CodeDay.
                <br />A 501(c)(3) nonprofit.{" "}
                <CopyText label="EIN: ">26-4742589</CopyText>.<br />
                <Link href="tel:18886077763">(888) 607-7763</Link>
              </Text>
            )}
          </Box>
          <Box marginTop={4}>
            <Link
              href="https://www.codeday.org/eco"
              rel="noopener"
              target="_blank"
            >
              <Eco /> {ecoLink}
            </Link>
            <br />
            <Link href="https://www.codeday.org/privacy" rel="noopener">
              {cookiesLink}
            </Link>
            <br />
            <Link
              href="https://www.codeday.org/privacy/controls"
              rel="noopener"
              target="_blank"
            >
              {ccpaLink}
            </Link>
          </Box>
        </Box>
        <Box
          gridRow={{ base: 2, md: 1 }}
          marginTop={{ base: customLinks.length > 0 ? 6 : "", md: 0 }}
        >
          {customLinks.length > 0 && (
            <Heading as="h2" fontSize="xl">
              More
            </Heading>
          )}
          {customLinks}
        </Box>
        <Box>
          <Heading as="h2" fontSize="xl">
            Resources
          </Heading>
          <StandardLinks />
        </Box>
      </Grid>
    </Content>
  );
});
export { Footer };
