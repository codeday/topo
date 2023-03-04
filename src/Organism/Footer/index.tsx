import { Eco } from "@codeday/topocons";
import React, { forwardRef, ReactNode } from "react";
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
  BoxProps,
} from "topo/Atom";
import { Content, GithubAuthors } from "topo/Molecule";
import { useString } from "topo/utils";
import { useQuery } from "topo/Theme";
import { ChakraProps, ComponentWithAs } from "@chakra-ui/react";

export const CustomLinks: ComponentWithAs<"div", BoxProps> =
  makePureBox("Custom Links");
export const CustomText: ComponentWithAs<"div", BoxProps> =
  makePureBox("CustomText");

const StandardLinks = () => {
  const links = useQuery<
    { sys: { id: string }; link: string; title: string }[] | undefined
  >("cms.sites.items");

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
  repository?: string;
  owner?: string;
  branch?: string;
  children: ReactNode;
}

const Footer = forwardRef(
  ({ children, repository, owner, branch, ...props }: FooterProps, ref) => {
    const cookiesLink = useString("legal.cookies", <Skelly />);
    const ccpaLink = useString("legal.ccpa", <Skelly />);
    const ecoLink = useString("eco.link", <Skelly />);
    const resourcesHeading = useString("resources", <Skelly />);
    const customHeading = useString("custom-links", <Skelly />);
    const copyright = useString("copyright", <>&copy; CodeDay</>);
    const nonprofit = useString("nonprofit", "");
    const maintainedBy = useString(
      "maintained-by",
      "This site is maintained by"
    );
    const madeWithLove = useString("made-with-love", <Skelly />);

    const localizationContact = useQuery<
      { contactDefaultType: string; contactDefaultValue: string } | undefined
    >("cms.localizationConfig");

    const customLinks = childrenOfType(children, CustomLinks);
    const customText = childrenOfType(children, CustomText);

    return (
      <Content
        ref={ref as React.MutableRefObject<any>}
        role="contentinfo"
        {...props}
      >
        {repository && (
          <Box mb={4}>
            <Text fontFamily="monospace" color="current.textLight">
              {madeWithLove}
            </Text>
            <GithubAuthors
              repository={repository}
              owner={owner}
              branch={branch}
              title={maintainedBy}
            />
          </Box>
        )}
        <Grid
          templateColumns={{ base: "1fr", md: "6fr 3fr 3fr" }}
          color="current.textLight"
        >
          <Box
            fontFamily="monospace"
            gridRow={{ base: 3, md: 1 }}
            marginTop={{ base: 6, md: 0 }}
          >
            <Box>
              {customText.length > 0 ? (
                customText
              ) : (
                <Text>
                  {typeof copyright === "string"
                    ? copyright.replace(
                        "{currentYear}",
                        new Date().getFullYear().toString()
                      )
                    : copyright}
                  <br />
                  {nonprofit} <CopyText label="EIN: ">26-4742589</CopyText>.
                  <br />
                  {localizationContact &&
                    (localizationContact.contactDefaultValue === "whatsapp" ? (
                      <Link
                        href={`https://api.whatsapp.com/send?phone=${localizationContact.contactDefaultValue.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                      >
                        {localizationContact.contactDefaultValue}
                      </Link>
                    ) : (
                      <Link
                        href={`tel:${localizationContact.contactDefaultValue.replace(
                          /[^0-9]/g,
                          ""
                        )}`}
                      >
                        {localizationContact.contactDefaultValue}
                      </Link>
                    ))}
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
                {customHeading}
              </Heading>
            )}
            {customLinks}
          </Box>
          <Box>
            <Heading as="h2" fontSize="xl">
              {resourcesHeading}
            </Heading>
            <StandardLinks />
          </Box>
        </Grid>
      </Content>
    );
  }
);
export { Footer };
