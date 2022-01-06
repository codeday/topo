import React, { useState, useEffect, useReducer, useCallback } from "react"
import { Announcement } from "@codeday/topo/Organism"
import X from "@codeday/topocons/Icon/UiX";
import PropTypes from "prop-types";
import useSwr from "swr";
import { Box, Button, Grid, Text } from "@codeday/topo/Atom";
import { Content } from "@codeday/topo/Molecule";
import { useTheme, apiFetch } from "@codeday/topo/utils";
const Index = () => {
  return (
    <Announcement>
      <Button
        onClick={() =>
          window.localStorage.setItem("topoDismissedAnnouncements", "[]")
        }
      >
        Reset Dismissed
      </Button>
    </Announcement>
  )
}
export default Index

const query = (date, visibility) => `{
  cms {
    announcements(
      where: {
        visibility: "${visibility}"
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
};

const fromIso = (s) => {
  var b = s.split(/\D+/).map((obj) => Number(obj));
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};
// function Announcement({ dark, box, ...props }) {
//   const { visibility, programWebname } = useTheme();
//   console.log(visibility)
//   const [date, updateDate] = useReducer(getDate, getDate());
//   const { data } = useSwr(query(date, visibility), apiFetch);
//   console.log(data)
//   const [dismissedMessages, setDismissedMessages] = useLocalStorage(
//     "topoDismissedAnnouncements",
//     []
//   );
//   console.log(dismissedMessages)

//   const items = data?.cms?.announcements?.items;
//   const sortedItems =
//     !items || items.length === 0
//       ? null
//       : items
//         .filter(
//           (i) =>
//             i.programs.items.length === 0 ||
//             i.programs.items
//               .map((p) => p.webname)
//               .includes(programWebname)
//         )
//         .sort(
//           (
//             a,
//             b
//           ) => {
//             if (
//               a.programs.items.length > 0 &&
//               b.programs.items.length === 0
//             ) {
//               return -1;
//             }

//             return fromIso(a.displayAt) > fromIso(b.displayAt) ? -1 : 1;
//           }
//         );

//   const item = sortedItems ? sortedItems[0] : null;

//   useEffect(() => {
//     const interval = setInterval(() => updateDate(), 60000);
//     return () => clearInterval(interval);
//   });

//   if (!item) return <></>;

//   const baseColor = {
//     New: "blue",
//     Improved: "indigo",
//     Alert: "red",
//   }[item.type];

//   if (box) {
//     return (
//       <Box
//         bg={`${baseColor}.${dark ? 900 : 50}`}
//         color={`${baseColor}.${dark ? 600 : 800}`}
//         borderRadius={4}
//         p={4}
//         m={0}
//         d="block"
//         as={item.link ? "a" : "div"}
//         href={item.link}
//         target={item.link ? "_blank" : null}
//         {...props}
//       >
//         <Text fontFamily="accent" fontSize="4xl" lineHeight={1.2}>
//           {item.title}
//         </Text>
//         <Text>{item.oneline}</Text>
//         <Button size="sm" colorScheme={baseColor} mb={0}>
//           Learn More
//         </Button>
//       </Box>
//     );
//   }

//   if ((dismissedMessages || []).includes(item.sys.id)) return <></>;

//   const Close = (
//     <Box
//       d="inline"
//       position="relative"
//       top="-2px"
//       paddingRight={2}
//       onClick={(e) => {
//         setDismissedMessages([...dismissedMessages, item.sys.id]);
//         e.preventDefault();
//         e.stopPropagation();
//         return false;
//       }}
//     >
//       <X aria-label="Close" />
//     </Box>
//   );

//   return (
//     <Box
//       bg={`${baseColor}.${dark ? 900 : 50}`}
//       color={`${baseColor}.${dark ? 600 : 800}`}
//       p={2}
//       m={0}
//       d="block"
//       as={item.link ? "a" : "div"}
//       href={item.link}
//       target={item.link ? "_blank" : null}
//       aria-label="Announcement"
//       {...props}
//     >
//       <Content wide mb={0}>
//         <Box d={{ base: "none", lg: "block" }} mb={0}>
//           <Grid templateColumns="4fr 1fr" alignItems="center">
//             <Box>
//               {Close}
//               <Text mb={0} d="inline">
//                 {item.oneline}
//               </Text>
//             </Box>
//             <Box textAlign="right">
//               <Button size="sm" colorScheme={baseColor} mb={0}>
//                 Learn More
//               </Button>
//             </Box>
//           </Grid>
//         </Box>
//         <Box
//           d={{ base: "none", md: "block", lg: "none" }}
//           mb={0}
//           textAlign="center"
//         >
//           {Close}
//           {item.oneline}
//         </Box>
//         <Box d={{ base: "block", md: "none" }} mb={0}>
//           <Grid templateColumns="1fr 5fr" alignItems="center">
//             <Box>{Close} </Box>
//             <Box textAlign="center">{item.title}</Box>
//           </Grid>
//         </Box>
//       </Content>
//     </Box>
//   );
// }
// Announcement.propTypes = {
//   dark: PropTypes.bool,
//   box: PropTypes.bool,
// };
// Announcement.defaultProps = {
//   dark: false,
//   box: false,
// };

export function useLocalStorage(key, initialValue) {
  const [hasValue, setHasValue] = useState(false);
  console.log(key);
  const [value, setValue] = useState(
    () => (
      typeof window !== 'undefined'
        // eslint-disable-next-line no-undef
        ? (JSON.parse(window.localStorage.getItem(key || '')) || initialValue)
        : initialValue
    )
  );

  const handleStorageUpdate = useCallback(
    (event) => {
      if (event.key === key && event.newValue !== value) {
        setValue(JSON.parse(event.newValue) || initialValue);
      }
    },
    [value]
  );

  const setItem = (newValue) => {
    setValue(newValue);
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      setHasValue(true);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // If the SSR set the state, update localStorage during hydration.
      if (hasValue) {
        setItem(value);

        // Now that we're hydrated, re-set the value to the actual value from localStorage
      } else {
        // eslint-disable-next-line no-undef
        const newValue = window.localStorage.getItem(key);
        if (value !== newValue) {
          setValue(newValue || initialValue);
        }
      }
    }
  }, [typeof window]);

  // Register the onUpdate handler
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      window.addEventListener('storage', handleStorageUpdate);
    }
    return () => {
      if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        window.removeEventListener('storage', handleStorageUpdate);
      }
    };
  }, [handleStorageUpdate, typeof window]);

  return [value, setItem];
}