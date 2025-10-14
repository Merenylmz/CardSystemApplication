import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={styles.container}>{children}</View>
  );
};

export default Layout;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 16,
        flex: 1
    }
});
