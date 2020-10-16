import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {
  useTheme,
  // Avatar,
  // Title,
  // Caption,
  // Paragraph,
  Drawer,
  // Text,
  // TouchableRipple,
  // Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {setTitleNavbar} from '../actions/ui.action';
import {startInscriptionRead} from '../actions/inscription.action';

export function DrawerDashboardContent(props) {
  // const paperTheme = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {/* <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View> */}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="dashboard" color={color} size={size} />
              )}
              label="Principal"
              onPress={() => {
                dispatch(setTitleNavbar('Principal'));
                props.navigation.navigate('HomeDash');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="assignment-ind" color={color} size={size} />
              )}
              label="Realizar Inscripción"
              onPress={() => {
                dispatch(setTitleNavbar('Realizar Inscripción'));
                props.navigation.navigate('InscriptionCreate');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="assignment-late" color={color} size={size} />
              )}
              label="Cancelar Inscripción"
              onPress={() => {
                dispatch(setTitleNavbar('Cancelar Inscripción'));
                props.navigation.navigate('InscriptionDelete');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="assignment" color={color} size={size} />
              )}
              label="Inscripciones"
              onPress={() => {
                dispatch(setTitleNavbar('Inscripciones'));
                dispatch(startInscriptionRead());
                props.navigation.navigate('InscriptionRead');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="assignment-turned-in" color={color} size={size} />
              )}
              label="Admitir plaza"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="exit-to-app" color={color} size={size} />
              )}
              label="Cerrar Sesión"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
});
