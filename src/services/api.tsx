import React, { MutableRefObject } from "react";
import { SectionList, View, TouchableOpacity, Text } from "react-native";

interface Props {
  listRef: MutableRefObject<SectionList<any> | undefined>;
}

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.listRef.current?.scrollToLocation({
          itemIndex: 0,
          sectionIndex: 0,
          animated: true
        });
      }}
    >
      <Text>Scroll Up</Text>
    </TouchableOpacity>
  );
};

const Screen = () => {
  const listRef = useRef<SectionList<any>>();

  return (
    <View>
      <SectionList ref={listRef} />
      <Button listRef={listRef} />
    </View>
  );
};