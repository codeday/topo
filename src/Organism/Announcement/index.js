import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import useSwr from 'swr';
import X from '@codeday/topocons/Icon/UiX';
import { useTheme } from 'topo/utils';
import Box, { Grid } from 'topo/Atom/Box';
import Button from 'topo/Atom/Button';
import Content from 'topo/Molecule/Content';
import Text, { Link } from 'topo/Atom/Text';
import { useLocalStorage, apiFetch } from 'topo/utils';

const query = (date, visibility) => `{
  cms {
    announcements(
      where: {
        visibility: "${visibility}",
        displayAt_lte: "${date}",
        endAt_gte: "${date}"
      }
    ) {

      items {
        sys {
          id
        }
        title
        oneline
        displayAt
        type
        link
        displayAt
        programs {
          items {
            webname
          }
        }
      }
    }

  }
}`;

const getDate = () => {
  const d = new Date();
  d.setUTCHours(d.getUTCHours() - 7);
  return d.toISOString();
}

const fromIso = (s) => {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

export default function Announcement({ dark, box, ...props }) {
  const { visibility, programWebname } = useTheme();
  const [date, updateDate] = useReducer(getDate, getDate());
  const { data } = useSwr(query(date, visibility), apiFetch);
  const [dismissedMessages, setDismissedMessages] = useLocalStorage('topoDismissedAnnouncements', []);

  const items = data?.cms?.announcements?.items;
  const sortedItems = (!items || items.length === 0) ? null : (
    items
      .filter((i) => (
        i.programs.items.length === 0 ||
        i.programs.items.map((p) => p.webname).includes(programWebname)
      ))
      .sort((a, b) => {
        if (a.programs.items.length > 0 && b.programs.items.length === 0) {
          return -1;
        }

        return fromIso(a.displayAt) > fromIso(b.displayAt) ? -1 : 1;
      })
  );

  const item = sortedItems ? sortedItems[0] : null;

  useEffect(() => {
    const interval = setInterval(() => updateDate(), 60000);
    return () => clearInterval(interval);
  });

  if (!item) return <></>;

  const baseColor = {
    New: 'blue',
    Improved: 'indigo',
    Alert: 'red'
  }[item.type];

  if (box) {
    return (
      <Box
        bg={`${baseColor}.${dark ? 900 : 50}`}
        color={`${baseColor}.${dark ? 600 : 800}`}
        borderRadius={4}
        p={4}
        m={0}
        d="block"
        as={item.link ? 'a' : 'div'}
        href={item.link}
        target={item.link ? '_blank' : null}
        {...props}
      >
        <Text fontFamily="accent" fontSize="4xl" lineHeight={1.2}>{item.title}</Text>
        <Text>{item.oneline}</Text>
        <Button size="sm" colorScheme={baseColor} mb={0}>Learn More</Button>
      </Box>
    )
  }

  if ((dismissedMessages || []).includes(item.sys.id)) return <></>;

  const Close = (
    <Box
      d="inline"
      position="relative"
      top="-2px"
      paddingRight={2}
      onClick={(e) => {
        setDismissedMessages([...dismissedMessages, item.sys.id])
        e.preventDefault();
        e.stopPropagation();
        return false;
      }}
    >
      <X aria-label="Close" />
    </Box>
  );

  return (
    <Box
      bg={`${baseColor}.${dark ? 900 : 50}`}
      color={`${baseColor}.${dark ? 600 : 800}`}
      p={2}
      m={0}
      d="block"
      as={item.link ? 'a' : 'div'}
      href={item.link}
      target={item.link ? '_blank' : null}
      aria-label="Announcement"
      {...props}
    >
      <Content wide mb={0}>
        <Box d={{ base: 'none', lg: 'block' }} mb={0}>
          <Grid templateColumns="4fr 1fr" alignItems="center">
            <Box>
              {Close}
              <Text mb={0} d="inline">
                  {item.oneline}
              </Text>
            </Box>
            <Box textAlign="right">
              <Button size="sm" colorScheme={baseColor} mb={0}>Learn More</Button>
            </Box>
          </Grid>
        </Box>
        <Box d={{ base: 'none', md: 'block', lg: 'none'}} mb={0} textAlign="center">
          {Close}
          {item.oneline}
        </Box>
        <Box d={{ base: 'block', md: 'none'}} mb={0}>
          <Grid templateColumns="1fr 5fr" alignItems="center">
            <Box>
              {Close}{' '}
            </Box>
            <Box textAlign="center">
              {item.title}
            </Box>
          </Grid>
        </Box>
      </Content>
    </Box>
  );
}
Announcement.propTypes = {
  dark: PropTypes.bool,
  box: PropTypes.bool,
};
Announcement.defaultProps = {
  dark: false,
  box: false,
};
